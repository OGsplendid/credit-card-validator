/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/Validator/Validator.js":
/*!************************************!*\
  !*** ./src/Validator/Validator.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Validator; }
/* harmony export */ });
/* harmony import */ var _js_handlers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/handlers */ "./src/js/handlers.js");


class Validator {
  constructor(parentEl) {
    this.parentEl = parentEl;

    this.check = this.check.bind(this);
    this.reset = this.reset.bind(this);
  }

  static get markup() {
    return `
      <div class="wrapper">
        <div class="card-section">
          <div class="card">Visa</div>
          <div class="card">Master Card</div>
          <div class="card">American Express</div>
          <div class="card">JCB</div>
          <div class="card">Union Pay</div>
          <div class="card">МИР</div>
        </div>
        <form class="input-section">
          <input name="number" type="text" class="number"></input>
          <button type="submit" class="submit">Click to Validate</button>
        </form>
      </div>
      <span class="tooltip hidden"></span>
     `;
  }

  bindToDOM() {
    this.parentEl.innerHTML = Validator.markup;
    this.element = this.parentEl.querySelector('.wrapper');
    this.tooltip = document.querySelector('.tooltip');

    this.element.querySelector('.input-section').addEventListener('submit', this.check);
    this.element.querySelector('.number').addEventListener('input', this.reset);
  }

  check(e) {
    e.preventDefault();

    const inputValue = this.element.querySelector('.number').value.trim();
    if ((0,_js_handlers__WEBPACK_IMPORTED_MODULE_0__.checkValidity)(inputValue)) {
      this.tooltip.classList.toggle('hidden');
      this.tooltip.textContent = 'Номер карты валиден';
      this.tooltip.style.color = 'green';
      this.checkSystem(inputValue);
    } else {
      this.tooltip.classList.toggle('hidden');
      this.tooltip.textContent = 'Невалидный номер карты';
      this.tooltip.style.color = 'red';
    }
  }

  checkSystem(inputValue) {
    const system = (0,_js_handlers__WEBPACK_IMPORTED_MODULE_0__.checkPaymentSystem)(inputValue);
    const cards = this.element.querySelectorAll('.card');
    const highlighted = [...cards].find((el) => el.textContent === system);
    highlighted.classList.add('highlighted');
  }

  reset() {
    const cards = this.element.querySelectorAll('.card');
    cards.forEach((el) => el.classList.remove('highlighted'));
    const tooltip = document.querySelector('.tooltip');
    tooltip.classList.add('hidden');
  }
}


/***/ }),

/***/ "./src/js/handlers.js":
/*!****************************!*\
  !*** ./src/js/handlers.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkPaymentSystem: function() { return /* binding */ checkPaymentSystem; },
/* harmony export */   checkValidity: function() { return /* binding */ checkValidity; }
/* harmony export */ });
function checkValidity(numberString) {
  if (Number.isNaN(numberString)) {
    return false;
  }

  const numberArray = [];
  const controlArray = [];
  for (let i = 0; i < numberString.length; i += 1) {
    numberArray.push(+numberString[i]);
  }

  const controlFigure = numberArray.pop();

  if (numberArray.length % 2 !== 0) {
    for (let i = 0; i < numberArray.length; i += 2) {
      if (numberArray[i] * 2 > 9) {
        const figure = numberArray[i] * 2 - 9;
        controlArray.push(figure);
      } else {
        const figure = numberArray[i] * 2;
        controlArray.push(figure);
      }
    }
    for (let i = 1; i < numberArray.length; i += 2) {
      controlArray.push(numberArray[i]);
    }
  } else {
    for (let i = 1; i < numberArray.length; i += 2) {
      if (numberArray[i] * 2 > 9) {
        const figure = numberArray[i] * 2 - 9;
        controlArray.push(figure);
      } else {
        const figure = numberArray[i] * 2;
        controlArray.push(figure);
      }
    }
    for (let i = 0; i < numberArray.length; i += 2) {
      controlArray.push(numberArray[i]);
    }
  }
  controlArray.push(controlFigure);
  const sum = controlArray.reduce((acc, number) => acc + number);
  if (sum % 10 === 0) {
    return true;
  }
  return false;
}

function checkPaymentSystem(numberString) {
  if (numberString.startsWith('4')) {
    return 'Visa';
  }
  if (numberString.startsWith('5')) {
    return 'Master Card';
  }
  if (numberString.startsWith('6')) {
    return 'Union Pay';
  }
  if (numberString.startsWith('2')) {
    return 'МИР';
  }
  if (numberString.startsWith('34') || numberString.startsWith('35') || numberString.startsWith('36') || numberString.startsWith('37')) {
    return 'American Express';
  }
  if (numberString.startsWith('3')) {
    return 'JCB';
  }
  return 'undefined';
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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Validator_Validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Validator/Validator */ "./src/Validator/Validator.js");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/style.css */ "./src/css/style.css");



const validator = new _Validator_Validator__WEBPACK_IMPORTED_MODULE_0__["default"](document.querySelector('.container'));
validator.bindToDOM();

}();
/******/ })()
;
//# sourceMappingURL=main.js.map