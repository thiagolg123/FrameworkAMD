define(['jquery','ModComponent', 'text!./breadcrumb.html'], function($, ModComponent, comp) {
			
	var Breadcrumb = ModComponent.extend({
			
		itens: [],
		component: comp,
		
		preRender: function(){
			this.json.crumbs = [];
			this.json.last = {};
			
			if(this.options.itens){
				this.itens = this.options.itens;
			}else{
				this.loadCrumbs();
			}
			
			this.createComponent();
		},
		
		loadCrumbs: function(){
			this.itens = [{'item':'Home', 'url': 'home'}, {'item':'Alterar', 'url': 'alterar/usuario'}, {'item':'Usuario'}];
			
		},
		
		createComponent: function(){
			
			for(var i = 0; i < this.itens.length; i++){
				if((i+1) < this.itens.length){
					this.json.crumbs.push(this.itens[i]);
				}else{
					this.json.last = this.itens[i];
				}
			
			}
		}
		
	});
	
	return Breadcrumb;
    
});
/*
 	this.itens = [
 		{'item':'Home', 'url': 'home'}, {'item':'Alterar', 'url': 'alterar/usuario'}, {'item':'Usuario'}
 	];
 */