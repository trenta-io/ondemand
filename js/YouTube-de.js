// JavaScript Document
	var data;
			$.getJSON("https://ondemand.trenta.io/data/germany/hero.json", function (json) {
				data = json;
				var transform = {
					"<>": "a", "href":"https://www.youtube.com/watch?v=${movieid}", "html": [
						{
							"<>": "img", "src": "https://img.youtube.com/vi/${movieid}/maxresdefault.jpg", "class": "img-fluid", "alt":"${movietitle}"
								
								}
							]

				};
				$(function () {

					//Create the list
					$('#hero').json2html(data, transform);
				});
			});

			$.getJSON("https://ondemand.trenta.io/data/germany/popular.json", function (json) {
				data = json;
				var transform = {
					"<>": "div", "class": "col-3 featured", "html": [
						{
							"<>": "a", "href":"https://www.youtube.com/watch?v=${movieid}", "html": [
								{
									"<>": "img", "src": "https://img.youtube.com/vi/${movieid}/hqdefault.jpg", "class": "img-fluid", "alt":"${movietitle}" }	
									]
								}
							]

				};
				$(function () {

					//Create the list
					$('#featured').json2html(data, transform);
				});
			});


		
			$.getJSON("https://ondemand.trenta.io/data/germany/topselling.json", function (json) {
				data = json;
				var transform = {
					"<>": "div", "class": "col-4 topseller", "html": [
						{
							"<>": "a", "href":"https://www.youtube.com/watch?v=${movieid}", "html": [
								{
									"<>": "img", "src": "https://img.youtube.com/vi/${movieid}/hqdefault.jpg", "class": "img-fluid", "alt":"${movietitle}" }	
									]
								}
							]

				};
				$(function () {

					//Create the list
					$('#topselling').json2html(data, transform);
				});
			});
