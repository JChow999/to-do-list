/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    font: 16px;
    /* background-color: black; */
    background-color: rgba(255, 255, 255, 1);
    --side-green: rgba(0, 110, 0, 1);
    --side-red: red;
    --header-height: 7vh;
}

#main-screen {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    grid-template-rows: var(--header-height), calc(100vh - var(--header-height));
}

header {
    grid-column: 1 / -1;
    min-height: var(--header-height);
    background-color: rgb(130, 232, 140);
    display: flex;
    justify-content: center;
    align-items: center;
}

#side-menu {
    grid-column: 1 / 2;
    min-width: 150px;
    min-height: calc(100vh - var(--header-height));
    margin: 0;
    background-color: rgb(190, 190, 255);
    padding: 5px;
    
    & > div {
        display: flex;
        justify-content: space-between;
        margin: 5px 0;
    }
    
    & > button {
        width: 5px;
        height: 5px;
    }
}

.side-project-btns {
    display: flex;
    margin: 0 0 0 3px;
    gap: 5px;
}

.side-add-div {
    color: var(--side-green);
    display: flex;
    
    & button {
        background-color: var(--side-green);
    }
}


.project-container {
    display: flex;
    flex-direction: column;

    & > div {
        margin: 3px 0px;
    }
}

.side-project-div {
    display: flex;
    justify-content: space-between;
}

.edit-btn {
    background-color: yellow;
}

.delete-btn {
    background-color: var(--side-red);
}

*:not(ul) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.wrapper {
    grid-column: 2 / -1;
    display: flex;
    align-items: center;
    justify-content: center;
}

.project-list-container {
    display: flex;
}

#main-container {
    display: flex;
    align-items: center;
}

#main-window {
    width: 60vw;
    height: 70vh;
    background-color: rgb(227, 240, 114);
    padding: 5px;
}

.todo-checkbox {
    margin-right: 5px;
}

button, .todo-checkbox  {
    height: 20px;
    width: 20px;
}

.todo-container {
    display: flex;
}

.todo-front {
    display: flex;
    text-align: center;

    & button {
        margin-right: 5px;
    }
}

.todo-div {
    display: flex;
    justify-content: space-between;
    margin: 5px 0;
}
`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,6BAA6B;IAC7B,wCAAwC;IACxC,gCAAgC;IAChC,eAAe;IACf,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,2DAA2D;IAC3D,4EAA4E;AAChF;;AAEA;IACI,mBAAmB;IACnB,gCAAgC;IAChC,oCAAoC;IACpC,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,8CAA8C;IAC9C,SAAS;IACT,oCAAoC;IACpC,YAAY;;IAEZ;QACI,aAAa;QACb,8BAA8B;QAC9B,aAAa;IACjB;;IAEA;QACI,UAAU;QACV,WAAW;IACf;AACJ;;AAEA;IACI,aAAa;IACb,iBAAiB;IACjB,QAAQ;AACZ;;AAEA;IACI,wBAAwB;IACxB,aAAa;;IAEb;QACI,mCAAmC;IACvC;AACJ;;;AAGA;IACI,aAAa;IACb,sBAAsB;;IAEtB;QACI,eAAe;IACnB;AACJ;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,iCAAiC;AACrC;;AAEA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,mBAAmB;IACnB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,oCAAoC;IACpC,YAAY;AAChB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,kBAAkB;;IAElB;QACI,iBAAiB;IACrB;AACJ;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,aAAa;AACjB","sourcesContent":[":root {\n    font: 16px;\n    /* background-color: black; */\n    background-color: rgba(255, 255, 255, 1);\n    --side-green: rgba(0, 110, 0, 1);\n    --side-red: red;\n    --header-height: 7vh;\n}\n\n#main-screen {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n    grid-template-rows: var(--header-height), calc(100vh - var(--header-height));\n}\n\nheader {\n    grid-column: 1 / -1;\n    min-height: var(--header-height);\n    background-color: rgb(130, 232, 140);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#side-menu {\n    grid-column: 1 / 2;\n    min-width: 150px;\n    min-height: calc(100vh - var(--header-height));\n    margin: 0;\n    background-color: rgb(190, 190, 255);\n    padding: 5px;\n    \n    & > div {\n        display: flex;\n        justify-content: space-between;\n        margin: 5px 0;\n    }\n    \n    & > button {\n        width: 5px;\n        height: 5px;\n    }\n}\n\n.side-project-btns {\n    display: flex;\n    margin: 0 0 0 3px;\n    gap: 5px;\n}\n\n.side-add-div {\n    color: var(--side-green);\n    display: flex;\n    \n    & button {\n        background-color: var(--side-green);\n    }\n}\n\n\n.project-container {\n    display: flex;\n    flex-direction: column;\n\n    & > div {\n        margin: 3px 0px;\n    }\n}\n\n.side-project-div {\n    display: flex;\n    justify-content: space-between;\n}\n\n.edit-btn {\n    background-color: yellow;\n}\n\n.delete-btn {\n    background-color: var(--side-red);\n}\n\n*:not(ul) {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n.wrapper {\n    grid-column: 2 / -1;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.project-list-container {\n    display: flex;\n}\n\n#main-container {\n    display: flex;\n    align-items: center;\n}\n\n#main-window {\n    width: 60vw;\n    height: 70vh;\n    background-color: rgb(227, 240, 114);\n    padding: 5px;\n}\n\n.todo-checkbox {\n    margin-right: 5px;\n}\n\nbutton, .todo-checkbox  {\n    height: 20px;\n    width: 20px;\n}\n\n.todo-container {\n    display: flex;\n}\n\n.todo-front {\n    display: flex;\n    text-align: center;\n\n    & button {\n        margin-right: 5px;\n    }\n}\n\n.todo-div {\n    display: flex;\n    justify-content: space-between;\n    margin: 5px 0;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/functions/data-storage.js":
/*!***************************************!*\
  !*** ./src/functions/data-storage.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initializeData: () => (/* binding */ initializeData)
/* harmony export */ });

function initializeData() {
  let mainInfo = {
    username: "John Doe",
    projects: [{
      projectTitle: "General",
      generalTodo: [],
      projectDue: Date(),
      projectDesc: "Your General projects",
      projectNotes: "Your simple notes. Push your water glass on the floor. Cereal boxes make for five star accommodation hunt anything." + 
      "Freak human out make funny noise mow mow mow mow mow mow success now attack human eat and than sleep on your face peer out window, " +
      "chatter at birds, lure them to mouth. Shred all toilet paper and spread around the house scratch at door to be let outside, " +
      "get let out then scratch at door immmediately after to be let back in really likes hummus munch, munch, chomp, chomp and cat not kitten around . " + 
      "Cats woo fat baby cat best buddy little guy shred all toilet paper and spread around the house get suspicious of own shadow then go play with toilette paper destroy dog. Rub butt on table.",
      projectTodo: {
        todoList: [],
        todoFinished: [],
      },
    },
    {
      projectTitle: "Dog house",
      projectDue: Date(),
      projectDesc: "Your General projects",
      projectNotes: "Your simple notes. Push your water glass on the floor. Cereal boxes make for five star accommodation hunt anything." + 
      "Freak human out make funny noise mow mow mow mow mow mow success now attack human eat and than sleep on your face peer out window, " +
      "chatter at birds, lure them to mouth. Shred all toilet paper and spread around the house scratch at door to be let outside, " +
      "get let out then scratch at door immmediately after to be let back in really likes hummus munch, munch, chomp, chomp and cat not kitten around . " + 
      "Cats woo fat baby cat best buddy little guy shred all toilet paper and spread around the house get suspicious of own shadow then go play with toilette paper destroy dog. Rub butt on table.",
      projectTodo: {
        todoList: [],
        todoFinished: [],
      },
    },
    {
      projectTitle: "Feed cats",
      projectDue: Date(),
      projectDesc: "Your General projects",
      projectNotes: "Your simple notes. Push your water glass on the floor. Cereal boxes make for five star accommodation hunt anything." + 
      "Freak human out make funny noise mow mow mow mow mow mow success now attack human eat and than sleep on your face peer out window, " +
      "chatter at birds, lure them to mouth. Shred all toilet paper and spread around the house scratch at door to be let outside, " +
      "get let out then scratch at door immmediately after to be let back in really likes hummus munch, munch, chomp, chomp and cat not kitten around . " + 
      "Cats woo fat baby cat best buddy little guy shred all toilet paper and spread around the house get suspicious of own shadow then go play with toilette paper destroy dog. Rub butt on table.",
      projectTodo: {
        todoList: [],
        todoFinished: [],
      },
    }],
  }

  function createNewTodo(projectIndex, listIndex) {
    mainInfo.projects[projectIndex][listIndex].append();
  }
  
  function editTodo(projectIndex, listIndex, todoIndex, info) {
    mainInfo.projects[projectIndex][listIndex][todoIndex] = info;
  }
  
  function deleteTodo(projectIndex, listIndex, todoIndex) {
    mainInfo.projects[projectIndex][listIndex].splice(todoIndex, 1);
  }

  function deleteTodoList(projectIndex, listIndex) {
    mainInfo.projects[projectIndex].splice(listIndex, 1);
  }
  
  function addNewProject() {
    let newProject = new Project();
    mainInfo.projects.push(newProject);
  }
  
  function editProject(projectIndex, section, info) {
    if (section in mainInfo.projects[projectIndex]) {
      mainInfo.projects[projectIndex].section = info;
    }
    else {
      console.log("Your project is in another castle");
      return
    }
  }
  
  function deleteProject(projectIndex) {
    mainInfo.projects.splice(projectIndex, 1);
  }

  function getProjects() {
    let projectNames = []

    for (let x = 0; x < mainInfo.projects.length; x++) {
      projectNames.push(mainInfo.projects[x].projectTitle)
    }
    return projectNames
  }

  function getAllInfo() {
    console.log(mainInfo);
  }

  return { createNewTodo, editTodo, deleteTodo, deleteTodoList, addNewProject, addNewProject, editProject, deleteProject, getProjects, getAllInfo }
}

function Todo(todo) {
  this.todo = todo;
  this.numbered = false;
  this.finished = false;
}

function Project() {
  this.projectTitle = "New Project",
  this.projectDue = Date().toString(),
  this.projectDesc = "Enter your project description here",
  this.projectNotes = "Enter your notes",
  this.projectTodo = {
    todoList: [],
    todoFinished: [],
  }
}



/***/ }),

/***/ "./src/functions/header.js":
/*!*********************************!*\
  !*** ./src/functions/header.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildHeader: () => (/* binding */ buildHeader)
/* harmony export */ });

function buildHeader() {
  const header = document.createElement('header');

  let webTitle = document.createElement('h1');
  webTitle.innerText = "Your to-do list";

  header.appendChild(webTitle);

  return header
}



/***/ }),

/***/ "./src/functions/initialize-site.js":
/*!******************************************!*\
  !*** ./src/functions/initialize-site.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initializeMain: () => (/* binding */ initializeMain)
/* harmony export */ });
/* harmony import */ var _main_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-window */ "./src/functions/main-window.js");
/* harmony import */ var _side_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./side-menu */ "./src/functions/side-menu.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header */ "./src/functions/header.js");
/* harmony import */ var _data_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data-storage */ "./src/functions/data-storage.js");





function initializeMain() {
  const mainScreen = document.createElement('div');
  const wrapper = document.createElement('div');
  const todoContainer = document.createElement('div')
  const mainContainer = document.createElement('div');
  const mainWindow = document.createElement('div');

  const todoData = (0,_data_storage__WEBPACK_IMPORTED_MODULE_3__.initializeData)();

  // Prints out project list into console
  document.onkeydown = (e) => {
    if (e.key == "p") {
      console.log(todoData.getProjects())
    }
  }

  const newListBtn = document.createElement('button');

  todoContainer.id = 'todo-container';
  wrapper.className = 'wrapper';
  mainScreen.id = 'main-screen';
  mainContainer.id = "main-container";
  mainWindow.id = "main-window";
  
  // To be removed
  let toDoElements = ['Eat food', 'Sleep', 'Drink Water'];

  mainScreen.appendChild((0,_header__WEBPACK_IMPORTED_MODULE_2__.buildHeader)());
  mainScreen.appendChild((0,_side_menu__WEBPACK_IMPORTED_MODULE_1__.buildSideMenu)(todoData.addNewProject, todoData.getProjects));
  wrapper.appendChild(todoContainer);
  todoContainer.appendChild(mainContainer);
  mainWindow.appendChild((0,_main_window__WEBPACK_IMPORTED_MODULE_0__.buildBulletList)(toDoElements));
  mainContainer.appendChild(mainWindow);
  mainScreen.appendChild(wrapper);

  return mainScreen;
}



/***/ }),

/***/ "./src/functions/main-window.js":
/*!**************************************!*\
  !*** ./src/functions/main-window.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildBulletList: () => (/* binding */ buildTodoList)
/* harmony export */ });
/**
 * This function creates the to-do list, it allows an array to be inserted to
 * the function. It allows for an optional title as well.
 * @return {string} - Return
 */

// function buildMainWindow(information) {
//     const wrapper = document.createElement('div');
//     const todoContainer = document.createElement('div')
//     const mainContainer = document.createElement('div');
//     const mainWindow = document.createElement('div');

//     return
// }

function createMainWindow() {

}

function updateProjectDisplay() {
    return
}

function buildTodoList(listBullets) {
    const projectContainer = document.createElement('div');
    const listTitle = document.createElement('h3');
    const todoListDiv = document.createElement("div");

    projectContainer.className = 'project-info-container'
    todoListDiv.className = "bulletList"

    listTitle.innerText = 'First to-do list'

    for (let x = 0; x < listBullets.length; x++) {
        let todoDiv = document.createElement("div");
        let todoFront = document.createElement("div");
        let todoText = document.createElement('p');
        let deleteBtn = document.createElement("button");
        
        let checkBox = document.createElement("input");
        checkBox.className = "todo-checkbox";
        checkBox.type = "checkbox";

        checkBox.name = "finished-todo"

        todoFront.className = "todo-front";
        todoDiv.className = "todo-div";
        deleteBtn.className = "todo-delete";
        todoText.innerText = listBullets[x];

        deleteBtn.addEventListener("click", () => {
            console.log(`delete ${x}`)
        })

        todoFront.appendChild(checkBox);
        todoFront.appendChild(todoText);
        todoDiv.appendChild(todoFront);
        todoDiv.appendChild(deleteBtn);
        todoListDiv.appendChild(todoDiv);
    }

    projectContainer.appendChild(listTitle);
    projectContainer.appendChild(todoListDiv);

    return projectContainer;
}



/***/ }),

/***/ "./src/functions/side-menu.js":
/*!************************************!*\
  !*** ./src/functions/side-menu.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildSideMenu: () => (/* binding */ buildSideMenu),
/* harmony export */   generateProjectElements: () => (/* binding */ generateProjectElements),
/* harmony export */   updateSideMenu: () => (/* binding */ updateSideMenu)
/* harmony export */ });
function buildSideMenu(addfunction, projectsFunct) {
  let sideMenu = document.createElement('div');
  let addDiv = document.createElement("div");
  let addText = document.createElement("h3");
  let generalTodoDiv = document.createElement("div");
  let generalTodoText = document.createElement("h3");

  generalTodoDiv.classList = "general-todo-list";
  generalTodoText.innerText = "General To-dos";
  generalTodoDiv.appendChild(generalTodoText);
  generalTodoDiv.addEventListener("click", () => {
    console.log("clicked general")
  })
  
  addDiv.className = "side-add-div";
  addText.innerText = "Add Project";
  addDiv.appendChild(addText);


  let addBtn = document.createElement("button");
  addBtn.className = "add-project-btn";
  addDiv.appendChild(addBtn);
  addBtn.addEventListener("click", () => {
    addfunction();
    updateSideMenu(projectsFunct());
  })

  sideMenu.id = "side-menu";
  sideMenu.appendChild(addDiv);
  sideMenu.appendChild(generalTodoDiv);
  sideMenu.appendChild(generateProjectElements(projectsFunct()));
  
  return sideMenu;
}

function generateProjectElements(information) {
  let projectContainer = document.createElement("div");

  projectContainer.className = "project-container";

  for (let x = 0; x < information.length; x++) {
    let projectDiv = document.createElement("div");
    let projectName = document.createElement("h3");
    let buttonsDiv = document.createElement("div");
    let editButton = document.createElement("button");
    let deleteButton = document.createElement("button");

    projectDiv.setAttribute("data-index", x);

    projectDiv.className = "side-project-div";
    buttonsDiv.className = "side-project-btns";
    editButton.className = "edit-btn";
    deleteButton.className = "delete-btn";
    projectName.innerText = information[x];


    editButton.addEventListener("click", () => {
      console.log(`Edit: ${information[x]}`)
    });

    deleteButton.addEventListener("click", () => {
      console.log(`Delete: ${information[x]}`)
    })
    
    projectDiv.appendChild(projectName);
    buttonsDiv.appendChild(editButton);
    buttonsDiv.appendChild(deleteButton);
    projectDiv.appendChild(buttonsDiv);
    
    projectContainer.appendChild(projectDiv);
  }

  return projectContainer;
}


function updateSideMenu(projectArray) {
  let projectCont = document.querySelector("#side-menu");

  document.querySelectorAll(".project-container").forEach(e => e.remove());
  
  projectCont.appendChild(generateProjectElements(projectArray));
}


function editProjectTitle(indexNum, newTitle) {
  console.log(newTitle)
  return
}


function deleteProject(info) {
  console.log(info)
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _functions_initialize_site__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/initialize-site */ "./src/functions/initialize-site.js");
/* harmony import */ var _functions_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions/header */ "./src/functions/header.js");
/* harmony import */ var _functions_side_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functions/side-menu */ "./src/functions/side-menu.js");





const body = document.querySelector('body');

body.appendChild((0,_functions_initialize_site__WEBPACK_IMPORTED_MODULE_1__.initializeMain)());


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7QUNBNEI7QUFDaUM7QUFDWjtBQUNNOztBQUV2RDs7QUFFQSxpQkFBaUIsMEVBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcz9mZjk0Iiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9mdW5jdGlvbnMvZGF0YS1zdG9yYWdlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZnVuY3Rpb25zL2hlYWRlci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2Z1bmN0aW9ucy9pbml0aWFsaXplLXNpdGUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9mdW5jdGlvbnMvbWFpbi13aW5kb3cuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9mdW5jdGlvbnMvc2lkZS1tZW51LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgICBmb250OiAxNnB4O1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGJsYWNrOyAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG4gICAgLS1zaWRlLWdyZWVuOiByZ2JhKDAsIDExMCwgMCwgMSk7XG4gICAgLS1zaWRlLXJlZDogcmVkO1xuICAgIC0taGVhZGVyLWhlaWdodDogN3ZoO1xufVxuXG4jbWFpbi1zY3JlZW4ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxODBweCwgMWZyKSk7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiB2YXIoLS1oZWFkZXItaGVpZ2h0KSwgY2FsYygxMDB2aCAtIHZhcigtLWhlYWRlci1oZWlnaHQpKTtcbn1cblxuaGVhZGVyIHtcbiAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xuICAgIG1pbi1oZWlnaHQ6IHZhcigtLWhlYWRlci1oZWlnaHQpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzAsIDIzMiwgMTQwKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNzaWRlLW1lbnUge1xuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS1oZWFkZXItaGVpZ2h0KSk7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTAsIDE5MCwgMjU1KTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgXG4gICAgJiA+IGRpdiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICB9XG4gICAgXG4gICAgJiA+IGJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiA1cHg7XG4gICAgICAgIGhlaWdodDogNXB4O1xuICAgIH1cbn1cblxuLnNpZGUtcHJvamVjdC1idG5zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbjogMCAwIDAgM3B4O1xuICAgIGdhcDogNXB4O1xufVxuXG4uc2lkZS1hZGQtZGl2IHtcbiAgICBjb2xvcjogdmFyKC0tc2lkZS1ncmVlbik7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBcbiAgICAmIGJ1dHRvbiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGUtZ3JlZW4pO1xuICAgIH1cbn1cblxuXG4ucHJvamVjdC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICYgPiBkaXYge1xuICAgICAgICBtYXJnaW46IDNweCAwcHg7XG4gICAgfVxufVxuXG4uc2lkZS1wcm9qZWN0LWRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5lZGl0LWJ0biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xufVxuXG4uZGVsZXRlLWJ0biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZS1yZWQpO1xufVxuXG4qOm5vdCh1bCkge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi53cmFwcGVyIHtcbiAgICBncmlkLWNvbHVtbjogMiAvIC0xO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnByb2plY3QtbGlzdC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbiNtYWluLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jbWFpbi13aW5kb3cge1xuICAgIHdpZHRoOiA2MHZ3O1xuICAgIGhlaWdodDogNzB2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI3LCAyNDAsIDExNCk7XG4gICAgcGFkZGluZzogNXB4O1xufVxuXG4udG9kby1jaGVja2JveCB7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbmJ1dHRvbiwgLnRvZG8tY2hlY2tib3ggIHtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDIwcHg7XG59XG5cbi50b2RvLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLnRvZG8tZnJvbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgJiBidXR0b24ge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICB9XG59XG5cbi50b2RvLWRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luOiA1cHggMDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxVQUFVO0lBQ1YsNkJBQTZCO0lBQzdCLHdDQUF3QztJQUN4QyxnQ0FBZ0M7SUFDaEMsZUFBZTtJQUNmLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwyREFBMkQ7SUFDM0QsNEVBQTRFO0FBQ2hGOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGdDQUFnQztJQUNoQyxvQ0FBb0M7SUFDcEMsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLDhDQUE4QztJQUM5QyxTQUFTO0lBQ1Qsb0NBQW9DO0lBQ3BDLFlBQVk7O0lBRVo7UUFDSSxhQUFhO1FBQ2IsOEJBQThCO1FBQzlCLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxVQUFVO1FBQ1YsV0FBVztJQUNmO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLFFBQVE7QUFDWjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixhQUFhOztJQUViO1FBQ0ksbUNBQW1DO0lBQ3ZDO0FBQ0o7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjs7SUFFdEI7UUFDSSxlQUFlO0lBQ25CO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7O0lBRWxCO1FBQ0ksaUJBQWlCO0lBQ3JCO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGFBQWE7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICBmb250OiAxNnB4O1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcXG4gICAgLS1zaWRlLWdyZWVuOiByZ2JhKDAsIDExMCwgMCwgMSk7XFxuICAgIC0tc2lkZS1yZWQ6IHJlZDtcXG4gICAgLS1oZWFkZXItaGVpZ2h0OiA3dmg7XFxufVxcblxcbiNtYWluLXNjcmVlbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTgwcHgsIDFmcikpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHZhcigtLWhlYWRlci1oZWlnaHQpLCBjYWxjKDEwMHZoIC0gdmFyKC0taGVhZGVyLWhlaWdodCkpO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgICBtaW4taGVpZ2h0OiB2YXIoLS1oZWFkZXItaGVpZ2h0KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzMCwgMjMyLCAxNDApO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3NpZGUtbWVudSB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgbWluLXdpZHRoOiAxNTBweDtcXG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIHZhcigtLWhlYWRlci1oZWlnaHQpKTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkwLCAxOTAsIDI1NSk7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgXFxuICAgICYgPiBkaXYge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgIG1hcmdpbjogNXB4IDA7XFxuICAgIH1cXG4gICAgXFxuICAgICYgPiBidXR0b24ge1xcbiAgICAgICAgd2lkdGg6IDVweDtcXG4gICAgICAgIGhlaWdodDogNXB4O1xcbiAgICB9XFxufVxcblxcbi5zaWRlLXByb2plY3QtYnRucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbjogMCAwIDAgM3B4O1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLnNpZGUtYWRkLWRpdiB7XFxuICAgIGNvbG9yOiB2YXIoLS1zaWRlLWdyZWVuKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgXFxuICAgICYgYnV0dG9uIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGUtZ3JlZW4pO1xcbiAgICB9XFxufVxcblxcblxcbi5wcm9qZWN0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICAgICYgPiBkaXYge1xcbiAgICAgICAgbWFyZ2luOiAzcHggMHB4O1xcbiAgICB9XFxufVxcblxcbi5zaWRlLXByb2plY3QtZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uZWRpdC1idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxufVxcblxcbi5kZWxldGUtYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZS1yZWQpO1xcbn1cXG5cXG4qOm5vdCh1bCkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi53cmFwcGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAtMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LWxpc3QtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI21haW4tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI21haW4td2luZG93IHtcXG4gICAgd2lkdGg6IDYwdnc7XFxuICAgIGhlaWdodDogNzB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNywgMjQwLCAxMTQpO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi50b2RvLWNoZWNrYm94IHtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxufVxcblxcbmJ1dHRvbiwgLnRvZG8tY2hlY2tib3ggIHtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICB3aWR0aDogMjBweDtcXG59XFxuXFxuLnRvZG8tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnRvZG8tZnJvbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuICAgICYgYnV0dG9uIHtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgICB9XFxufVxcblxcbi50b2RvLWRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWFyZ2luOiA1cHggMDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlxuZnVuY3Rpb24gaW5pdGlhbGl6ZURhdGEoKSB7XG4gIGxldCBtYWluSW5mbyA9IHtcbiAgICB1c2VybmFtZTogXCJKb2huIERvZVwiLFxuICAgIHByb2plY3RzOiBbe1xuICAgICAgcHJvamVjdFRpdGxlOiBcIkdlbmVyYWxcIixcbiAgICAgIGdlbmVyYWxUb2RvOiBbXSxcbiAgICAgIHByb2plY3REdWU6IERhdGUoKSxcbiAgICAgIHByb2plY3REZXNjOiBcIllvdXIgR2VuZXJhbCBwcm9qZWN0c1wiLFxuICAgICAgcHJvamVjdE5vdGVzOiBcIllvdXIgc2ltcGxlIG5vdGVzLiBQdXNoIHlvdXIgd2F0ZXIgZ2xhc3Mgb24gdGhlIGZsb29yLiBDZXJlYWwgYm94ZXMgbWFrZSBmb3IgZml2ZSBzdGFyIGFjY29tbW9kYXRpb24gaHVudCBhbnl0aGluZy5cIiArIFxuICAgICAgXCJGcmVhayBodW1hbiBvdXQgbWFrZSBmdW5ueSBub2lzZSBtb3cgbW93IG1vdyBtb3cgbW93IG1vdyBzdWNjZXNzIG5vdyBhdHRhY2sgaHVtYW4gZWF0IGFuZCB0aGFuIHNsZWVwIG9uIHlvdXIgZmFjZSBwZWVyIG91dCB3aW5kb3csIFwiICtcbiAgICAgIFwiY2hhdHRlciBhdCBiaXJkcywgbHVyZSB0aGVtIHRvIG1vdXRoLiBTaHJlZCBhbGwgdG9pbGV0IHBhcGVyIGFuZCBzcHJlYWQgYXJvdW5kIHRoZSBob3VzZSBzY3JhdGNoIGF0IGRvb3IgdG8gYmUgbGV0IG91dHNpZGUsIFwiICtcbiAgICAgIFwiZ2V0IGxldCBvdXQgdGhlbiBzY3JhdGNoIGF0IGRvb3IgaW1tbWVkaWF0ZWx5IGFmdGVyIHRvIGJlIGxldCBiYWNrIGluIHJlYWxseSBsaWtlcyBodW1tdXMgbXVuY2gsIG11bmNoLCBjaG9tcCwgY2hvbXAgYW5kIGNhdCBub3Qga2l0dGVuIGFyb3VuZCAuIFwiICsgXG4gICAgICBcIkNhdHMgd29vIGZhdCBiYWJ5IGNhdCBiZXN0IGJ1ZGR5IGxpdHRsZSBndXkgc2hyZWQgYWxsIHRvaWxldCBwYXBlciBhbmQgc3ByZWFkIGFyb3VuZCB0aGUgaG91c2UgZ2V0IHN1c3BpY2lvdXMgb2Ygb3duIHNoYWRvdyB0aGVuIGdvIHBsYXkgd2l0aCB0b2lsZXR0ZSBwYXBlciBkZXN0cm95IGRvZy4gUnViIGJ1dHQgb24gdGFibGUuXCIsXG4gICAgICBwcm9qZWN0VG9kbzoge1xuICAgICAgICB0b2RvTGlzdDogW10sXG4gICAgICAgIHRvZG9GaW5pc2hlZDogW10sXG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgcHJvamVjdFRpdGxlOiBcIkRvZyBob3VzZVwiLFxuICAgICAgcHJvamVjdER1ZTogRGF0ZSgpLFxuICAgICAgcHJvamVjdERlc2M6IFwiWW91ciBHZW5lcmFsIHByb2plY3RzXCIsXG4gICAgICBwcm9qZWN0Tm90ZXM6IFwiWW91ciBzaW1wbGUgbm90ZXMuIFB1c2ggeW91ciB3YXRlciBnbGFzcyBvbiB0aGUgZmxvb3IuIENlcmVhbCBib3hlcyBtYWtlIGZvciBmaXZlIHN0YXIgYWNjb21tb2RhdGlvbiBodW50IGFueXRoaW5nLlwiICsgXG4gICAgICBcIkZyZWFrIGh1bWFuIG91dCBtYWtlIGZ1bm55IG5vaXNlIG1vdyBtb3cgbW93IG1vdyBtb3cgbW93IHN1Y2Nlc3Mgbm93IGF0dGFjayBodW1hbiBlYXQgYW5kIHRoYW4gc2xlZXAgb24geW91ciBmYWNlIHBlZXIgb3V0IHdpbmRvdywgXCIgK1xuICAgICAgXCJjaGF0dGVyIGF0IGJpcmRzLCBsdXJlIHRoZW0gdG8gbW91dGguIFNocmVkIGFsbCB0b2lsZXQgcGFwZXIgYW5kIHNwcmVhZCBhcm91bmQgdGhlIGhvdXNlIHNjcmF0Y2ggYXQgZG9vciB0byBiZSBsZXQgb3V0c2lkZSwgXCIgK1xuICAgICAgXCJnZXQgbGV0IG91dCB0aGVuIHNjcmF0Y2ggYXQgZG9vciBpbW1tZWRpYXRlbHkgYWZ0ZXIgdG8gYmUgbGV0IGJhY2sgaW4gcmVhbGx5IGxpa2VzIGh1bW11cyBtdW5jaCwgbXVuY2gsIGNob21wLCBjaG9tcCBhbmQgY2F0IG5vdCBraXR0ZW4gYXJvdW5kIC4gXCIgKyBcbiAgICAgIFwiQ2F0cyB3b28gZmF0IGJhYnkgY2F0IGJlc3QgYnVkZHkgbGl0dGxlIGd1eSBzaHJlZCBhbGwgdG9pbGV0IHBhcGVyIGFuZCBzcHJlYWQgYXJvdW5kIHRoZSBob3VzZSBnZXQgc3VzcGljaW91cyBvZiBvd24gc2hhZG93IHRoZW4gZ28gcGxheSB3aXRoIHRvaWxldHRlIHBhcGVyIGRlc3Ryb3kgZG9nLiBSdWIgYnV0dCBvbiB0YWJsZS5cIixcbiAgICAgIHByb2plY3RUb2RvOiB7XG4gICAgICAgIHRvZG9MaXN0OiBbXSxcbiAgICAgICAgdG9kb0ZpbmlzaGVkOiBbXSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm9qZWN0VGl0bGU6IFwiRmVlZCBjYXRzXCIsXG4gICAgICBwcm9qZWN0RHVlOiBEYXRlKCksXG4gICAgICBwcm9qZWN0RGVzYzogXCJZb3VyIEdlbmVyYWwgcHJvamVjdHNcIixcbiAgICAgIHByb2plY3ROb3RlczogXCJZb3VyIHNpbXBsZSBub3Rlcy4gUHVzaCB5b3VyIHdhdGVyIGdsYXNzIG9uIHRoZSBmbG9vci4gQ2VyZWFsIGJveGVzIG1ha2UgZm9yIGZpdmUgc3RhciBhY2NvbW1vZGF0aW9uIGh1bnQgYW55dGhpbmcuXCIgKyBcbiAgICAgIFwiRnJlYWsgaHVtYW4gb3V0IG1ha2UgZnVubnkgbm9pc2UgbW93IG1vdyBtb3cgbW93IG1vdyBtb3cgc3VjY2VzcyBub3cgYXR0YWNrIGh1bWFuIGVhdCBhbmQgdGhhbiBzbGVlcCBvbiB5b3VyIGZhY2UgcGVlciBvdXQgd2luZG93LCBcIiArXG4gICAgICBcImNoYXR0ZXIgYXQgYmlyZHMsIGx1cmUgdGhlbSB0byBtb3V0aC4gU2hyZWQgYWxsIHRvaWxldCBwYXBlciBhbmQgc3ByZWFkIGFyb3VuZCB0aGUgaG91c2Ugc2NyYXRjaCBhdCBkb29yIHRvIGJlIGxldCBvdXRzaWRlLCBcIiArXG4gICAgICBcImdldCBsZXQgb3V0IHRoZW4gc2NyYXRjaCBhdCBkb29yIGltbW1lZGlhdGVseSBhZnRlciB0byBiZSBsZXQgYmFjayBpbiByZWFsbHkgbGlrZXMgaHVtbXVzIG11bmNoLCBtdW5jaCwgY2hvbXAsIGNob21wIGFuZCBjYXQgbm90IGtpdHRlbiBhcm91bmQgLiBcIiArIFxuICAgICAgXCJDYXRzIHdvbyBmYXQgYmFieSBjYXQgYmVzdCBidWRkeSBsaXR0bGUgZ3V5IHNocmVkIGFsbCB0b2lsZXQgcGFwZXIgYW5kIHNwcmVhZCBhcm91bmQgdGhlIGhvdXNlIGdldCBzdXNwaWNpb3VzIG9mIG93biBzaGFkb3cgdGhlbiBnbyBwbGF5IHdpdGggdG9pbGV0dGUgcGFwZXIgZGVzdHJveSBkb2cuIFJ1YiBidXR0IG9uIHRhYmxlLlwiLFxuICAgICAgcHJvamVjdFRvZG86IHtcbiAgICAgICAgdG9kb0xpc3Q6IFtdLFxuICAgICAgICB0b2RvRmluaXNoZWQ6IFtdLFxuICAgICAgfSxcbiAgICB9XSxcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU5ld1RvZG8ocHJvamVjdEluZGV4LCBsaXN0SW5kZXgpIHtcbiAgICBtYWluSW5mby5wcm9qZWN0c1twcm9qZWN0SW5kZXhdW2xpc3RJbmRleF0uYXBwZW5kKCk7XG4gIH1cbiAgXG4gIGZ1bmN0aW9uIGVkaXRUb2RvKHByb2plY3RJbmRleCwgbGlzdEluZGV4LCB0b2RvSW5kZXgsIGluZm8pIHtcbiAgICBtYWluSW5mby5wcm9qZWN0c1twcm9qZWN0SW5kZXhdW2xpc3RJbmRleF1bdG9kb0luZGV4XSA9IGluZm87XG4gIH1cbiAgXG4gIGZ1bmN0aW9uIGRlbGV0ZVRvZG8ocHJvamVjdEluZGV4LCBsaXN0SW5kZXgsIHRvZG9JbmRleCkge1xuICAgIG1haW5JbmZvLnByb2plY3RzW3Byb2plY3RJbmRleF1bbGlzdEluZGV4XS5zcGxpY2UodG9kb0luZGV4LCAxKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlbGV0ZVRvZG9MaXN0KHByb2plY3RJbmRleCwgbGlzdEluZGV4KSB7XG4gICAgbWFpbkluZm8ucHJvamVjdHNbcHJvamVjdEluZGV4XS5zcGxpY2UobGlzdEluZGV4LCAxKTtcbiAgfVxuICBcbiAgZnVuY3Rpb24gYWRkTmV3UHJvamVjdCgpIHtcbiAgICBsZXQgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KCk7XG4gICAgbWFpbkluZm8ucHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcbiAgfVxuICBcbiAgZnVuY3Rpb24gZWRpdFByb2plY3QocHJvamVjdEluZGV4LCBzZWN0aW9uLCBpbmZvKSB7XG4gICAgaWYgKHNlY3Rpb24gaW4gbWFpbkluZm8ucHJvamVjdHNbcHJvamVjdEluZGV4XSkge1xuICAgICAgbWFpbkluZm8ucHJvamVjdHNbcHJvamVjdEluZGV4XS5zZWN0aW9uID0gaW5mbztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcIllvdXIgcHJvamVjdCBpcyBpbiBhbm90aGVyIGNhc3RsZVwiKTtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgfVxuICBcbiAgZnVuY3Rpb24gZGVsZXRlUHJvamVjdChwcm9qZWN0SW5kZXgpIHtcbiAgICBtYWluSW5mby5wcm9qZWN0cy5zcGxpY2UocHJvamVjdEluZGV4LCAxKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFByb2plY3RzKCkge1xuICAgIGxldCBwcm9qZWN0TmFtZXMgPSBbXVxuXG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCBtYWluSW5mby5wcm9qZWN0cy5sZW5ndGg7IHgrKykge1xuICAgICAgcHJvamVjdE5hbWVzLnB1c2gobWFpbkluZm8ucHJvamVjdHNbeF0ucHJvamVjdFRpdGxlKVxuICAgIH1cbiAgICByZXR1cm4gcHJvamVjdE5hbWVzXG4gIH1cblxuICBmdW5jdGlvbiBnZXRBbGxJbmZvKCkge1xuICAgIGNvbnNvbGUubG9nKG1haW5JbmZvKTtcbiAgfVxuXG4gIHJldHVybiB7IGNyZWF0ZU5ld1RvZG8sIGVkaXRUb2RvLCBkZWxldGVUb2RvLCBkZWxldGVUb2RvTGlzdCwgYWRkTmV3UHJvamVjdCwgYWRkTmV3UHJvamVjdCwgZWRpdFByb2plY3QsIGRlbGV0ZVByb2plY3QsIGdldFByb2plY3RzLCBnZXRBbGxJbmZvIH1cbn1cblxuZnVuY3Rpb24gVG9kbyh0b2RvKSB7XG4gIHRoaXMudG9kbyA9IHRvZG87XG4gIHRoaXMubnVtYmVyZWQgPSBmYWxzZTtcbiAgdGhpcy5maW5pc2hlZCA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBQcm9qZWN0KCkge1xuICB0aGlzLnByb2plY3RUaXRsZSA9IFwiTmV3IFByb2plY3RcIixcbiAgdGhpcy5wcm9qZWN0RHVlID0gRGF0ZSgpLnRvU3RyaW5nKCksXG4gIHRoaXMucHJvamVjdERlc2MgPSBcIkVudGVyIHlvdXIgcHJvamVjdCBkZXNjcmlwdGlvbiBoZXJlXCIsXG4gIHRoaXMucHJvamVjdE5vdGVzID0gXCJFbnRlciB5b3VyIG5vdGVzXCIsXG4gIHRoaXMucHJvamVjdFRvZG8gPSB7XG4gICAgdG9kb0xpc3Q6IFtdLFxuICAgIHRvZG9GaW5pc2hlZDogW10sXG4gIH1cbn1cblxuZXhwb3J0IHtpbml0aWFsaXplRGF0YX0iLCJcbmZ1bmN0aW9uIGJ1aWxkSGVhZGVyKCkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcblxuICBsZXQgd2ViVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICB3ZWJUaXRsZS5pbm5lclRleHQgPSBcIllvdXIgdG8tZG8gbGlzdFwiO1xuXG4gIGhlYWRlci5hcHBlbmRDaGlsZCh3ZWJUaXRsZSk7XG5cbiAgcmV0dXJuIGhlYWRlclxufVxuXG5leHBvcnQgeyBidWlsZEhlYWRlciB9IiwiaW1wb3J0IHsgYnVpbGRCdWxsZXRMaXN0IH0gZnJvbSBcIi4vbWFpbi13aW5kb3dcIjtcbmltcG9ydCB7IGJ1aWxkU2lkZU1lbnUsIHVwZGF0ZVNpZGVNZW51IH0gZnJvbSBcIi4vc2lkZS1tZW51XCI7XG5pbXBvcnQgeyBidWlsZEhlYWRlciB9IGZyb20gXCIuL2hlYWRlclwiO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZURhdGEgfSBmcm9tIFwiLi9kYXRhLXN0b3JhZ2VcIjtcblxuZnVuY3Rpb24gaW5pdGlhbGl6ZU1haW4oKSB7XG4gIGNvbnN0IG1haW5TY3JlZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBtYWluV2luZG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgY29uc3QgdG9kb0RhdGEgPSBpbml0aWFsaXplRGF0YSgpO1xuXG4gIC8vIFByaW50cyBvdXQgcHJvamVjdCBsaXN0IGludG8gY29uc29sZVxuICBkb2N1bWVudC5vbmtleWRvd24gPSAoZSkgPT4ge1xuICAgIGlmIChlLmtleSA9PSBcInBcIikge1xuICAgICAgY29uc29sZS5sb2codG9kb0RhdGEuZ2V0UHJvamVjdHMoKSlcbiAgICB9XG4gIH1cblxuICBjb25zdCBuZXdMaXN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgdG9kb0NvbnRhaW5lci5pZCA9ICd0b2RvLWNvbnRhaW5lcic7XG4gIHdyYXBwZXIuY2xhc3NOYW1lID0gJ3dyYXBwZXInO1xuICBtYWluU2NyZWVuLmlkID0gJ21haW4tc2NyZWVuJztcbiAgbWFpbkNvbnRhaW5lci5pZCA9IFwibWFpbi1jb250YWluZXJcIjtcbiAgbWFpbldpbmRvdy5pZCA9IFwibWFpbi13aW5kb3dcIjtcbiAgXG4gIC8vIFRvIGJlIHJlbW92ZWRcbiAgbGV0IHRvRG9FbGVtZW50cyA9IFsnRWF0IGZvb2QnLCAnU2xlZXAnLCAnRHJpbmsgV2F0ZXInXTtcblxuICBtYWluU2NyZWVuLmFwcGVuZENoaWxkKGJ1aWxkSGVhZGVyKCkpO1xuICBtYWluU2NyZWVuLmFwcGVuZENoaWxkKGJ1aWxkU2lkZU1lbnUodG9kb0RhdGEuYWRkTmV3UHJvamVjdCwgdG9kb0RhdGEuZ2V0UHJvamVjdHMpKTtcbiAgd3JhcHBlci5hcHBlbmRDaGlsZCh0b2RvQ29udGFpbmVyKTtcbiAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluQ29udGFpbmVyKTtcbiAgbWFpbldpbmRvdy5hcHBlbmRDaGlsZChidWlsZEJ1bGxldExpc3QodG9Eb0VsZW1lbnRzKSk7XG4gIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQobWFpbldpbmRvdyk7XG4gIG1haW5TY3JlZW4uYXBwZW5kQ2hpbGQod3JhcHBlcik7XG5cbiAgcmV0dXJuIG1haW5TY3JlZW47XG59XG5cbmV4cG9ydCB7IGluaXRpYWxpemVNYWluIH0iLCIvKipcbiAqIFRoaXMgZnVuY3Rpb24gY3JlYXRlcyB0aGUgdG8tZG8gbGlzdCwgaXQgYWxsb3dzIGFuIGFycmF5IHRvIGJlIGluc2VydGVkIHRvXG4gKiB0aGUgZnVuY3Rpb24uIEl0IGFsbG93cyBmb3IgYW4gb3B0aW9uYWwgdGl0bGUgYXMgd2VsbC5cbiAqIEByZXR1cm4ge3N0cmluZ30gLSBSZXR1cm5cbiAqL1xuXG4vLyBmdW5jdGlvbiBidWlsZE1haW5XaW5kb3coaW5mb3JtYXRpb24pIHtcbi8vICAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4vLyAgICAgY29uc3QgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4vLyAgICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuLy8gICAgIGNvbnN0IG1haW5XaW5kb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuLy8gICAgIHJldHVyblxuLy8gfVxuXG5mdW5jdGlvbiBjcmVhdGVNYWluV2luZG93KCkge1xuXG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVByb2plY3REaXNwbGF5KCkge1xuICAgIHJldHVyblxufVxuXG5mdW5jdGlvbiBidWlsZFRvZG9MaXN0KGxpc3RCdWxsZXRzKSB7XG4gICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGxpc3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgY29uc3QgdG9kb0xpc3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgcHJvamVjdENvbnRhaW5lci5jbGFzc05hbWUgPSAncHJvamVjdC1pbmZvLWNvbnRhaW5lcidcbiAgICB0b2RvTGlzdERpdi5jbGFzc05hbWUgPSBcImJ1bGxldExpc3RcIlxuXG4gICAgbGlzdFRpdGxlLmlubmVyVGV4dCA9ICdGaXJzdCB0by1kbyBsaXN0J1xuXG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCBsaXN0QnVsbGV0cy5sZW5ndGg7IHgrKykge1xuICAgICAgICBsZXQgdG9kb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGxldCB0b2RvRnJvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBsZXQgdG9kb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGxldCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBcbiAgICAgICAgbGV0IGNoZWNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICBjaGVja0JveC5jbGFzc05hbWUgPSBcInRvZG8tY2hlY2tib3hcIjtcbiAgICAgICAgY2hlY2tCb3gudHlwZSA9IFwiY2hlY2tib3hcIjtcblxuICAgICAgICBjaGVja0JveC5uYW1lID0gXCJmaW5pc2hlZC10b2RvXCJcblxuICAgICAgICB0b2RvRnJvbnQuY2xhc3NOYW1lID0gXCJ0b2RvLWZyb250XCI7XG4gICAgICAgIHRvZG9EaXYuY2xhc3NOYW1lID0gXCJ0b2RvLWRpdlwiO1xuICAgICAgICBkZWxldGVCdG4uY2xhc3NOYW1lID0gXCJ0b2RvLWRlbGV0ZVwiO1xuICAgICAgICB0b2RvVGV4dC5pbm5lclRleHQgPSBsaXN0QnVsbGV0c1t4XTtcblxuICAgICAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBkZWxldGUgJHt4fWApXG4gICAgICAgIH0pXG5cbiAgICAgICAgdG9kb0Zyb250LmFwcGVuZENoaWxkKGNoZWNrQm94KTtcbiAgICAgICAgdG9kb0Zyb250LmFwcGVuZENoaWxkKHRvZG9UZXh0KTtcbiAgICAgICAgdG9kb0Rpdi5hcHBlbmRDaGlsZCh0b2RvRnJvbnQpO1xuICAgICAgICB0b2RvRGl2LmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG4gICAgICAgIHRvZG9MaXN0RGl2LmFwcGVuZENoaWxkKHRvZG9EaXYpO1xuICAgIH1cblxuICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdFRpdGxlKTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9MaXN0RGl2KTtcblxuICAgIHJldHVybiBwcm9qZWN0Q29udGFpbmVyO1xufVxuXG5leHBvcnQgeyBidWlsZFRvZG9MaXN0IGFzIGJ1aWxkQnVsbGV0TGlzdCB9OyIsImZ1bmN0aW9uIGJ1aWxkU2lkZU1lbnUoYWRkZnVuY3Rpb24sIHByb2plY3RzRnVuY3QpIHtcbiAgbGV0IHNpZGVNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxldCBhZGREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZXQgYWRkVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgbGV0IGdlbmVyYWxUb2RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGV0IGdlbmVyYWxUb2RvVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcblxuICBnZW5lcmFsVG9kb0Rpdi5jbGFzc0xpc3QgPSBcImdlbmVyYWwtdG9kby1saXN0XCI7XG4gIGdlbmVyYWxUb2RvVGV4dC5pbm5lclRleHQgPSBcIkdlbmVyYWwgVG8tZG9zXCI7XG4gIGdlbmVyYWxUb2RvRGl2LmFwcGVuZENoaWxkKGdlbmVyYWxUb2RvVGV4dCk7XG4gIGdlbmVyYWxUb2RvRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJjbGlja2VkIGdlbmVyYWxcIilcbiAgfSlcbiAgXG4gIGFkZERpdi5jbGFzc05hbWUgPSBcInNpZGUtYWRkLWRpdlwiO1xuICBhZGRUZXh0LmlubmVyVGV4dCA9IFwiQWRkIFByb2plY3RcIjtcbiAgYWRkRGl2LmFwcGVuZENoaWxkKGFkZFRleHQpO1xuXG5cbiAgbGV0IGFkZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGFkZEJ0bi5jbGFzc05hbWUgPSBcImFkZC1wcm9qZWN0LWJ0blwiO1xuICBhZGREaXYuYXBwZW5kQ2hpbGQoYWRkQnRuKTtcbiAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgYWRkZnVuY3Rpb24oKTtcbiAgICB1cGRhdGVTaWRlTWVudShwcm9qZWN0c0Z1bmN0KCkpO1xuICB9KVxuXG4gIHNpZGVNZW51LmlkID0gXCJzaWRlLW1lbnVcIjtcbiAgc2lkZU1lbnUuYXBwZW5kQ2hpbGQoYWRkRGl2KTtcbiAgc2lkZU1lbnUuYXBwZW5kQ2hpbGQoZ2VuZXJhbFRvZG9EaXYpO1xuICBzaWRlTWVudS5hcHBlbmRDaGlsZChnZW5lcmF0ZVByb2plY3RFbGVtZW50cyhwcm9qZWN0c0Z1bmN0KCkpKTtcbiAgXG4gIHJldHVybiBzaWRlTWVudTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVQcm9qZWN0RWxlbWVudHMoaW5mb3JtYXRpb24pIHtcbiAgbGV0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIHByb2plY3RDb250YWluZXIuY2xhc3NOYW1lID0gXCJwcm9qZWN0LWNvbnRhaW5lclwiO1xuXG4gIGZvciAobGV0IHggPSAwOyB4IDwgaW5mb3JtYXRpb24ubGVuZ3RoOyB4KyspIHtcbiAgICBsZXQgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGV0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIGxldCBidXR0b25zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgbGV0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgICBwcm9qZWN0RGl2LnNldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIiwgeCk7XG5cbiAgICBwcm9qZWN0RGl2LmNsYXNzTmFtZSA9IFwic2lkZS1wcm9qZWN0LWRpdlwiO1xuICAgIGJ1dHRvbnNEaXYuY2xhc3NOYW1lID0gXCJzaWRlLXByb2plY3QtYnRuc1wiO1xuICAgIGVkaXRCdXR0b24uY2xhc3NOYW1lID0gXCJlZGl0LWJ0blwiO1xuICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc05hbWUgPSBcImRlbGV0ZS1idG5cIjtcbiAgICBwcm9qZWN0TmFtZS5pbm5lclRleHQgPSBpbmZvcm1hdGlvblt4XTtcblxuXG4gICAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coYEVkaXQ6ICR7aW5mb3JtYXRpb25beF19YClcbiAgICB9KTtcblxuICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coYERlbGV0ZTogJHtpbmZvcm1hdGlvblt4XX1gKVxuICAgIH0pXG4gICAgXG4gICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XG4gICAgYnV0dG9uc0Rpdi5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcbiAgICBidXR0b25zRGl2LmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG4gICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChidXR0b25zRGl2KTtcbiAgICBcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3REaXYpO1xuICB9XG5cbiAgcmV0dXJuIHByb2plY3RDb250YWluZXI7XG59XG5cblxuZnVuY3Rpb24gdXBkYXRlU2lkZU1lbnUocHJvamVjdEFycmF5KSB7XG4gIGxldCBwcm9qZWN0Q29udCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2lkZS1tZW51XCIpO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdC1jb250YWluZXJcIikuZm9yRWFjaChlID0+IGUucmVtb3ZlKCkpO1xuICBcbiAgcHJvamVjdENvbnQuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVQcm9qZWN0RWxlbWVudHMocHJvamVjdEFycmF5KSk7XG59XG5cblxuZnVuY3Rpb24gZWRpdFByb2plY3RUaXRsZShpbmRleE51bSwgbmV3VGl0bGUpIHtcbiAgY29uc29sZS5sb2cobmV3VGl0bGUpXG4gIHJldHVyblxufVxuXG5cbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3QoaW5mbykge1xuICBjb25zb2xlLmxvZyhpbmZvKVxufVxuXG5leHBvcnQgeyBidWlsZFNpZGVNZW51LCB1cGRhdGVTaWRlTWVudSwgZ2VuZXJhdGVQcm9qZWN0RWxlbWVudHMgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMvc3R5bGUuY3NzJztcbmltcG9ydCB7IGluaXRpYWxpemVNYWluIH0gZnJvbSAnLi9mdW5jdGlvbnMvaW5pdGlhbGl6ZS1zaXRlJztcbmltcG9ydCB7IGJ1aWxkSGVhZGVyIH0gZnJvbSAnLi9mdW5jdGlvbnMvaGVhZGVyJztcbmltcG9ydCB7IHVwZGF0ZVNpZGVNZW51IH0gZnJvbSAnLi9mdW5jdGlvbnMvc2lkZS1tZW51JztcblxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuYm9keS5hcHBlbmRDaGlsZChpbml0aWFsaXplTWFpbigpKTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9