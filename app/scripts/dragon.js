function Dragon(layer, options) {
	'use strict';
	options = options || {};

	this.layer = layer;

	this.dataFiles = [];

	this.autoSorted = options.autoSorted || true;

	this.showThumbnail = options.showThumbnail || true;

	layer.addEventListener('dragenter', this.dragenterHandler.bind(this), false);
	layer.addEventListener('dragover', this.dragoverHandler.bind(this), false);
	layer.addEventListener('drop', this.dropHandler.bind(this), false);

}

Dragon.prototype.dragenterHandler = function(e) {
	this.layer.classList.add('dotted');
	e.stopPropagation();
	e.preventDefault();
}

Dragon.prototype.dragoverHandler = function(e) {
	e.stopPropagation();
	e.preventDefault();
}

Dragon.prototype.dropHandler = function(e) {
  e.stopPropagation();
  e.preventDefault();
  this.layer.classList.remove('dotted');

	// e.dataTransfer.items[0].getAsString(function(url){
 //        alert(url);
 //  });
	var html = e.dataTransfer.getData('text/html');
	this.addDataFile(html);
}

Dragon.prototype.addDataFile = function(html) {
	var wrapper,
			element,
			megaTag,
			tagName,
			dataFile = {
				tagName: null,
				link: null,
				content: null
			};


	//Extract the tag name from returned data
	megaTag = html.match(/^<meta.*></)[0];
	html = html.slice(megaTag.length - 1);
	tagName = html.slice(1, html.search(/\s/));

	dataFile.tagName = tagName;

	wrapper = document.createElement('div');
	wrapper.innerHTML = html;
	element = wrapper.firstChild;

	switch(tagName) {
		case 'img':
			dataFile.link = element.getAttribute('src');
			console.log(element.getAttribute('src'));
			break;
		case 'a':
			dataFile.link = element.getAttribute('href');
			break;
		default:
			dataFile.content = element.textContent;
			break;

	}

	console.log(dataFile);
}