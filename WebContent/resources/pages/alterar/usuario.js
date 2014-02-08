define(['jquery','ModPage','modUtil'],
	function($, ModPage, modUtil) {
		
		var CadastrarUsuario = ModPage.extend({
			
			events:{
				'click #atualizar': 'atualizar',
				'click #cancelar': 'cancelar',
			},	
		
			atualizar: function(event){
				event.preventDefault();
				var formSelected =  modUtil.serializeObject('formulario');
				
				if(formSelected.nome.length <= 0){
					alert('Preencha o campo nome!');
					$('#nome').focus();
					return false;
				}
				if(formSelected.senhaAtual.length <= 0){
					alert('Preencha o campo senha atual!');
					$('#senhaAtual').focus();
					return false;
				}
				if(formSelected.senha.length <= 0){
					alert('Preencha o campo senha!');
					$('#senha').focus();
					return false;
				}
				if(formSelected.confSenha.length <= 0){
					alert('Preencha o campo confirmar senha!');
					$('#confSenha').focus();
					return false;
				}
				if(formSelected.senha != formSelected.confSenha){
					alert('A senha e a confirmação da senha estão diferentes!');
					$('#senha').focus();
					return false;
				}
				
							
				this.postPage('atualizar/usuario', formSelected, $.proxy(this.success, this), $.proxy(this.error, this));
				return false;
			},
					
			cancelar: function(event){
				event.preventDefault();
				
				this.setContent('home');
				
				return false;
			},
			
			success: function(data){
				console.log(data);
			},
			
			error: function(data){
				console.log(data);
			}

		});
			
		return CadastrarUsuario;
});