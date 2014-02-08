define(['jquery', 'Backbone', 'modAjax', 'loadContent',  'topic'], function($, Backbone, modAjax, loadContent, Topic){
	
	var ModBase = Backbone.View.extend({
				
		//Load Subscribers and Publish
		loadSubPub: function(){
			this.createSubscribers();
		},
		
		//map read click for update hash
		loadHash: function(){
			loadContent.reloadHashChange();
		},
			
		//Subscribers
		createSubscribers: function(){
			if(this.events){
				for(var i in this.events){
					if(i.indexOf(" ") < 0){
						Topic(i).subscribe($.proxy(this, this.events[i]));
					}
				}
			}
		},
		
		//Publish
		publish: function(topic){
			var t = Topic(topic);
			t.publish.apply(t, Array.prototype.slice.call(arguments, 1));
		},
		
		//Request form POST - url(hash), data(form serialize)
		postPage: function(url, params, success, error){
			modAjax.requestAjaxJSON(url, 'POST', params, success, error);
		},
		
		//Request form GET - url(hash), data(form serialize)
		getPage: function(url, params, success, error){
			modAjax.requestAjaxJSON(url, 'GET', params, success, error);
		},
		
		//Set page in hashChange		
		setContent: function(url){
			modAjax.requestAjax(url, 'GET');
		
		}

	});
	
    return ModBase;
});
	