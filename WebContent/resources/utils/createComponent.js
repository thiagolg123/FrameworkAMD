define(['jquery'], function($){
	return {
			
		render: function($element){
			var _this = this;
		  	$(document).ready(function(){
				$scope =  $element || $("body");
				
				$scope.find("[data-component]").each(function(){
					var $el = $(this);
					var component = $el.attr("data-component");
					var url = 'componentes/' + component + '/' + component; //url for the componetn
					require([url], function(PagObject){
						new PagObject($el , $el.data());
					});
				
				});
		  	});
		},
		
	};
});
	