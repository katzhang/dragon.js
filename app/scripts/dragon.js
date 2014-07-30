function Dragon(layer, options) {
	'use strict';
	options = options || {};

	this.layer = layer;

	this.autoSorted = options.autoSorted || true;

	this.showThumbnail = options.showThumbnail || true;

	layer.addEventListener('dragenter', this.dragenterHandler, false);
	layer.addEventListener('dragover', this.dragoverHandler, false);
	layer.addEventListener('drop', this.dropHandler, false);

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

  var dt = e.dataTransfer;
  var files = dt.files;
  console.log(files);
}