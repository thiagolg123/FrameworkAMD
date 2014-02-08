define(['jquery','ModPage','modUtil'],
	function($, ModPage, modUtil) {
		
		var CadastrarUsuario = ModPage.extend({
			
			events:{
				'click #salvar': 'salvar',
				'click #limpar': 'limpar',
				'click #cancelar': 'cancelar',
			},	
		
			salvar: function(event){
				event.preventDefault();
				var formSelected =  modUtil.serializeObject('formulario');
				
				if(formSelected.nome.length <= 0){
					alert('Preencha o campo nome!');
					$("#nome").focus();
					return false;
				}
				if(formSelected.usuario.length <= 0){
					alert('Preencha o campo usuario!');
					$("#usuario").focus();
					return false;
				}
				if(formSelected.senha.length <= 0){
					alert('Preencha o campo senha!');
					$("#senha").focus();
					return false;
				}
				if(formSelected.confSenha.length <= 0){
					alert('Preencha o confirmar senha!');
					$("#confSenha").focus();
					return false;
				}
				if(formSelected.senha != formSelected.confSenha){
					alert('A senha e a confirmação da senha estão diferentes!');
					$("#senha").focus();
					return false;
				}
				
				this.postPage('salvar/usuario', formSelected, $.proxy(this.success, this), $.proxy(this.error, this));
				return false;
			},
			
			limpar: function(event){
				event.preventDefault();
				
				modUtil.resetForm('formulario');
				
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