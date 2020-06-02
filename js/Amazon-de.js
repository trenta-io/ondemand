// JavaScript Document
	var data;
			$.getJSON("https://ondemand.trenta.io/data/hero.json", function (json) {
				data = json;
				var transform = {
					"<>": "a", "href":"https://www.amazon.com/dp/${amazon}", "html": [
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

			$.getJSON("https://ondemand.trenta.io/data/popular.json", function (json) {
				data = json;
				var transform = {
					"<>": "div", "class": "col-3 featured", "html": [
						{
							"<>": "a", "href":"https://www.amazon.com/dp/${amazon}", "html": [
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


		
			$.getJSON("https://ondemand.trenta.io/data/topselling.json", function (json) {
				data = json;
				var transform = {
					"<>": "div", "class": "col-4 topseller", "html": [
						{
							"<>": "a", "href":"https://www.amazon.com/dp/${amazon}", "html": [
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
