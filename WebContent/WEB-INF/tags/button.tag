<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ tag language="java" pageEncoding="ISO-8859-1"%>
<%@ attribute name="id" required="true" description="Id e Name"%>
<%@ attribute name="label" required="true" description="Rotulo" %>
<%@ attribute name="type" required="true" description="gray = Cinza (Default), blue = Azul, red = Vermelho, yellow = Amarelo" %>
<c:choose>
	<c:when test="${type eq 'blue'}">
		<button id="${id}" name="${id}" class="btn btn-primary">${label}</button>
  	</c:when>
  	<c:when test="${type eq 'red'}">
		<button id="${id}" name="${id}" class="btn btn-danger">${label}</button>
  	</c:when>
  	<c:when test="${type eq 'yellow'}">
		<button id="${id}" name="${id}" class="btn btn-warning">${label}</button>
  	</c:when>
	<c:otherwise>
		<button id="${id}" name="${id}" class="btn btn-inverse">${label}</button>
	</c:otherwise>
</c:choose>