define(['jquery', 'modAjax','jquery.hashchange',  'jquery-ui'], function($, modAjax){
	
	return {
	
		init: function(){
	
			var _this = this;
			
			if(this.reloadHashChange()){
			 return;	
			}
			
			$(window).hashchange(function(){
				var hash = location.hash.replace(/^#/, '');
				if(hash){
					_this.setContent(hash);
				}
			});
			
			$(window).hashchange();
		},
		
		reloadHashChange: function(){
			var retorno = false;
			$("a").click(function(){
				var hashUpdate = $(this).attr('href').replace(/^#/, '');
				var hash = location.hash.replace(/^#/, '');
				
				if(hash && hash == hashUpdate){
					retorno = true;
					$(window).hashchange();
					return retonro;
				}
			});
			
			return retorno;
		},

		
		setContent: function(url){
			modAjax.requestAjax(url, 'GET');
		}
	
	};
});
	