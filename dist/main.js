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
    background-color: rgba(255, 255, 255, 1);
    --side-green: rgba(0, 110, 0, 1);
    --side-red: red;
    --header-height: 7vh;
}

#main-screen {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
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

    & div {
        display: flex;
        justify-content: space-between;
        margin: 5px 0;
    }

    & > button {
        width: 5px;
        height: 5px;
    }
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
}

.side-project-div {
    display: flex;
    justify-content: space-between;

    & button {
        background-color: var(--side-red);
    }
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

ul {
    list-style-type: circle;
}
button {
    width: 20px;
}

.todo-container {
    display: flex;
}

.todo-front {
    display: flex;

    & button {
        margin-right: 5px;
    }
}

.todo-div {
    display: flex;
    justify-content: space-between;
    margin: 5px 0;
}
`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,wCAAwC;IACxC,gCAAgC;IAChC,eAAe;IACf,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,2DAA2D;IAC3D,4EAA4E;AAChF;;AAEA;IACI,mBAAmB;IACnB,gCAAgC;IAChC,oCAAoC;IACpC,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,8CAA8C;IAC9C,SAAS;IACT,oCAAoC;IACpC,YAAY;;IAEZ;QACI,aAAa;QACb,8BAA8B;QAC9B,aAAa;IACjB;;IAEA;QACI,UAAU;QACV,WAAW;IACf;AACJ;;AAEA;IACI,wBAAwB;IACxB,aAAa;;IAEb;QACI,mCAAmC;IACvC;AACJ;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,8BAA8B;;IAE9B;QACI,iCAAiC;IACrC;AACJ;;AAEA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,mBAAmB;IACnB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,oCAAoC;IACpC,YAAY;AAChB;;AAEA;IACI,uBAAuB;AAC3B;AACA;IACI,WAAW;AACf;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;;IAEb;QACI,iBAAiB;IACrB;AACJ;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,aAAa;AACjB","sourcesContent":[":root {\n    font: 16px;\n    background-color: rgba(255, 255, 255, 1);\n    --side-green: rgba(0, 110, 0, 1);\n    --side-red: red;\n    --header-height: 7vh;\n}\n\n#main-screen {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n    grid-template-rows: var(--header-height), calc(100vh - var(--header-height));\n}\n\nheader {\n    grid-column: 1 / -1;\n    min-height: var(--header-height);\n    background-color: rgb(130, 232, 140);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#side-menu {\n    grid-column: 1 / 2;\n    min-width: 150px;\n    min-height: calc(100vh - var(--header-height));\n    margin: 0;\n    background-color: rgb(190, 190, 255);\n    padding: 5px;\n\n    & div {\n        display: flex;\n        justify-content: space-between;\n        margin: 5px 0;\n    }\n\n    & > button {\n        width: 5px;\n        height: 5px;\n    }\n}\n\n.side-add-div {\n    color: var(--side-green);\n    display: flex;\n\n    & button {\n        background-color: var(--side-green);\n    }\n}\n\n.project-container {\n    display: flex;\n    flex-direction: column;\n}\n\n.side-project-div {\n    display: flex;\n    justify-content: space-between;\n\n    & button {\n        background-color: var(--side-red);\n    }\n}\n\n*:not(ul) {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n.wrapper {\n    grid-column: 2 / -1;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.project-list-container {\n    display: flex;\n}\n\n#main-container {\n    display: flex;\n    align-items: center;\n}\n\n#main-window {\n    width: 60vw;\n    height: 70vh;\n    background-color: rgb(227, 240, 114);\n    padding: 5px;\n}\n\nul {\n    list-style-type: circle;\n}\nbutton {\n    width: 20px;\n}\n\n.todo-container {\n    display: flex;\n}\n\n.todo-front {\n    display: flex;\n\n    & button {\n        margin-right: 5px;\n    }\n}\n\n.todo-div {\n    display: flex;\n    justify-content: space-between;\n    margin: 5px 0;\n}\n"],"sourceRoot":""}]);
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
    console.log(projectNames)
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

  // // Prints out project list into console
  // document.onkeydown = (e) => {
  //   if (e.key == "p") {
  //     todoData.getAllInfo()
  //   }
  // }

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
        let finishBox = document.createElement("button");
        let todoText = document.createElement('p');
        let deleteBtn = document.createElement("button");

        todoFront.className = "todo-front";
        todoDiv.className = "todo-div";
        deleteBtn.className = "todo-delete";
        todoText.innerText = listBullets[x];

        todoFront.appendChild(finishBox);
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
  const sideMenu = document.createElement('div');
  let addDiv = document.createElement("div");
  let addText = document.createElement("h3");
  let projectList = document.createElement("div");
  
  addDiv.className = "side-add-div";
  addText.innerText = "Add Project";
  addDiv.appendChild(addText);

  projectList.classList = "project-container";
  
  let addBtn = document.createElement("button");
  addBtn.className = "add-project-btn";
  addDiv.appendChild(addBtn);

  addBtn.addEventListener("click", () => {
    addfunction();
    updateSideMenu(projectsFunct());
  })

  projectList.innerHTML = generateProjectElements(projectsFunct())

  sideMenu.id = "side-menu";
  sideMenu.appendChild(addDiv);
  sideMenu.appendChild(projectList);
  
  return sideMenu;
}

function generateProjectElements(information) {
  let projectContainer = document.createElement("div");

  for (let x = 0; x < information.length; x++) {
    let projectDiv = document.createElement("div");
    let projectName = document.createElement("h3");
    let deleteButton = document.createElement("button");

    projectDiv.setAttribute("data-index", x);

    projectDiv.className = "side-project-div";
    deleteButton.className = "delete-btn";
    projectName.innerText = information[x];

    deleteButton.addEventListener("click", () => {
      deleteProject(information[x]);
    })

    projectDiv.appendChild(projectName);
    projectDiv.appendChild(deleteButton);
    projectContainer.appendChild(projectDiv);
  }

  return projectContainer.innerHTML;
}

function updateSideMenu(projectArray) {
  let projectCont = document.querySelector(".project-container")
  
  projectCont.innerHTML = generateProjectElements(projectArray)
}

function editProjectTitle() {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7VUNwRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7OztBQ0E0QjtBQUNpQztBQUNaO0FBQ007O0FBRXZEOztBQUVBLGlCQUFpQiwwRUFBYyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2Z1bmN0aW9ucy9kYXRhLXN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9mdW5jdGlvbnMvaGVhZGVyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZnVuY3Rpb25zL2luaXRpYWxpemUtc2l0ZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2Z1bmN0aW9ucy9tYWluLXdpbmRvdy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2Z1bmN0aW9ucy9zaWRlLW1lbnUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAgIGZvbnQ6IDE2cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbiAgICAtLXNpZGUtZ3JlZW46IHJnYmEoMCwgMTEwLCAwLCAxKTtcbiAgICAtLXNpZGUtcmVkOiByZWQ7XG4gICAgLS1oZWFkZXItaGVpZ2h0OiA3dmg7XG59XG5cbiNtYWluLXNjcmVlbiB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDE1MHB4LCAxZnIpKTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHZhcigtLWhlYWRlci1oZWlnaHQpLCBjYWxjKDEwMHZoIC0gdmFyKC0taGVhZGVyLWhlaWdodCkpO1xufVxuXG5oZWFkZXIge1xuICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XG4gICAgbWluLWhlaWdodDogdmFyKC0taGVhZGVyLWhlaWdodCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzMCwgMjMyLCAxNDApO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI3NpZGUtbWVudSB7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuICAgIG1pbi13aWR0aDogMTUwcHg7XG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIHZhcigtLWhlYWRlci1oZWlnaHQpKTtcbiAgICBtYXJnaW46IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MCwgMTkwLCAyNTUpO1xuICAgIHBhZGRpbmc6IDVweDtcblxuICAgICYgZGl2IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBtYXJnaW46IDVweCAwO1xuICAgIH1cblxuICAgICYgPiBidXR0b24ge1xuICAgICAgICB3aWR0aDogNXB4O1xuICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICB9XG59XG5cbi5zaWRlLWFkZC1kaXYge1xuICAgIGNvbG9yOiB2YXIoLS1zaWRlLWdyZWVuKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgJiBidXR0b24ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlLWdyZWVuKTtcbiAgICB9XG59XG5cbi5wcm9qZWN0LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uc2lkZS1wcm9qZWN0LWRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAmIGJ1dHRvbiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGUtcmVkKTtcbiAgICB9XG59XG5cbio6bm90KHVsKSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLndyYXBwZXIge1xuICAgIGdyaWQtY29sdW1uOiAyIC8gLTE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ucHJvamVjdC1saXN0LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuI21haW4tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNtYWluLXdpbmRvdyB7XG4gICAgd2lkdGg6IDYwdnc7XG4gICAgaGVpZ2h0OiA3MHZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjcsIDI0MCwgMTE0KTtcbiAgICBwYWRkaW5nOiA1cHg7XG59XG5cbnVsIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IGNpcmNsZTtcbn1cbmJ1dHRvbiB7XG4gICAgd2lkdGg6IDIwcHg7XG59XG5cbi50b2RvLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLnRvZG8tZnJvbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAmIGJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgIH1cbn1cblxuLnRvZG8tZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtYXJnaW46IDVweCAwO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFVBQVU7SUFDVix3Q0FBd0M7SUFDeEMsZ0NBQWdDO0lBQ2hDLGVBQWU7SUFDZixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMkRBQTJEO0lBQzNELDRFQUE0RTtBQUNoRjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixnQ0FBZ0M7SUFDaEMsb0NBQW9DO0lBQ3BDLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQiw4Q0FBOEM7SUFDOUMsU0FBUztJQUNULG9DQUFvQztJQUNwQyxZQUFZOztJQUVaO1FBQ0ksYUFBYTtRQUNiLDhCQUE4QjtRQUM5QixhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksVUFBVTtRQUNWLFdBQVc7SUFDZjtBQUNKOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGFBQWE7O0lBRWI7UUFDSSxtQ0FBbUM7SUFDdkM7QUFDSjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCOztJQUU5QjtRQUNJLGlDQUFpQztJQUNyQztBQUNKOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhOztJQUViO1FBQ0ksaUJBQWlCO0lBQ3JCO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGFBQWE7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICBmb250OiAxNnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xcbiAgICAtLXNpZGUtZ3JlZW46IHJnYmEoMCwgMTEwLCAwLCAxKTtcXG4gICAgLS1zaWRlLXJlZDogcmVkO1xcbiAgICAtLWhlYWRlci1oZWlnaHQ6IDd2aDtcXG59XFxuXFxuI21haW4tc2NyZWVuIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxNTBweCwgMWZyKSk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogdmFyKC0taGVhZGVyLWhlaWdodCksIGNhbGMoMTAwdmggLSB2YXIoLS1oZWFkZXItaGVpZ2h0KSk7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICAgIG1pbi1oZWlnaHQ6IHZhcigtLWhlYWRlci1oZWlnaHQpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTMwLCAyMzIsIDE0MCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jc2lkZS1tZW51IHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gdmFyKC0taGVhZGVyLWhlaWdodCkpO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTAsIDE5MCwgMjU1KTtcXG4gICAgcGFkZGluZzogNXB4O1xcblxcbiAgICAmIGRpdiB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgbWFyZ2luOiA1cHggMDtcXG4gICAgfVxcblxcbiAgICAmID4gYnV0dG9uIHtcXG4gICAgICAgIHdpZHRoOiA1cHg7XFxuICAgICAgICBoZWlnaHQ6IDVweDtcXG4gICAgfVxcbn1cXG5cXG4uc2lkZS1hZGQtZGl2IHtcXG4gICAgY29sb3I6IHZhcigtLXNpZGUtZ3JlZW4pO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcblxcbiAgICAmIGJ1dHRvbiB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlLWdyZWVuKTtcXG4gICAgfVxcbn1cXG5cXG4ucHJvamVjdC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uc2lkZS1wcm9qZWN0LWRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG4gICAgJiBidXR0b24ge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZS1yZWQpO1xcbiAgICB9XFxufVxcblxcbio6bm90KHVsKSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgICBncmlkLWNvbHVtbjogMiAvIC0xO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3QtbGlzdC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jbWFpbi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jbWFpbi13aW5kb3cge1xcbiAgICB3aWR0aDogNjB2dztcXG4gICAgaGVpZ2h0OiA3MHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI3LCAyNDAsIDExNCk7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuXFxudWwge1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IGNpcmNsZTtcXG59XFxuYnV0dG9uIHtcXG4gICAgd2lkdGg6IDIwcHg7XFxufVxcblxcbi50b2RvLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi50b2RvLWZyb250IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG5cXG4gICAgJiBidXR0b24ge1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuICAgIH1cXG59XFxuXFxuLnRvZG8tZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBtYXJnaW46IDVweCAwO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiXG5mdW5jdGlvbiBpbml0aWFsaXplRGF0YSgpIHtcbiAgbGV0IG1haW5JbmZvID0ge1xuICAgIHVzZXJuYW1lOiBcIkpvaG4gRG9lXCIsXG4gICAgcHJvamVjdHM6IFt7XG4gICAgICBwcm9qZWN0VGl0bGU6IFwiR2VuZXJhbFwiLFxuICAgICAgcHJvamVjdER1ZTogRGF0ZSgpLFxuICAgICAgcHJvamVjdERlc2M6IFwiWW91ciBHZW5lcmFsIHByb2plY3RzXCIsXG4gICAgICBwcm9qZWN0Tm90ZXM6IFwiWW91ciBzaW1wbGUgbm90ZXMuIFB1c2ggeW91ciB3YXRlciBnbGFzcyBvbiB0aGUgZmxvb3IuIENlcmVhbCBib3hlcyBtYWtlIGZvciBmaXZlIHN0YXIgYWNjb21tb2RhdGlvbiBodW50IGFueXRoaW5nLlwiICsgXG4gICAgICBcIkZyZWFrIGh1bWFuIG91dCBtYWtlIGZ1bm55IG5vaXNlIG1vdyBtb3cgbW93IG1vdyBtb3cgbW93IHN1Y2Nlc3Mgbm93IGF0dGFjayBodW1hbiBlYXQgYW5kIHRoYW4gc2xlZXAgb24geW91ciBmYWNlIHBlZXIgb3V0IHdpbmRvdywgXCIgK1xuICAgICAgXCJjaGF0dGVyIGF0IGJpcmRzLCBsdXJlIHRoZW0gdG8gbW91dGguIFNocmVkIGFsbCB0b2lsZXQgcGFwZXIgYW5kIHNwcmVhZCBhcm91bmQgdGhlIGhvdXNlIHNjcmF0Y2ggYXQgZG9vciB0byBiZSBsZXQgb3V0c2lkZSwgXCIgK1xuICAgICAgXCJnZXQgbGV0IG91dCB0aGVuIHNjcmF0Y2ggYXQgZG9vciBpbW1tZWRpYXRlbHkgYWZ0ZXIgdG8gYmUgbGV0IGJhY2sgaW4gcmVhbGx5IGxpa2VzIGh1bW11cyBtdW5jaCwgbXVuY2gsIGNob21wLCBjaG9tcCBhbmQgY2F0IG5vdCBraXR0ZW4gYXJvdW5kIC4gXCIgKyBcbiAgICAgIFwiQ2F0cyB3b28gZmF0IGJhYnkgY2F0IGJlc3QgYnVkZHkgbGl0dGxlIGd1eSBzaHJlZCBhbGwgdG9pbGV0IHBhcGVyIGFuZCBzcHJlYWQgYXJvdW5kIHRoZSBob3VzZSBnZXQgc3VzcGljaW91cyBvZiBvd24gc2hhZG93IHRoZW4gZ28gcGxheSB3aXRoIHRvaWxldHRlIHBhcGVyIGRlc3Ryb3kgZG9nLiBSdWIgYnV0dCBvbiB0YWJsZS5cIixcbiAgICAgIHByb2plY3RUb2RvOiB7XG4gICAgICAgIHRvZG9MaXN0OiBbXSxcbiAgICAgICAgdG9kb0ZpbmlzaGVkOiBbXSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm9qZWN0VGl0bGU6IFwiRG9nIGhvdXNlXCIsXG4gICAgICBwcm9qZWN0RHVlOiBEYXRlKCksXG4gICAgICBwcm9qZWN0RGVzYzogXCJZb3VyIEdlbmVyYWwgcHJvamVjdHNcIixcbiAgICAgIHByb2plY3ROb3RlczogXCJZb3VyIHNpbXBsZSBub3Rlcy4gUHVzaCB5b3VyIHdhdGVyIGdsYXNzIG9uIHRoZSBmbG9vci4gQ2VyZWFsIGJveGVzIG1ha2UgZm9yIGZpdmUgc3RhciBhY2NvbW1vZGF0aW9uIGh1bnQgYW55dGhpbmcuXCIgKyBcbiAgICAgIFwiRnJlYWsgaHVtYW4gb3V0IG1ha2UgZnVubnkgbm9pc2UgbW93IG1vdyBtb3cgbW93IG1vdyBtb3cgc3VjY2VzcyBub3cgYXR0YWNrIGh1bWFuIGVhdCBhbmQgdGhhbiBzbGVlcCBvbiB5b3VyIGZhY2UgcGVlciBvdXQgd2luZG93LCBcIiArXG4gICAgICBcImNoYXR0ZXIgYXQgYmlyZHMsIGx1cmUgdGhlbSB0byBtb3V0aC4gU2hyZWQgYWxsIHRvaWxldCBwYXBlciBhbmQgc3ByZWFkIGFyb3VuZCB0aGUgaG91c2Ugc2NyYXRjaCBhdCBkb29yIHRvIGJlIGxldCBvdXRzaWRlLCBcIiArXG4gICAgICBcImdldCBsZXQgb3V0IHRoZW4gc2NyYXRjaCBhdCBkb29yIGltbW1lZGlhdGVseSBhZnRlciB0byBiZSBsZXQgYmFjayBpbiByZWFsbHkgbGlrZXMgaHVtbXVzIG11bmNoLCBtdW5jaCwgY2hvbXAsIGNob21wIGFuZCBjYXQgbm90IGtpdHRlbiBhcm91bmQgLiBcIiArIFxuICAgICAgXCJDYXRzIHdvbyBmYXQgYmFieSBjYXQgYmVzdCBidWRkeSBsaXR0bGUgZ3V5IHNocmVkIGFsbCB0b2lsZXQgcGFwZXIgYW5kIHNwcmVhZCBhcm91bmQgdGhlIGhvdXNlIGdldCBzdXNwaWNpb3VzIG9mIG93biBzaGFkb3cgdGhlbiBnbyBwbGF5IHdpdGggdG9pbGV0dGUgcGFwZXIgZGVzdHJveSBkb2cuIFJ1YiBidXR0IG9uIHRhYmxlLlwiLFxuICAgICAgcHJvamVjdFRvZG86IHtcbiAgICAgICAgdG9kb0xpc3Q6IFtdLFxuICAgICAgICB0b2RvRmluaXNoZWQ6IFtdLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb2plY3RUaXRsZTogXCJGZWVkIGNhdHNcIixcbiAgICAgIHByb2plY3REdWU6IERhdGUoKSxcbiAgICAgIHByb2plY3REZXNjOiBcIllvdXIgR2VuZXJhbCBwcm9qZWN0c1wiLFxuICAgICAgcHJvamVjdE5vdGVzOiBcIllvdXIgc2ltcGxlIG5vdGVzLiBQdXNoIHlvdXIgd2F0ZXIgZ2xhc3Mgb24gdGhlIGZsb29yLiBDZXJlYWwgYm94ZXMgbWFrZSBmb3IgZml2ZSBzdGFyIGFjY29tbW9kYXRpb24gaHVudCBhbnl0aGluZy5cIiArIFxuICAgICAgXCJGcmVhayBodW1hbiBvdXQgbWFrZSBmdW5ueSBub2lzZSBtb3cgbW93IG1vdyBtb3cgbW93IG1vdyBzdWNjZXNzIG5vdyBhdHRhY2sgaHVtYW4gZWF0IGFuZCB0aGFuIHNsZWVwIG9uIHlvdXIgZmFjZSBwZWVyIG91dCB3aW5kb3csIFwiICtcbiAgICAgIFwiY2hhdHRlciBhdCBiaXJkcywgbHVyZSB0aGVtIHRvIG1vdXRoLiBTaHJlZCBhbGwgdG9pbGV0IHBhcGVyIGFuZCBzcHJlYWQgYXJvdW5kIHRoZSBob3VzZSBzY3JhdGNoIGF0IGRvb3IgdG8gYmUgbGV0IG91dHNpZGUsIFwiICtcbiAgICAgIFwiZ2V0IGxldCBvdXQgdGhlbiBzY3JhdGNoIGF0IGRvb3IgaW1tbWVkaWF0ZWx5IGFmdGVyIHRvIGJlIGxldCBiYWNrIGluIHJlYWxseSBsaWtlcyBodW1tdXMgbXVuY2gsIG11bmNoLCBjaG9tcCwgY2hvbXAgYW5kIGNhdCBub3Qga2l0dGVuIGFyb3VuZCAuIFwiICsgXG4gICAgICBcIkNhdHMgd29vIGZhdCBiYWJ5IGNhdCBiZXN0IGJ1ZGR5IGxpdHRsZSBndXkgc2hyZWQgYWxsIHRvaWxldCBwYXBlciBhbmQgc3ByZWFkIGFyb3VuZCB0aGUgaG91c2UgZ2V0IHN1c3BpY2lvdXMgb2Ygb3duIHNoYWRvdyB0aGVuIGdvIHBsYXkgd2l0aCB0b2lsZXR0ZSBwYXBlciBkZXN0cm95IGRvZy4gUnViIGJ1dHQgb24gdGFibGUuXCIsXG4gICAgICBwcm9qZWN0VG9kbzoge1xuICAgICAgICB0b2RvTGlzdDogW10sXG4gICAgICAgIHRvZG9GaW5pc2hlZDogW10sXG4gICAgICB9LFxuICAgIH1dLFxuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlTmV3VG9kbyhwcm9qZWN0SW5kZXgsIGxpc3RJbmRleCkge1xuICAgIG1haW5JbmZvLnByb2plY3RzW3Byb2plY3RJbmRleF1bbGlzdEluZGV4XS5hcHBlbmQoKTtcbiAgfVxuICBcbiAgZnVuY3Rpb24gZWRpdFRvZG8ocHJvamVjdEluZGV4LCBsaXN0SW5kZXgsIHRvZG9JbmRleCwgaW5mbykge1xuICAgIG1haW5JbmZvLnByb2plY3RzW3Byb2plY3RJbmRleF1bbGlzdEluZGV4XVt0b2RvSW5kZXhdID0gaW5mbztcbiAgfVxuICBcbiAgZnVuY3Rpb24gZGVsZXRlVG9kbyhwcm9qZWN0SW5kZXgsIGxpc3RJbmRleCwgdG9kb0luZGV4KSB7XG4gICAgbWFpbkluZm8ucHJvamVjdHNbcHJvamVjdEluZGV4XVtsaXN0SW5kZXhdLnNwbGljZSh0b2RvSW5kZXgsIDEpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVsZXRlVG9kb0xpc3QocHJvamVjdEluZGV4LCBsaXN0SW5kZXgpIHtcbiAgICBtYWluSW5mby5wcm9qZWN0c1twcm9qZWN0SW5kZXhdLnNwbGljZShsaXN0SW5kZXgsIDEpO1xuICB9XG4gIFxuICBmdW5jdGlvbiBhZGROZXdQcm9qZWN0KCkge1xuICAgIGxldCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QoKTtcbiAgICBtYWluSW5mby5wcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuICB9XG4gIFxuICBmdW5jdGlvbiBlZGl0UHJvamVjdChwcm9qZWN0SW5kZXgsIHNlY3Rpb24sIGluZm8pIHtcbiAgICBpZiAoc2VjdGlvbiBpbiBtYWluSW5mby5wcm9qZWN0c1twcm9qZWN0SW5kZXhdKSB7XG4gICAgICBtYWluSW5mby5wcm9qZWN0c1twcm9qZWN0SW5kZXhdLnNlY3Rpb24gPSBpbmZvO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiWW91ciBwcm9qZWN0IGlzIGluIGFub3RoZXIgY2FzdGxlXCIpO1xuICAgICAgcmV0dXJuXG4gICAgfVxuICB9XG4gIFxuICBmdW5jdGlvbiBkZWxldGVQcm9qZWN0KHByb2plY3RJbmRleCkge1xuICAgIG1haW5JbmZvLnByb2plY3RzLnNwbGljZShwcm9qZWN0SW5kZXgsIDEpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0UHJvamVjdHMoKSB7XG4gICAgbGV0IHByb2plY3ROYW1lcyA9IFtdXG5cbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IG1haW5JbmZvLnByb2plY3RzLmxlbmd0aDsgeCsrKSB7XG4gICAgICBwcm9qZWN0TmFtZXMucHVzaChtYWluSW5mby5wcm9qZWN0c1t4XS5wcm9qZWN0VGl0bGUpXG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHByb2plY3ROYW1lcylcbiAgICByZXR1cm4gcHJvamVjdE5hbWVzXG4gIH1cblxuICBmdW5jdGlvbiBnZXRBbGxJbmZvKCkge1xuICAgIGNvbnNvbGUubG9nKG1haW5JbmZvKTtcbiAgfVxuXG4gIHJldHVybiB7IGNyZWF0ZU5ld1RvZG8sIGVkaXRUb2RvLCBkZWxldGVUb2RvLCBkZWxldGVUb2RvTGlzdCwgYWRkTmV3UHJvamVjdCwgYWRkTmV3UHJvamVjdCwgZWRpdFByb2plY3QsIGRlbGV0ZVByb2plY3QsIGdldFByb2plY3RzLCBnZXRBbGxJbmZvIH1cbn1cblxuZnVuY3Rpb24gVG9kbyh0b2RvKSB7XG4gIHRoaXMudG9kbyA9IHRvZG87XG4gIHRoaXMubnVtYmVyZWQgPSBmYWxzZTtcbiAgdGhpcy5maW5pc2hlZCA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBQcm9qZWN0KCkge1xuICB0aGlzLnByb2plY3RUaXRsZSA9IFwiTmV3IFByb2plY3RcIixcbiAgdGhpcy5wcm9qZWN0RHVlID0gRGF0ZSgpLnRvU3RyaW5nKCksXG4gIHRoaXMucHJvamVjdERlc2MgPSBcIkVudGVyIHlvdXIgcHJvamVjdCBkZXNjcmlwdGlvbiBoZXJlXCIsXG4gIHRoaXMucHJvamVjdE5vdGVzID0gXCJFbnRlciB5b3VyIG5vdGVzXCIsXG4gIHRoaXMucHJvamVjdFRvZG8gPSB7XG4gICAgdG9kb0xpc3Q6IFtdLFxuICAgIHRvZG9GaW5pc2hlZDogW10sXG4gIH1cbn1cblxuZXhwb3J0IHtpbml0aWFsaXplRGF0YX0iLCJcbmZ1bmN0aW9uIGJ1aWxkSGVhZGVyKCkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcblxuICBsZXQgd2ViVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICB3ZWJUaXRsZS5pbm5lclRleHQgPSBcIllvdXIgdG8tZG8gbGlzdFwiO1xuXG4gIGhlYWRlci5hcHBlbmRDaGlsZCh3ZWJUaXRsZSk7XG5cbiAgcmV0dXJuIGhlYWRlclxufVxuXG5leHBvcnQgeyBidWlsZEhlYWRlciB9IiwiaW1wb3J0IHsgYnVpbGRCdWxsZXRMaXN0IH0gZnJvbSBcIi4vbWFpbi13aW5kb3dcIjtcbmltcG9ydCB7IGJ1aWxkU2lkZU1lbnUsIHVwZGF0ZVNpZGVNZW51IH0gZnJvbSBcIi4vc2lkZS1tZW51XCI7XG5pbXBvcnQgeyBidWlsZEhlYWRlciB9IGZyb20gXCIuL2hlYWRlclwiO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZURhdGEgfSBmcm9tIFwiLi9kYXRhLXN0b3JhZ2VcIjtcblxuZnVuY3Rpb24gaW5pdGlhbGl6ZU1haW4oKSB7XG4gIGNvbnN0IG1haW5TY3JlZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBtYWluV2luZG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgY29uc3QgdG9kb0RhdGEgPSBpbml0aWFsaXplRGF0YSgpO1xuXG4gIC8vIC8vIFByaW50cyBvdXQgcHJvamVjdCBsaXN0IGludG8gY29uc29sZVxuICAvLyBkb2N1bWVudC5vbmtleWRvd24gPSAoZSkgPT4ge1xuICAvLyAgIGlmIChlLmtleSA9PSBcInBcIikge1xuICAvLyAgICAgdG9kb0RhdGEuZ2V0QWxsSW5mbygpXG4gIC8vICAgfVxuICAvLyB9XG5cbiAgY29uc3QgbmV3TGlzdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gIHRvZG9Db250YWluZXIuaWQgPSAndG9kby1jb250YWluZXInO1xuICB3cmFwcGVyLmNsYXNzTmFtZSA9ICd3cmFwcGVyJztcbiAgbWFpblNjcmVlbi5pZCA9ICdtYWluLXNjcmVlbic7XG4gIG1haW5Db250YWluZXIuaWQgPSBcIm1haW4tY29udGFpbmVyXCI7XG4gIG1haW5XaW5kb3cuaWQgPSBcIm1haW4td2luZG93XCI7XG4gIFxuICAvLyBUbyBiZSByZW1vdmVkXG4gIGxldCB0b0RvRWxlbWVudHMgPSBbJ0VhdCBmb29kJywgJ1NsZWVwJywgJ0RyaW5rIFdhdGVyJ107XG5cbiAgbWFpblNjcmVlbi5hcHBlbmRDaGlsZChidWlsZEhlYWRlcigpKTtcbiAgbWFpblNjcmVlbi5hcHBlbmRDaGlsZChidWlsZFNpZGVNZW51KHRvZG9EYXRhLmFkZE5ld1Byb2plY3QsIHRvZG9EYXRhLmdldFByb2plY3RzKSk7XG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQodG9kb0NvbnRhaW5lcik7XG4gIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQobWFpbkNvbnRhaW5lcik7XG4gIG1haW5XaW5kb3cuYXBwZW5kQ2hpbGQoYnVpbGRCdWxsZXRMaXN0KHRvRG9FbGVtZW50cykpO1xuICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKG1haW5XaW5kb3cpO1xuICBtYWluU2NyZWVuLmFwcGVuZENoaWxkKHdyYXBwZXIpO1xuXG4gIHJldHVybiBtYWluU2NyZWVuO1xufVxuXG5leHBvcnQgeyBpbml0aWFsaXplTWFpbiB9IiwiLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGNyZWF0ZXMgdGhlIHRvLWRvIGxpc3QsIGl0IGFsbG93cyBhbiBhcnJheSB0byBiZSBpbnNlcnRlZCB0b1xuICogdGhlIGZ1bmN0aW9uLiBJdCBhbGxvd3MgZm9yIGFuIG9wdGlvbmFsIHRpdGxlIGFzIHdlbGwuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IC0gUmV0dXJuXG4gKi9cblxuLy8gZnVuY3Rpb24gYnVpbGRNYWluV2luZG93KGluZm9ybWF0aW9uKSB7XG4vLyAgICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuLy8gICAgIGNvbnN0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuLy8gICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbi8vICAgICBjb25zdCBtYWluV2luZG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbi8vICAgICByZXR1cm5cbi8vIH1cblxuZnVuY3Rpb24gdXBkYXRlUHJvamVjdERpc3BsYXkoKSB7XG4gICAgcmV0dXJuXG59XG5cbmZ1bmN0aW9uIGJ1aWxkVG9kb0xpc3QobGlzdEJ1bGxldHMpIHtcbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbGlzdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBjb25zdCB0b2RvTGlzdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBwcm9qZWN0Q29udGFpbmVyLmNsYXNzTmFtZSA9ICdwcm9qZWN0LWluZm8tY29udGFpbmVyJ1xuICAgIHRvZG9MaXN0RGl2LmNsYXNzTmFtZSA9IFwiYnVsbGV0TGlzdFwiXG5cbiAgICBsaXN0VGl0bGUuaW5uZXJUZXh0ID0gJ0ZpcnN0IHRvLWRvIGxpc3QnXG5cbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGxpc3RCdWxsZXRzLmxlbmd0aDsgeCsrKSB7XG4gICAgICAgIGxldCB0b2RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbGV0IHRvZG9Gcm9udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGxldCBmaW5pc2hCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBsZXQgdG9kb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGxldCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gICAgICAgIHRvZG9Gcm9udC5jbGFzc05hbWUgPSBcInRvZG8tZnJvbnRcIjtcbiAgICAgICAgdG9kb0Rpdi5jbGFzc05hbWUgPSBcInRvZG8tZGl2XCI7XG4gICAgICAgIGRlbGV0ZUJ0bi5jbGFzc05hbWUgPSBcInRvZG8tZGVsZXRlXCI7XG4gICAgICAgIHRvZG9UZXh0LmlubmVyVGV4dCA9IGxpc3RCdWxsZXRzW3hdO1xuXG4gICAgICAgIHRvZG9Gcm9udC5hcHBlbmRDaGlsZChmaW5pc2hCb3gpO1xuICAgICAgICB0b2RvRnJvbnQuYXBwZW5kQ2hpbGQodG9kb1RleHQpO1xuICAgICAgICB0b2RvRGl2LmFwcGVuZENoaWxkKHRvZG9Gcm9udCk7XG4gICAgICAgIHRvZG9EaXYuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcbiAgICAgICAgdG9kb0xpc3REaXYuYXBwZW5kQ2hpbGQodG9kb0Rpdik7XG4gICAgfVxuXG4gICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0VGl0bGUpO1xuICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0xpc3REaXYpO1xuXG4gICAgcmV0dXJuIHByb2plY3RDb250YWluZXI7XG59XG5cbmV4cG9ydCB7IGJ1aWxkVG9kb0xpc3QgYXMgYnVpbGRCdWxsZXRMaXN0IH07IiwiZnVuY3Rpb24gYnVpbGRTaWRlTWVudShhZGRmdW5jdGlvbiwgcHJvamVjdHNGdW5jdCkge1xuICBjb25zdCBzaWRlTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsZXQgYWRkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGV0IGFkZFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGxldCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIFxuICBhZGREaXYuY2xhc3NOYW1lID0gXCJzaWRlLWFkZC1kaXZcIjtcbiAgYWRkVGV4dC5pbm5lclRleHQgPSBcIkFkZCBQcm9qZWN0XCI7XG4gIGFkZERpdi5hcHBlbmRDaGlsZChhZGRUZXh0KTtcblxuICBwcm9qZWN0TGlzdC5jbGFzc0xpc3QgPSBcInByb2plY3QtY29udGFpbmVyXCI7XG4gIFxuICBsZXQgYWRkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYWRkQnRuLmNsYXNzTmFtZSA9IFwiYWRkLXByb2plY3QtYnRuXCI7XG4gIGFkZERpdi5hcHBlbmRDaGlsZChhZGRCdG4pO1xuXG4gIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGFkZGZ1bmN0aW9uKCk7XG4gICAgdXBkYXRlU2lkZU1lbnUocHJvamVjdHNGdW5jdCgpKTtcbiAgfSlcblxuICBwcm9qZWN0TGlzdC5pbm5lckhUTUwgPSBnZW5lcmF0ZVByb2plY3RFbGVtZW50cyhwcm9qZWN0c0Z1bmN0KCkpXG5cbiAgc2lkZU1lbnUuaWQgPSBcInNpZGUtbWVudVwiO1xuICBzaWRlTWVudS5hcHBlbmRDaGlsZChhZGREaXYpO1xuICBzaWRlTWVudS5hcHBlbmRDaGlsZChwcm9qZWN0TGlzdCk7XG4gIFxuICByZXR1cm4gc2lkZU1lbnU7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlUHJvamVjdEVsZW1lbnRzKGluZm9ybWF0aW9uKSB7XG4gIGxldCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBmb3IgKGxldCB4ID0gMDsgeCA8IGluZm9ybWF0aW9uLmxlbmd0aDsgeCsrKSB7XG4gICAgbGV0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxldCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBsZXQgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICAgIHByb2plY3REaXYuc2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiLCB4KTtcblxuICAgIHByb2plY3REaXYuY2xhc3NOYW1lID0gXCJzaWRlLXByb2plY3QtZGl2XCI7XG4gICAgZGVsZXRlQnV0dG9uLmNsYXNzTmFtZSA9IFwiZGVsZXRlLWJ0blwiO1xuICAgIHByb2plY3ROYW1lLmlubmVyVGV4dCA9IGluZm9ybWF0aW9uW3hdO1xuXG4gICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBkZWxldGVQcm9qZWN0KGluZm9ybWF0aW9uW3hdKTtcbiAgICB9KVxuXG4gICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XG4gICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdERpdik7XG4gIH1cblxuICByZXR1cm4gcHJvamVjdENvbnRhaW5lci5pbm5lckhUTUw7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVNpZGVNZW51KHByb2plY3RBcnJheSkge1xuICBsZXQgcHJvamVjdENvbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtY29udGFpbmVyXCIpXG4gIFxuICBwcm9qZWN0Q29udC5pbm5lckhUTUwgPSBnZW5lcmF0ZVByb2plY3RFbGVtZW50cyhwcm9qZWN0QXJyYXkpXG59XG5cbmZ1bmN0aW9uIGVkaXRQcm9qZWN0VGl0bGUoKSB7XG4gIHJldHVyblxufVxuXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0KGluZm8pIHtcbiAgY29uc29sZS5sb2coaW5mbylcbn1cblxuZXhwb3J0IHsgYnVpbGRTaWRlTWVudSwgdXBkYXRlU2lkZU1lbnUsIGdlbmVyYXRlUHJvamVjdEVsZW1lbnRzIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBpbml0aWFsaXplTWFpbiB9IGZyb20gJy4vZnVuY3Rpb25zL2luaXRpYWxpemUtc2l0ZSc7XG5pbXBvcnQgeyBidWlsZEhlYWRlciB9IGZyb20gJy4vZnVuY3Rpb25zL2hlYWRlcic7XG5pbXBvcnQgeyB1cGRhdGVTaWRlTWVudSB9IGZyb20gJy4vZnVuY3Rpb25zL3NpZGUtbWVudSc7XG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cbmJvZHkuYXBwZW5kQ2hpbGQoaW5pdGlhbGl6ZU1haW4oKSk7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==