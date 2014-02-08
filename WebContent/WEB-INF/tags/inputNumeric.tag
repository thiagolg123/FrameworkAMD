<%@ tag language="java" pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ attribute name="id" required="true" description="Id e Name" %>
<%@ attribute name="type" required="true" description="int = Inteiro (default), moe = Moeda"%>
<%@ attribute name="clazz" required="true" description="Classe de estilo" %>
<%@ attribute name="maxlength" required="true" description="Tamanho do campo" %>
<%@ attribute name="label" description="Rotulo"%>
<c:if test="${not empty label && label != '' }">
	<label>${label}</label>
</c:if>
<input id="${id}" name="${id}" type="text" maxlength="${maxlength}" class="${clazz}">
<script>
	require([ 'jquery', 'ModPage', 'jquery-ui', 'jquery.mask' ], function($,
			ModPage) {

		var Input = ModPage.extend({

			render : function() {
				<c:choose>
			       	<c:when test="${type eq 'moe'}">
			    		$('#${id}').mask("#.##0,00", {
							reverse : true,
							maxlength : false
						});
			    	</c:when>
					<c:otherwise>
						$('#${id}').mask('0#',{
							maxlength : false
						});
					</c:otherwise>
				</c:choose>
			}

		});

		var input = new Input();
		input.render();
	});
</script>



