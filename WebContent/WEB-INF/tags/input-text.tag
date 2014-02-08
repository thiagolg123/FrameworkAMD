<%@ tag language="java" pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ attribute name="id" required="true" description="Id e Name"%>
<%@ attribute name="type" required="true" description="Atributo type do input" %>
<%@ attribute name="clazz" required="true" description="Classe de estilo" %>
<%@ attribute name="maxlength" required="true" description="Atributo maxlength do input" %>
<%@ attribute name="label" description="Rotulo" %>
<c:if test="${not empty label && label != '' }">
	<label>${label}</label>
</c:if>
<input id="${id}" name="${id}" class="${clazz}" type="${type}" maxlength="${maxlength }">
<script>
	require(['jquery','ModPage', 'jquery-ui','jquery.mask'],
	function($, ModPage) {
		
		var Input = ModPage.extend({
			render: function(){
			}
		
		});
		
		var input = new Input();
		input.render();
	});
</script>
