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

Dragon.prototype.addDataFile = function(html) {
	var fragment,
			node,
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

	// switch(tagName) {
	// 	case 'img':
	// 		dataFile.link = file.match(/src="[^"]*"/)[0].match(/".*"/)[0];
	// 		break;
	// 	case 'a':
	// 		dataFile.link = file.match(/href="[^"]*"/)[0].match(/".*"/)[0];
	// 		break;
	// 	case 'span':
	// 		dataFile.content = file.slice((file.search(/>(?!$)/) + 1), file.search(/<\/span>/));
	// 		break;
	// 	case 'p':
	// 		dataFile.content = file.slice((file.search(/>(?!$)/) + 1), file.search(/<\/p>/));
	// 		break;
	// }
	node = document.createElement(tagName);
	node.innerHTML = html;

	fragment = document.createDocumentFragment();
	fragment.appendChild(node);
	console.log(node);
	console.log(fragment);
	console.log(html);
}