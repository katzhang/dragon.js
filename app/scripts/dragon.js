function Dragon(layer, options) {
	'use strict';
	options = options || {};

	this.layer = layer;

	this.autoSorted = options.autoSorted || true;

	this.showThumbnail = options.showThumbnail || true;
}