<%@ tag language="java" pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ attribute name="id" required="true" description="Id e Name" %>
<%@ attribute name="type" required="true"  description="cpf = CPF (Default), cnpj = CNPJ, tel = Telefone, cel = Celular, cep = CEP" %>
<%@ attribute name="label" description="Rotulo" %>
<%@ attribute name="clazz" description="Classe de estido" %>
<c:if test="${not empty label && label != '' }">
	<label>${label}</label>
</c:if>
<input id="${id}" name="${id}" type="text" class="${clazz}">
<script>
	require(['jquery','ModPage', 'jquery-ui','jquery.mask'],
	function($, ModPage) {
		
		var Input = ModPage.extend({
					
			render: function(){
				<c:choose>
		       		<c:when test="${type eq 'cnpj'}">
		    			$('#${id}').mask('00.000.000/0000-00', {reverse: true}); 
	    			</c:when>
	    			<c:when test="${type eq 'cep'}">
	    				$('#${id}').mask('00000-000');
    				</c:when>
    				<c:when test="${type eq 'cep'}">
    					$('#${id}').mask('00000-000');
					</c:when>
					<c:when test="${type eq 'tel'}">
						$('#${id}').mask('(00) 0000-0000');
					</c:when>
					<c:when test="${type eq 'cel'}">
						$('#${id}').mask('(00) 00000-0000');
					</c:when>
					<c:otherwise>
       					$('#${id}').mask('000.000.000-00');
					</c:otherwise>
				</c:choose>
			}
		
		});
		
		var input = new Input();
		input.render();
	});
</script>
  

	
