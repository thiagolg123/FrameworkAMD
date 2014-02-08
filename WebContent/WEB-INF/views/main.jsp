<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
 <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>   
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<title>.:: Estudo ::.</title>
		 <meta charset = "utf-8" /> 
		<link rel="stylesheet" href="resources/bootstrap/css/bootstrap.css" media="screen">
		<link rel="stylesheet" href="resources/bootstrap/css/bootstrap-responsive.css" media="screen">
		<link rel="stylesheet" href="resources/bootstrap/css/docs.css" media="screen">
		<link rel="stylesheet" href="http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css" media="screen">
		<script data-main="resources/main" src="resources/require.js"></script>
		<style type="text/css">
			#content {
				margin-bottom: 100px;
			}	
		</style>
	</head>
	<body>
	<c:import url="header.jsp" />
	<div class="container"><!-- Inicio Conteúdo -->
		<div class="row">
			<section id="content"></section>
		</div>
	</div>		
	<c:import url="footer.jsp" />
	</body>
</html>