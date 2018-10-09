/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/EntryPoint.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/_style/style-sheets/main-menu.scss":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/_style/style-sheets/main-menu.scss ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#main-menu-container {\n  padding: 50px 0 0 50px;\n  background-color: lightgrey;\n  height: 100%;\n  width: 100%; }\n  #main-menu-container .main-menu-item {\n    padding: 10px;\n    cursor: pointer; }\n    #main-menu-container .main-menu-item:hover {\n      color: white; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/_style/style-sheets/main.scss":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/_style/style-sheets/main.scss ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#menu-container {\n  float: left;\n  width: 300px;\n  height: 100vh; }\n\n#content-container {\n  float: left;\n  width: calc(100% - 300px);\n  height: 100vh; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/_style/style-sheets/style-resets.scss":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/_style/style-sheets/style-resets.scss ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/** Text Colors */\n/* ==========================================================================\r\n   HTML5 display definitions\r\n   ========================================================================== */\n* {\n  box-sizing: border-box; }\n\n/**\r\n * Reset browser margins and padding\r\n */\nhtml, body, div, section, article, aside, header, hgroup, footer, nav, h1, h2, h3, h4, h5, h6, p, blockquote,\naddress, time, span, em, strong, img, ol, ul, li, figure, canvas, video, th, td, tr {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  vertical-align: baseline;\n  font: inherit; }\n\n/**\r\n * Correct `block` display not defined in IE 8/9.\r\n */\narticle, aside, details, figcaption, figure, footer,\nheader, hgroup, main, nav, section, summary {\n  display: block; }\n\n/**\r\n * Correct `inline-block` display not defined in IE 8/9.\r\n */\naudio, canvas, video {\n  display: inline-block; }\n\n/**\r\n * Prevent modern browsers from displaying `audio` without controls.\r\n * Remove excess height in iOS 5 devices.\r\n */\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n/**\r\n * Address `[hidden]` styling not present in IE 8/9.\r\n * Hide the `template` element in IE, Safari, and Firefox < 22.\r\n */\n[hidden],\ntemplate {\n  display: none; }\n\n/* ==========================================================================\r\n   Base\r\n   ========================================================================== */\n/**\r\n * 1. Set default font family to sans-serif.\r\n * 2. Prevent iOS text size adjust after orientation change, without disabling\r\n *    user zoom.\r\n */\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n\n/* ==========================================================================\r\n   Links\r\n   ========================================================================== */\n/**\r\n * Remove the gray background color from active links in IE 10.\r\n */\na {\n  background: transparent;\n  text-decoration: none;\n  color: inherit; }\n\n/**\r\n * Improve readability when focused and also mouse hovered in all browsers.\r\n */\na:link, a:visited, a:hover, a:active {\n  text-decoration: none;\n  outline: 0; }\n\na:hover {\n  cursor: pointer; }\n\n/* ==========================================================================\r\n   Typography\r\n   ========================================================================== */\n/**\r\n * Address style set to `bolder` in Firefox 4+, Safari 5, and Chrome.\r\n */\nb,\nstrong {\n  font-weight: bold; }\n\n/**\r\n * Address styling not present in Safari 5 and Chrome.\r\n */\ndfn {\n  font-style: italic; }\n\nem {\n  font-style: italic; }\n\n/**\r\n * Address differences between Firefox and other browsers.\r\n */\nhr {\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n  height: 0; }\n\n/**\r\n * Address styling not present in IE 8/9.\r\n */\nmark {\n  background: #ff0;\n  color: #000; }\n\n/* ==========================================================================\r\n   Embedded content\r\n   ========================================================================== */\n/**\r\n * Remove border when inside `a` element in IE 8/9.\r\n */\nimg {\n  border: 0; }\n\n/**\r\n * Correct overflow displayed oddly in IE 9.\r\n */\nsvg:not(:root) {\n  overflow: hidden; }\n\n/**\r\n * 1. Correct font family not being inherited in all browsers.\r\n * 2. Correct font size not being inherited in all browsers.\r\n * 3. Address margins set differently in Firefox 4+, Safari 5, and Chrome.\r\n */\nbutton, input, select, textarea {\n  font-family: inherit;\n  /* 1 */\n  font-size: 100%;\n  /* 2 */\n  margin: 0;\n  /* 3 */\n  resize: none; }\n\n/**\r\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\r\n * the UA stylesheet.\r\n */\nbutton, input {\n  line-height: normal;\n  outline: none; }\n\n/**\r\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\r\n * All other form control elements do not inherit `text-transform` values.\r\n * Correct `button` style inheritance in Chrome, Safari 5+, and IE 8+.\r\n * Correct `select` style inheritance in Firefox 4+ and Opera.\r\n */\nbutton, select {\n  text-transform: none; }\n\n/**\r\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\r\n *    and `video` controls.\r\n * 2. Correct inability to style clickable `input` types in iOS.\r\n * 3. Improve usability and consistency of cursor style between image-type\r\n *    `input` and others.\r\n */\nbutton,\ninput[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */ }\n\n/**\r\n * Re-set default cursor for disabled elements.\r\n */\nbutton[disabled],\ninput[disabled] {\n  cursor: default; }\n\n/**\r\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\r\n * 2. Remove excess padding in IE 8/9/10.\r\n */\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/** TODO Hide checkbox input */\n/**\r\n * 1. Address `appearance` set to `searchfield` in Safari 5 and Chrome.\r\n * 2. Address `box-sizing` set to `border-box` in Safari 5 and Chrome\r\n *    (include `-moz` to future-proof).\r\n */\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  -moz-box-sizing: content-box;\n  -webkit-box-sizing: content-box;\n  /* 2 */\n  box-sizing: content-box; }\n\n/**\r\n * Remove inner padding and search cancel button in Safari 5 and Chrome\r\n * on OS X.\r\n */\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\r\n * Remove inner padding and border in Firefox 4+.\r\n */\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n\n/**\r\n * 1. Remove default vertical scrollbar in IE 8/9.\r\n * 2. Improve readability and alignment in all browsers.\r\n */\ntextarea {\n  overflow: auto;\n  /* 1 */\n  vertical-align: top;\n  /* 2 */ }\n\n/* ==========================================================================\r\n   Tables\r\n   ========================================================================== */\n/**\r\n * Remove most spacing between table cells.\r\n */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\nul {\n  list-style: none; }\n\n/* ==========================================================================\r\n   Clearfix\r\n   ========================================================================== */\n/* For modern browsers */\n.clearfix::before, .clearfix::after {\n  content: \"\";\n  display: block; }\n\n.clearfix::after {\n  clear: both;\n  visibility: hidden;\n  display: block;\n  font-size: 0;\n  content: \".\";\n  height: 0; }\n\n/* For IE 6/7 (trigger hasLayout) */\n.clearfix {\n  zoom: 1; }\n\n/* ==========================================================================\r\n   Inputs and buttons\r\n   ========================================================================== */\ninput, textarea {\n  color: #6A7187;\n  background-color: #FFFFFF; }\n\ninput, textarea, button {\n  -webkit-appearance: none;\n  border-radius: 0; }\n\n/* Remove background highlight on touch from mobile devices */\n* {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0); }\n\ninput:focus, textarea:focus {\n  outline: none; }\n\n::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #A6A9B4;\n  opacity: 1;\n  /* Firefox */ }\n\n:-ms-input-placeholder {\n  /* Internet Explorer 10-11 */\n  color: #A6A9B4; }\n\n:-ms-input-placeholder {\n  /* Microsoft Edge */\n  color: #A6A9B4; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/style-loader/addStyles.js":
/*!************************************************!*\
  !*** ./node_modules/style-loader/addStyles.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;
	var sourceMap = obj.sourceMap;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var media = obj.media;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./src/EntryPoint.ts":
/*!***************************!*\
  !*** ./src/EntryPoint.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var ViewManager_1 = __webpack_require__(/*! ./core/ViewManager */ "./src/core/ViewManager.ts");
__webpack_require__(/*! ./_style/style-sheets/style-resets.scss */ "./src/_style/style-sheets/style-resets.scss");
__webpack_require__(/*! ./_style/style-sheets/main.scss */ "./src/_style/style-sheets/main.scss");
window.onload = function () {
    new ViewManager_1.ViewManager();
};


/***/ }),

/***/ "./src/_style/style-sheets/main-menu.scss":
/*!************************************************!*\
  !*** ./src/_style/style-sheets/main-menu.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!./main-menu.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/_style/style-sheets/main-menu.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../node_modules/style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/_style/style-sheets/main.scss":
/*!*******************************************!*\
  !*** ./src/_style/style-sheets/main.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!./main.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/_style/style-sheets/main.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../node_modules/style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/_style/style-sheets/style-resets.scss":
/*!***************************************************!*\
  !*** ./src/_style/style-sheets/style-resets.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!./style-resets.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/_style/style-sheets/style-resets.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../node_modules/style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/_view-templates/main-menu.html":
/*!********************************************!*\
  !*** ./src/_view-templates/main-menu.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n<ul id=\"main-menu-container\">\r\n    <li class=\"main-menu-item\">Property Definitions</li>\r\n    <li class=\"main-menu-item\">Object Types</li>\r\n    <li class=\"main-menu-item\">Objects</li>\r\n</ul>";

/***/ }),

/***/ "./src/core/CoreEntity.ts":
/*!********************************!*\
  !*** ./src/core/CoreEntity.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var EventManager_1 = __webpack_require__(/*! ./EventManager */ "./src/core/EventManager.ts");
var CoreEntity = /** @class */ (function () {
    function CoreEntity(entityName) {
        this.NAME = entityName;
        this.eventManager = EventManager_1.EventManager._instance;
        this.register();
    }
    CoreEntity.prototype.register = function () {
        this.eventManager.registerEntity(this.NAME, this);
    };
    CoreEntity.prototype.onRegister = function () {
    };
    CoreEntity.prototype.unregister = function () {
        this.eventManager.unregirsterEntity(this.NAME);
    };
    CoreEntity.prototype.onUnregister = function () {
    };
    CoreEntity.prototype.sendNotification = function (notificationName, body) {
        this.eventManager.sendNotification(notificationName, body);
    };
    CoreEntity.prototype.listNotificationInterests = function () {
        return [];
    };
    CoreEntity.prototype.handleNotification = function (notification) {
    };
    return CoreEntity;
}());
exports.CoreEntity = CoreEntity;


/***/ }),

/***/ "./src/core/EventManager.ts":
/*!**********************************!*\
  !*** ./src/core/EventManager.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var EventManager = /** @class */ (function () {
    function EventManager() {
        this.notifications = {};
        this.entities = {};
        if (EventManager._instance) {
            throw new Error("Error: Instantiation failed! Use EventManager.getInstance() instead of new.");
        }
        EventManager._instance = this;
    }
    EventManager.prototype.getInstance = function () {
        return EventManager._instance;
    };
    EventManager.prototype.registerNotification = function (notificationName) {
        if (!this.notifications[notificationName])
            this.notifications[notificationName] = new Array();
    };
    EventManager.prototype.unregisterNotification = function (notificationName) {
        delete this.notifications[notificationName];
    };
    EventManager.prototype.registerEntity = function (entityName, entity) {
        if (!this.entities[entityName]) {
            this.entities[entityName] = entity;
            entity.onRegister();
            var notificationInterests = entity.listNotificationInterests();
            for (var i = 0; i < notificationInterests.length; i++) {
                this.registerNotification(notificationInterests[i]);
                this.notifications[notificationInterests[i]].push(entity);
            }
        }
    };
    EventManager.prototype.unregirsterEntity = function (entityName) {
        var targetEntity = this.entities[entityName];
        var notificationInterests = targetEntity.listNotificationInterests();
        for (var i = 0; i < notificationInterests.length; i++) {
            var listeningEntities = this.notifications[notificationInterests[i]];
            for (var j = 0; j < listeningEntities.length; j++) {
                if (listeningEntities[j] === targetEntity) {
                    listeningEntities.splice(j, 1);
                }
            }
        }
        targetEntity.onUnregister();
        delete this.entities[entityName];
    };
    EventManager.prototype.sendNotification = function (notificationName, data) {
        if (this.notifications[notificationName]) {
            var entities = this.notifications[notificationName];
            for (var i = 0; i < entities.length; i++) {
                entities[i].handleNotification({ name: notificationName, data: data });
            }
        }
    };
    EventManager._instance = new EventManager();
    return EventManager;
}());
exports.EventManager = EventManager;


/***/ }),

/***/ "./src/core/SystemConstants.ts":
/*!*************************************!*\
  !*** ./src/core/SystemConstants.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var SystemConstants = /** @class */ (function () {
    function SystemConstants() {
    }
    SystemConstants.ENV_MOBILE = "ENV_MOBILE";
    SystemConstants.ENV_DESKTOP = "ENV_DESKTOP";
    SystemConstants.ENV_WEB = "ENV_WEB";
    SystemConstants.MAIN_CONTAINER = "content-container";
    SystemConstants.MAIN_MENU_CONTAINER = "menu-container";
    return SystemConstants;
}());
exports.SystemConstants = SystemConstants;


/***/ }),

/***/ "./src/core/View.ts":
/*!**************************!*\
  !*** ./src/core/View.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var CoreEntity_1 = __webpack_require__(/*! ./CoreEntity */ "./src/core/CoreEntity.ts");
var View = /** @class */ (function (_super) {
    __extends(View, _super);
    function View(viewName) {
        var _this = _super.call(this, viewName) || this;
        _this.NAME = viewName;
        _this.viewComponentExitCount = {};
        return _this;
    }
    View.prototype.handleSignal = function (signal) {
    };
    View.prototype.enterScene = function (callback) {
    };
    View.prototype.exitScene = function (exitType, callback) {
    };
    View.prototype.componentExited = function (componentName) {
        this.viewComponentExitCount[componentName] = true;
        for (var key in this.viewComponentExitCount) {
            if (this.viewComponentExitCount.hasOwnProperty(key)) {
                if (!this.viewComponentExitCount[key]) {
                    console.warn("Not all view components finished exiting, aborting.");
                    return;
                }
            }
        }
        if (this.exitCallback) {
            this.container.parentNode.removeChild(this.container);
            this.unregister();
            this.exitCallback();
        }
        else {
            this.container.parentNode.removeChild(this.container);
            console.warn("No exit callback available on view!");
        }
    };
    return View;
}(CoreEntity_1.CoreEntity));
exports.View = View;


/***/ }),

/***/ "./src/core/ViewExitTypes.ts":
/*!***********************************!*\
  !*** ./src/core/ViewExitTypes.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var ViewExitTypes = /** @class */ (function () {
    function ViewExitTypes() {
    }
    ViewExitTypes.DEFAULT = "DEFAULT";
    ViewExitTypes.SWITCH = "SWITCH";
    return ViewExitTypes;
}());
exports.ViewExitTypes = ViewExitTypes;


/***/ }),

/***/ "./src/core/ViewManager.ts":
/*!*********************************!*\
  !*** ./src/core/ViewManager.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var MainMenuView_1 = __webpack_require__(/*! ../main-menu/MainMenuView */ "./src/main-menu/MainMenuView.ts");
var ViewExitTypes_1 = __webpack_require__(/*! ./ViewExitTypes */ "./src/core/ViewExitTypes.ts");
var CoreEntity_1 = __webpack_require__(/*! ./CoreEntity */ "./src/core/CoreEntity.ts");
var ViewManager = /** @class */ (function (_super) {
    __extends(ViewManager, _super);
    function ViewManager() {
        var _this = _super.call(this, "ViewManager") || this;
        _this.initView();
        return _this;
    }
    ViewManager.prototype.initView = function () {
        this.mainMenuView = new MainMenuView_1.MainMenuView();
    };
    ViewManager.prototype.switchView = function (view, exitType, callback) {
        var _this = this;
        if (!exitType)
            exitType = ViewExitTypes_1.ViewExitTypes.DEFAULT;
        this.currentView.exitScene(exitType, function () {
            _this.currentView = new view();
            if (callback)
                callback();
        });
    };
    ViewManager.prototype.listNotificationInterests = function () {
        var notifications = [];
        notifications.push("");
        return notifications;
    };
    ViewManager.prototype.handleNotification = function (notification) {
        switch (notification.name) {
            default:
                break;
        }
    };
    return ViewManager;
}(CoreEntity_1.CoreEntity));
exports.ViewManager = ViewManager;


/***/ }),

/***/ "./src/main-menu/MainMenuView.ts":
/*!***************************************!*\
  !*** ./src/main-menu/MainMenuView.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var SystemConstants_1 = __webpack_require__(/*! ../core/SystemConstants */ "./src/core/SystemConstants.ts");
var View_1 = __webpack_require__(/*! ../core/View */ "./src/core/View.ts");
// CSS
__webpack_require__(/*! ../_style/style-sheets/main-menu.scss */ "./src/_style/style-sheets/main-menu.scss");
// HTML template
var template = __webpack_require__(/*! ../_view-templates/main-menu.html */ "./src/_view-templates/main-menu.html");
var MainMenuView = /** @class */ (function (_super) {
    __extends(MainMenuView, _super);
    function MainMenuView() {
        var _this = _super.call(this, "MainMenuView") || this;
        console.info("Main menu view initiated!");
        _this.container = document.getElementById(SystemConstants_1.SystemConstants.MAIN_MENU_CONTAINER);
        _this.container.innerHTML = template;
        return _this;
    }
    MainMenuView.prototype.registerEventListeners = function () {
    };
    MainMenuView.prototype.unregisterEventListeners = function () {
    };
    MainMenuView.prototype.listNotificationInterests = function () {
        var notifications = _super.prototype.listNotificationInterests.call(this);
        return notifications;
    };
    MainMenuView.prototype.enterScene = function () {
        this.registerEventListeners();
    };
    MainMenuView.prototype.exitScene = function (exitType) {
        this.unregisterEventListeners();
    };
    MainMenuView.prototype.handleNotification = function (notification) {
        switch (notification.name) {
            default:
                break;
        }
    };
    return MainMenuView;
}(View_1.View));
exports.MainMenuView = MainMenuView;


/***/ })

/******/ });
//# sourceMappingURL=output.js.map