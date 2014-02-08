define(['jquery','ModBase', 'mustache'], function($, ModBase, mustache){
	
	var ModComponent = ModBase.extend({

		context: null,
		options: {},
		json: {},
			
		//Construtctor
		initialize: function(context, options){
			this.$el = context;
			this.options = options;
			
			this.loadHash();
			
			if(this.events){
				this.loadSubPub();
			}

			if(this.preRender){
				this.preRender();
			}

			this.render();
						
			
			if(this.posRender){
				this.posRender();
			}
		
		},
				
		//Method pos render 
		render: function() {
			var info = mustache.render(this.component, this.json);
			this.$el.html(info);
			this.loadHash();
		},

		
});
	
    return ModComponent;
});
	