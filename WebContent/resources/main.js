requirejs.config({
    baseUrl: 'resources',
	paths:{
		'jquery':'lib/jquery-1.8.3.min',
		'jquery.hashchange':'lib/jquery.ba-hashchange.min',
		'Underscore': 'lib/underscore-min',
		'Backbone':'lib/backbone-min',
		'ModBase':'utils/modBase',
		'ModPage':'utils/modPage',
		'ModComponent':'utils/modComponent',
		'modAjax':'utils/modAjax',
		'modUtil':'utils/modUtil',
		'loadContent':'utils/loadContent',
		'createComponent':'utils/createComponent',
		'bootstrap':'bootstrap/js/bootstrap',
		'jquery-ui':'lib/jquery-ui',
		'jquery.mask':'lib/jquery.mask',
		'mustache': 'lib/mustache',
		'topic': 'lib/topic',
		'component': 'lib/component',
		'text': 'lib/text'
	},
	shim:{
		'Backbone' : {
			deps: ['jquery','Underscore'],
			exports: 'Backbone'
		},
		
		'bootstrap' : {
			deps: ['jquery'],
			exports: 'bootstrap'
		},
		
		'jquery.hashchange' : {
			deps: ["jquery"],
			exports: '$'
		},
		'jquery-ui' : {
			deps: ["jquery"],
			exports: '$'
		},
		'jquery.mask': {
			deps: ["jquery"],
			exports: '$'
		},
		'mustache': {
			deps: ["jquery"],
			exports: '$'
		}
	}
 });

require(['jquery','loadContent','createComponent','bootstrap', 'jquery.hashchange',  'jquery-ui'],
	function($, loadContent, createComponent, bootstrap) {
		loadContent.init();
		createComponent.render();
});



