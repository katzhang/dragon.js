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

	// e.dataTransfer.items[0].getAsString(function(url){
 //        alert(url);
 //  });
	var html = e.dataTransfer.getData('text/html');
	this.addDataFile(html);
}

Dragon.prototype.addDataFile = function(file) {
	var megaTag,
			tagName,
			link,
			content,
			dataFile = {
				tagName: null,
				link: null,
				content: null
			};


	//Extract the tag name from returned data
	megaTag = file.match(/^<meta.*></)[0];
	file = file.slice(megaTag.length);
	console.log(file);
	tagName = file.slice(0, file.search(/\s/));

	dataFile.tagName = tagName;

	switch(tagName) {
		case 'img':
			link = file.match(/src="[^"]*"/)[0].match(/".*"/)[0];
			console.log(link);
	}

	console.log(dataFile);
}