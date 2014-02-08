<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ tag language="java" pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ attribute name="id" required="true" description="Id e Name"%>
<%@ attribute name="type" required="true" description="d = Data (Default), h = Hora, dh= Data e Hora  " %>
<%@ attribute name="clazz" required="true" description="Classe de estilo" %>
<%@ attribute name="label" description="Rotulo" %>
<c:if test="${not empty label && label != '' }">
	<label>${label}</label>
</c:if>
<input id="${id}" name="${id}" class="${clazz}" type="text">
<script>
	require(['jquery','ModPage', 'jquery-ui','jquery.mask'],
	function($, ModPage) {
		
		var Input = ModPage.extend({
					
			render: function(){
				<c:choose>
		       		<c:when test="${type eq 'h'}">
		       			$('#${id}').mask('00:00');
		    		</c:when>
		    		<c:when test="${type eq 'dh'}">
		    			$('#${id}').mask('00/00/0000 00:00');
	    			</c:when>
					<c:otherwise>
						$('#${id}').datepicker({dateFormat: 'dd/mm/yy'});
						$('#${id}').mask('00/00/0000');
					</c:otherwise>
				</c:choose>
			}
		
		});
		
		var input = new Input();
		input.render();
	});
</script>
   
  