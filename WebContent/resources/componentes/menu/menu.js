define(['jquery', 'ModComponent', 'text!./menu.html'], function($, ModComponent, comp) {
			
	var Menu = ModComponent.extend({
		
		component: comp
		
	});
	
	return Menu;
});