define(['jquery', 'modUtil', 'createComponent'], function($, modUtil, createComponent){
	
	return	{
		
		ajax: function(url, method, params, success, error){
			$.ajax({
				url: url,
				type: method,
				data: params,
				success: success,
				error: error,
			});
		},
		
		//request ajax (url='hash', method='POST || GET', formSelected='form Serialize') return one page and load javascript
		requestAjax: function(url, method, params){
			if(modUtil.validateHash(url)){
				location.hash = url;
				this.ajax(url, method, params, $.proxy(this.success, this), $.proxy(this.error, this));
			}//end if	
		},//end method
			
		success: function(data){
			$('section#content').html(data);
			
			var url = location.hash.replace('#','');
			if(url){
				require(['pages/'+url], function(PagObject){
					new PagObject();
				});	
			}
		},
	
		error: function(data){
			throw new Error("Error ao carregar a pagina!");
		},
	
		//request ajax (url='hash', method='POST || GET', formSelected='form Serialize') return one JSON
		requestAjaxJSON: function(url, method, params, success, error){
			this.ajax(url, method, params, success, error);
		}		
	};

});
	