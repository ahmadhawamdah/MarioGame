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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/img/background.png":
/*!********************************!*\
  !*** ./src/img/background.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "072d51bcc9c09311d4c2a6708b05bddc.png");

/***/ }),

/***/ "./src/img/flag.png":
/*!**************************!*\
  !*** ./src/img/flag.png ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0aa52d04c0bbacb9303b2c4159faa432.png");

/***/ }),

/***/ "./src/img/hills.png":
/*!***************************!*\
  !*** ./src/img/hills.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "cfffe4c371f5e11d372b398a87c51dd0.png");

/***/ }),

/***/ "./src/img/platform.png":
/*!******************************!*\
  !*** ./src/img/platform.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ffab39d3487de561be1a081fcfb3806d.png");

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_platform_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/platform.png */ "./src/img/platform.png");
/* harmony import */ var _img_hills_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/hills.png */ "./src/img/hills.png");
/* harmony import */ var _img_background_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/background.png */ "./src/img/background.png");
/* harmony import */ var _img_flag_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/flag.png */ "./src/img/flag.png");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }





var canvas = document.querySelector('canvas');
canvas.width = 1024;
canvas.height = 576;
var grav = 0.4;
var offset = 0;
var can = canvas.getContext('2d');

var platform = /*#__PURE__*/function () {
  function platform(_ref) {
    var x = _ref.x,
        y = _ref.y,
        land = _ref.land;

    _classCallCheck(this, platform);

    this.coordinates = {
      x: x,
      y: y
    };
    this.land = land;
    this.w = land.width;
    this.h = land.height;
  }

  _createClass(platform, [{
    key: "display",
    value: function display() {
      // can.fillStyle = "blue"
      can.drawImage(this.land, this.coordinates.x, this.coordinates.y);
    }
  }]);

  return platform;
}();

var Decorations = /*#__PURE__*/function () {
  function Decorations(_ref2) {
    var x = _ref2.x,
        y = _ref2.y,
        hill = _ref2.hill;

    _classCallCheck(this, Decorations);

    this.coordinates = {
      x: x,
      y: y
    };
    this.hill = hill;
    this.w = _img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"].width;
    this.h = _img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"].height;
  }

  _createClass(Decorations, [{
    key: "display",
    value: function display() {
      // can.fillStyle = "blue"
      can.drawImage(this.hill, this.coordinates.x, this.coordinates.y);
    }
  }]);

  return Decorations;
}();

var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);

    this.movement = 10;
    this.coordinates = {
      x: 100,
      y: 100
    };
    this.w = 30;
    this.h = 30;
    this.gravity = {
      x: 0,
      y: 0
    };
  } // draw the player on the screen


  _createClass(Player, [{
    key: "display",
    value: function display() {
      can.fillStyle = "red";
      can.fillRect(this.coordinates.x, this.coordinates.y, this.h, this.w);
    } // alter player properties

  }, {
    key: "update",
    value: function update() {
      this.display();
      this.coordinates.y = this.coordinates.y + this.gravity.y;
      this.coordinates.x = this.coordinates.x + this.gravity.x;
      var stop = this.coordinates.y + this.h + this.gravity.y;

      if (stop <= canvas.height) {
        this.gravity.y = this.gravity.y + grav;
      }
    }
  }]);

  return Player;
}();

function createImage(imgSrc) {
  var image = new Image();
  image.src = imgSrc;
  return image;
}

var player = new Player(); // const platforms = new platforms()

var platforms = [new platform({
  x: 0,
  y: 470,
  land: createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"])
}), new platform({
  x: createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]).width,
  y: 470,
  land: createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"])
}), new platform({
  x: createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]).width * 2 + 100,
  y: 470,
  land: createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"])
}), new platform({
  x: createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]).width * 3 + 300,
  y: 470,
  land: createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"])
}), new platform({
  x: createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]).width * 4 + 600,
  y: 470,
  land: createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"])
})];
var decorations = [new Decorations({
  x: 0,
  y: 0,
  hill: createImage(_img_background_png__WEBPACK_IMPORTED_MODULE_2__["default"])
}), new Decorations({
  x: 0,
  y: 0,
  hill: createImage(_img_hills_png__WEBPACK_IMPORTED_MODULE_1__["default"])
}), new Decorations({
  x: 4500,
  y: 320,
  hill: createImage(_img_flag_png__WEBPACK_IMPORTED_MODULE_3__["default"])
})]; // object to monitor which keys are pressed

var keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  }
}; // player.update()

function animate() {
  requestAnimationFrame(animate); // clear canvas to maintain the player's shaper

  can.fillStyle = "white";
  can.fillRect(0, 0, canvas.width, canvas.height);
  decorations.forEach(function (decoration) {
    decoration.display();
  });
  platforms.forEach(function (platform) {
    platform.display();
  });
  player.update();

  if (keys.right.pressed && player.coordinates.x < 400) {
    player.gravity.x = player.movement;
  } else if (keys.left.pressed && player.coordinates.x > 200) {
    player.gravity.x = -player.movement;
  } else {
    player.gravity.x = 0;

    if (keys.right.pressed) {
      offset += player.movement;
      platforms.forEach(function (platform) {
        platform.display();
        platform.coordinates.x -= player.movement * .66;
      });
      decorations.forEach(function (decoration) {
        decoration.coordinates.x -= player.movement;
      });
    } else if (keys.left.pressed && offset > 0) {
      offset -= player.movement;
      platforms.forEach(function (platform) {
        platform.display();
        platform.coordinates.x += player.movement;
      });
      decorations.forEach(function (decoration) {
        decoration.coordinates.x += player.movement * .66;
      });
    }

    if (offset > 4200) {
      window.alert("You Won");
    }

    if (player.coordinates.y > canvas.height) {
      // window.alert("You Lost");
      window.location.reload();
    }
  }

  platforms.forEach(function (platform) {
    //rectangular collision detection
    // bottom of the player + its heigh less than the y coordinates of the platforms
    if ( // fall when underneath the paltform
    player.coordinates.y + player.h <= platform.coordinates.y // fall from above the paltform
    && player.coordinates.y + player.h + player.gravity.y >= platform.coordinates.y // fall from the left side
    && player.coordinates.x + player.w >= platform.coordinates.x // fall from the right side
    && player.coordinates.x <= platform.coordinates.x + platform.w) {
      player.gravity.y = 0;
    }
  });
}

animate(); // whenever u press a button, fire a function

window.addEventListener("keydown", function (_ref3) {
  var keyCode = _ref3.keyCode;

  if (keyCode === 65) {
    // left
    player.gravity.x = player.gravity.x - 2;
    keys.left.pressed = true;
  }

  if (keyCode === 68) {
    // right
    player.gravity.x = player.gravity.x + 2;
    keys.right.pressed = true;
  }

  if (keyCode === 87) // up
    player.gravity.y = player.gravity.y - 15;
});
window.addEventListener("keyup", function (_ref4) {
  var keyCode = _ref4.keyCode;

  if (keyCode === 65) {
    // left
    player.gravity.x = 0;
    keys.left.pressed = false;
  }

  if (keyCode === 68) {
    // right
    player.gravity.x = 0;
    keys.right.pressed = false;
  }

  if (keyCode === 87) // up
    player.gravity.y = 0;
});

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map