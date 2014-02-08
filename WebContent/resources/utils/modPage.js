define(['jquery', 'ModBase', 'createComponent'], function($, ModBase, createComponent){
	
	var ModPage = ModBase.extend({
		
		
		initialize: function(){
						
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
			this.$el.html($('section#content').html());
			$('section#content').html(this.$el);
			createComponent.render($('section#content'));
			this.loadHash();
		}
	
	});
	
    return ModPage;
});
	