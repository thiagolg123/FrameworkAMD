<%@taglib tagdir="/WEB-INF/tags" prefix="t" %>
<div data-component="breadcrumb" data-itens='[{"item":"Home", "url": "home"}, {"item":"Cadastrar", "url": "cadastrar/usuario"}, {"item":"Usuario"}]'></div>
<form id="formulario">
	<div class="controls docs-input-sizes">
		<t:input-text clazz="span9" maxlength="70" type="text" id="nome" label="Nome: "/>
		<t:input-text clazz="span5" maxlength="35" type="text" id="usuario" label="Nome do usu&aacute;rio "/>
		<t:input-text clazz="span2" maxlength="30" type="password" id="senha" label="Senha: "></t:input-text>
		<t:input-text clazz="span2" maxlength="30" type="password" id="confSenha" label="Confirmar senha: "></t:input-text>
	</div>
</form>
<div class="form-actions">
	<t:button label="Cancelar" type="red" id="cancelar"/>
	<t:button label="Limpar" type="yellow" id="limpar"/>
	<t:button label="Salvar" type="blue" id="salvar"/>
</div>