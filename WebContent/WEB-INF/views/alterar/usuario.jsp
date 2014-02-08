<%@taglib tagdir="/WEB-INF/tags" prefix="t" %>
<%@taglib uri="http://estudo.com/tags" prefix="f" %>
<div data-component="breadcrumb"></div>
<form id="formulario">
	<div class="controls docs-input-sizes">
		<t:input-text clazz="span9" maxlength="70" type="text" id="nome" label="Nome: "/>
		<t:input-text clazz="span2" maxlength="30" type="text" id="senhaAtual" label="Senha Atual: "></t:input-text>
		<t:input-text clazz="span2" maxlength="30" type="password" id="senha" label="Nova Senha: "></t:input-text>
		<t:input-text clazz="span2" maxlength="30" type="password" id="confSenha" label="Confirmar senha: "></t:input-text>
	</div>
	<div class="form-actions">
		<t:button label="Cancelar" type="red" id="cancelar"/>
		<t:button label="Atualizar" type="blue" id="atualizar"/>
	</div>
</form>
