/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/block.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);





/**
 *
 * Here I'm using the React Extended for Gutenberg Blocks
 *
 *
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('thrivedx-test-plugin/custom-fields-block', {
  title: 'Custom Fields Block',
  icon: 'list-view',
  category: 'design',
  attributes: {
    customText: {
      type: 'string',
      default: ''
    },
    customDate: {
      type: 'string',
      default: ''
    },
    customImage: {
      type: 'string',
      default: ''
    },
    textColor: {
      type: 'string',
      default: '#000000'
    },
    imageClass: {
      type: 'string',
      default: 'default-image-class'
    }
  },
  edit: ({
    attributes,
    setAttributes
  }) => {
    const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)();
    const {
      customText,
      customDate,
      customImage,
      textColor,
      imageClass
    } = attributes;
    const onSelectImage = media => {
      setAttributes({
        customImage: media.url
      });
    };

    // formating the date to be human reading
    function formatDate(isoDateString) {
      if (!isoDateString) return '';
      const date = new Date(isoDateString);
      const month = `${date.getMonth() + 1}`.padStart(2, '0');
      const day = `${date.getDate()}`.padStart(2, '0');
      const year = date.getFullYear();
      return `${month}-${day}-${year}`;
    }

    // The custom Fields for the data in the plugin. Added customization for image and text, chosing a border radius for image and color for text. Just as an example in how build it
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...blockProps
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "flex flex-col p-6 w-full"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
      label: "Custom Text",
      value: customText,
      onChange: value => setAttributes({
        customText: value
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mb-6"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.DatePicker, {
      currentDate: customDate,
      onChange: newDate => {
        const formattedDate = formatDate(newDate);
        setAttributes({
          customDate: formattedDate
        });
      }
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "border rounded"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUpload, {
      onSelect: onSelectImage,
      allowedTypes: ['image'],
      value: customImage,
      render: ({
        open
      }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        onClick: open
      }, "Choose Image")
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "my-6"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Custom Text Color"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, {
      color: textColor,
      onChangeComplete: newColor => setAttributes({
        textColor: newColor.hex
      }),
      disableAlpha: true
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mb-6"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
      label: "Image Class",
      value: imageClass,
      options: [{
        label: 'Default',
        value: 'default-image-class'
      }, {
        label: 'Rounded',
        value: 'rounded-image-class'
      }, {
        label: 'Circle',
        value: 'circle-image-class'
      }],
      onChange: selectedClass => setAttributes({
        imageClass: selectedClass
      })
    })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      style: {
        color: textColor
      },
      className: "text-front"
    }, "Custom Text: ", customText), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "text-front"
    }, "Custom Date: ", customDate), customImage && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: customImage,
      alt: "Custom",
      className: imageClass
    })));
  },
  save: ({
    attributes
  }) => {
    const {
      customText,
      customDate,
      customImage,
      textColor,
      imageClass
    } = attributes;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      style: {
        color: textColor
      },
      className: "text-front"
    }, "Custom Text: ", customText), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "text-front"
    }, "Custom Date: ", customDate), customImage && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: customImage,
      alt: "Custom",
      className: imageClass
    }));
  }
});
})();

/******/ })()
;
//# sourceMappingURL=block.js.map