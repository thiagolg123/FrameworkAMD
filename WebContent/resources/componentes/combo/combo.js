define(['jquery','ModComponent', 'text!./combo.html'], function($, ModComponent, comp) {

	var Combo = ModComponent.extend({
		
		component: comp,
	
		events:{
			
		},
		
		preRender: function(){
			if(this.options.items){
				this.json.itemsCombo = this.options.items;
			}
		}
	});
	
	return Combo;
    
});
/*
	this.json.itemsTable = [	
		{'linha':[{'item':'Home'}, {'item':'Home'}, {'item':'Home'}]}, 
	];		
*/