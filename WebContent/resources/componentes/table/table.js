/* Estrutura da Tabela	
	
	this.json.labels = [{'item':'Home'}, {'item':'Alterar'}, {'item':'Usuario'}];
	this.itemsTable = [];
	
	this.json.itemsTable = [	
								{'linha':[{'item':'Home'}, {'item':'Home'}, {'item':'Home'}]}, 
	                        ];
 */	
define(['jquery', 'ModComponent', 'text!./table.html', 'topic'], function($, ModComponent, comp, Topic) {

	var Table = ModComponent.extend({

		indexCurrent: 0, //Index Atual
		indexRange: 0,	//Index de Alcance
		maxItemsByPagination : 5, //Numero maximo de itens por Pagina
		indexLast: 0, //Ultimo item da Lista
		indexSelected: 0, //Item Selecionado
		maxPages: 7, //Numero de Paginas
		initial: 1,
		component: comp,
		
		events:{
			"click #nextPage": 'nextPage',
			"click #firstPage": "firstPage",
			"click #lastPage": "lastPage",
			"click #proxPage": "proxPage",
			"click #antPage": "antPage"
		},

		preRender: function(){
			
			this.options.labels = [];
			
			if(!this.options.allItems){
				this.options.allItems = [];
			}	
			
			this.json.itemsTable = [];
			this.json.labels = [];	
			this.json.pagination = [];
			this.json.itemsLength = 0;
			
			Topic(this.options.loadingTable).subscribe($.proxy(this.loadingTable, this));
			
			this.publish(this.options.eventLoad);
		},

		loadingTable: function(labels, itemsTable){
			this.updateIndex(1);
			this.options.allItems = itemsTable;
			this.options.labels = labels;
			this.indexLast = Math.ceil(this.options.allItems.length / this.maxItemsByPagination)-1;
			this.createLabels();
			this.createTable();
		},

		createLabels: function(labels){
			this.json.labels = this.options.labels;
		},
			
		createTable: function(){
			var itemsLength = this.options.allItems.length;
			this.json.itemsLength = itemsLength;
			this.json.itemsCurrentLength = (this.indexRange > itemsLength)? itemsLength: this.indexRange;
			this.json.itemsTable = this.options.allItems.slice(this.indexCurrent, this.indexRange);
			this.createLabels();
			if(this.options.allItems.length > this.maxItemsByPagination){
				this.createPagination();
			}
		},
			
		createPagination: function(){
			this.json.firstSelected = "";
			this.json.lastSelected = "";
			this.json.pagination = [];
									
			for(var i = this.initial; i <= this.maxPages; i++){
				
				var item = {'value': i, 'selected': ''};
								
				if(this.indexSelected == i){
					item.selected ='active';
					if(i == 1){
						this.json.firstSelected = "active";
					}
					else if(i == (this.indexLast)){
						this.json.lastSelected = "active";
					}
				}
								
				this.json.pagination.push(item);
			}
		
		},
		
		nextPage: function(evt){
			var element = $(evt.currentTarget);
			if(element.attr('data-active') != 'active'){
				var next =  parseInt(element.attr('data-next'));
				this.updateIndex(next);
			}
		},
					
		firstPage: function(){
			var item = 1;
			this.initial = 1;
			this.maxPages = 7; 
			this.updateIndex(item);
		},
		
		lastPage: function(){
			var item = this.indexLast;
			this.initial =  this.indexLast-6;
			this.maxPages = this.indexLast; 
			this.updateIndex(item);
		},
		
		antPage: function(){
			if(this.indexSelected > 1){
				var item = this.indexSelected-1;
				if(this.indexSelected == this.initial){
					this.initial -= 1;
					this.maxPages -= 1;
				}
				
				this.updateIndex(item);
			}
			 
		},		
		
		proxPage: function(){
			if(this.indexSelected < this.indexLast){
				var item = this.indexSelected+1;
				if(this.indexSelected == this.maxPages){
					this.initial += 1;
					this.maxPages += 1;
				}
				this.updateIndex(item);
			}
		},
		
		updateIndex: function(item){
			this.indexCurrent = (item > 1) ? (item * this.maxItemsByPagination) :  0;
			this.indexRange = this.indexCurrent + this.maxItemsByPagination;
			this.indexSelected = item;
			this.createTable();
			this.render();
		}
	
	});
	
	return Table;
    
});