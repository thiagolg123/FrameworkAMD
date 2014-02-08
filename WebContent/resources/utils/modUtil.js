define(['jquery'], function($){
	
	return {
		//Serialize form html
		serializeObject: function(idForm){
			var id = '#'+idForm;
			
			var o = {};
			var a = $(id).serializeArray();
		    $.each(a, function() {
		        if (o[this.name] !== undefined) {
		            if (!o[this.name].push) {
		                o[this.name] = [o[this.name]];
		            }
		            o[this.name].push(this.value || '');
		        } else {
		            o[this.name] = this.value || '';
		        }
		    });
		    return o;
		},
		
		//Validate HashChange 
		validateHash: function(url){
			var retorno = false;
			
			if(url != 'main'){
				retorno = true;
			}
			
			return retorno;
		},
		
		resetForm: function(idForm){
			var f = $('#'+idForm);
			$.each(f, function(index, value) {
				value.reset();
			});
		}
		
	};
	
});