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
			dataFile = {};

	megaTag = file.match(/^<meta.*></)[0];
	file = file.slice(megaTag.length);
	tagName = file.slice(0, file.search(/\s/));


	console.log(tagName);
	this.dataFiles.push(file);
	console.log(this.dataFiles);
}