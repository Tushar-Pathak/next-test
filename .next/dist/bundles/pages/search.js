module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/CardRender.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
var _jsxFileName = "G:\\next-test\\components\\CardRender.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var cardRender = function (_React$Component) {
  _inherits(cardRender, _React$Component);

  function cardRender() {
    _classCallCheck(this, cardRender);

    return _possibleConstructorReturn(this, (cardRender.__proto__ || Object.getPrototypeOf(cardRender)).apply(this, arguments));
  }

  _createClass(cardRender, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { className: "col s6", __source: {
            fileName: _jsxFileName,
            lineNumber: 6
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "h6",
          { className: "header", __source: {
              fileName: _jsxFileName,
              lineNumber: 7
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
            { href: "#", __source: {
                fileName: _jsxFileName,
                lineNumber: 7
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "a",
              { className: "chip", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 7
                }
              },
              this.props.card.author
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "div",
          { className: "card horizontal", __source: {
              fileName: _jsxFileName,
              lineNumber: 8
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "card-stacked", __source: {
                fileName: _jsxFileName,
                lineNumber: 9
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "div",
              { className: "card-content", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 10
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "span",
                { className: "card-title black-text", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 11
                  }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  "strong",
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 11
                    }
                  },
                  this.props.card.blog.toUpperCase()
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "p",
                { className: "flow-text", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 12
                  }
                },
                "Some content about it...."
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "p",
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 13
                  }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  "strong",
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 13
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "ion-ios-heart-outline", __source: {
                      fileName: _jsxFileName,
                      lineNumber: 13
                    }
                  }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "span",
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 13
                      }
                    },
                    " ",
                    this.props.card.likes
                  )
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "div",
              { className: "card-action", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 15
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "button",
                { className: "btn red white-text z-depth-2", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 16
                  }
                },
                "Read More"
              )
            )
          )
        )
      );
    }
  }]);

  return cardRender;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (cardRender);

/***/ }),

/***/ "./components/Footer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "G:\\next-test\\components\\Footer.js";


/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    "div",
    {
      className: "jsx-2448307885" + " " + "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      "div",
      {
        className: "jsx-2448307885" + " " + "footer #424242 grey darken-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 3
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "span",
        {
          className: "jsx-2448307885" + " " + "white-text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 4
          }
        },
        "Share us On:"
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "button",
        {
          className: "jsx-2448307885" + " " + "btn-floating waves-effect waves-light #0091ea light-blue accent-4",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 5
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
          className: "jsx-2448307885" + " " + "ion-social-facebook",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 5
          }
        })
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "button",
        {
          className: "jsx-2448307885" + " " + "btn-floating #f44336 red",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 6
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
          className: "jsx-2448307885" + " " + "ion-social-googleplus",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 6
          }
        })
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "button",
        {
          className: "jsx-2448307885" + " " + "btn-floating",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 7
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
          className: "jsx-2448307885" + " " + "ion-social-twitter",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 7
          }
        })
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "button",
        {
          className: "jsx-2448307885" + " " + "btn-floating #ffecb3 amber lighten-4",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 8
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
          className: "jsx-2448307885" + " " + "ion-social-instagram black-text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 8
          }
        })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: "2448307885",
      css: "button.jsx-2448307885{margin:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEZvb3Rlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTZSxBQUdtQixZQUNiIiwiZmlsZSI6ImNvbXBvbmVudHNcXEZvb3Rlci5qcyIsInNvdXJjZVJvb3QiOiJHOi9uZXh0LXRlc3QiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoKSA9PiBcclxuIDxkaXYgY2xhc3NOYW1lID0gXCJjb250YWluZXJcIj5cclxuICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXIgIzQyNDI0MiBncmV5IGRhcmtlbi0zXCI+XHJcbiAgICA8c3BhbiBjbGFzc05hbWU9XCJ3aGl0ZS10ZXh0XCI+U2hhcmUgdXMgT246PC9zcGFuPlxyXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tZmxvYXRpbmcgd2F2ZXMtZWZmZWN0IHdhdmVzLWxpZ2h0ICMwMDkxZWEgbGlnaHQtYmx1ZSBhY2NlbnQtNFwiPjxpIGNsYXNzTmFtZSA9IFwiaW9uLXNvY2lhbC1mYWNlYm9va1wiPjwvaT48L2J1dHRvbj5cclxuICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLWZsb2F0aW5nICNmNDQzMzYgcmVkXCI+PGkgY2xhc3NOYW1lID0gXCJpb24tc29jaWFsLWdvb2dsZXBsdXNcIj48L2k+PC9idXR0b24+XHJcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1mbG9hdGluZ1wiPjxpIGNsYXNzTmFtZSA9IFwiaW9uLXNvY2lhbC10d2l0dGVyXCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tZmxvYXRpbmcgI2ZmZWNiMyBhbWJlciBsaWdodGVuLTRcIj48aSBjbGFzc05hbWUgPSBcImlvbi1zb2NpYWwtaW5zdGFncmFtIGJsYWNrLXRleHRcIj48L2k+PC9idXR0b24+ICAgIFxyXG4gICA8L2Rpdj5cclxuICAgPHN0eWxlIGpzeD57YFxyXG4gICAgIGJ1dHRvbntcclxuICAgICAgIG1hcmdpbjoxMHB4O1xyXG4gICAgIH1cclxuICAgYH08L3N0eWxlPlxyXG4gPC9kaXY+Il19 */\n/*@ sourceURL=components\\Footer.js */"
    })
  );
});

/***/ }),

/***/ "./components/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Navbar__ = __webpack_require__("./components/Navbar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Footer__ = __webpack_require__("./components/Footer.js");
var _jsxFileName = 'G:\\next-test\\components\\Layout.js';





/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var children = _ref.children,
      _ref$title = _ref.title,
      title = _ref$title === undefined ? "Nextjs Blog App." : _ref$title,
      _ref$page = _ref.page,
      page = _ref$page === undefined ? 'home' : _ref$page;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_next_head___default.a,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'title',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 8
          }
        },
        ' ',
        title,
        ' '
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { charSet: 'utf-8', __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { httpEquiv: 'X-UA-Compatible', content: 'IE=edge', __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'stylesheet', href: '/static/materialize/css/materialize.min.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'stylesheet', href: '/static/ionicons/css/ionicons.min.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'stylesheet', href: '/static/style.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      })
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { id: 'wrapper', __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Navbar__["a" /* default */], { page: page, __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'main',
        { className: 'container', __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          }
        },
        children
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Footer__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      })
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { src: '/static/jquery.js', __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { src: '/static/materialize/js/materialize.min.js', __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { src: '/static/init.js', __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      }
    })
  );
});

// export default Layout;

/***/ }),

/***/ "./components/Navbar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
var _jsxFileName = 'G:\\next-test\\components\\Navbar.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Navbar = function (_React$Component) {
  _inherits(Navbar, _React$Component);

  function Navbar() {
    _classCallCheck(this, Navbar);

    return _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).apply(this, arguments));
  }

  _createClass(Navbar, [{
    key: 'ToggleNav',


    //Toggle Active Elements.
    value: function ToggleNav() {
      var pageName = this.props.page;
      $('li').addClass('active');
      console.log(pageName);
      $('li').each(function () {
        if ($(this).attr('id') !== pageName) $(this).removeClass('active');else {
          console.log('as');
          $(this).addClass('active');
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'container', __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'nav',
          { className: 'white', __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'nav-wrapper', __source: {
                fileName: _jsxFileName,
                lineNumber: 25
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
              { href: '#', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 26
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'a',
                { className: 'brand-logo black-text', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                  }
                },
                'BloggSpot'
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
              { href: '#', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 28
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'a',
                { 'data-activates': 'mobile', className: 'button-collapse', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                  }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'ion-navicon black-text', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                  }
                })
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'ul',
              { className: 'side-nav', id: 'mobile', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 30
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'li',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                  }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'secondary-content ion-close-circled', 'data-dismiss': true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                  }
                })
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li', { className: 'clearfix', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 32
                }
              }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'li',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                  }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
                  { href: '/', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 33
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'a',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 33
                      }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'ion-home', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 33
                      }
                    }),
                    'Home'
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'li',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                  }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
                  { href: '/search', prefetch: true, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 34
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'a',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 34
                      }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'ion-search', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 34
                      }
                    }),
                    'Search'
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'li',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                  }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
                  { href: '/login', prefetch: true, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 35
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'a',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 35
                      }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'ion-person', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 35
                      }
                    }),
                    'Login'
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li', { className: 'divider', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 36
                }
              })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'ul',
              { className: 'right hide-on-med-and-down', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 39
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'li',
                { id: 'home', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                  }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
                  { href: '/', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 40
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'a',
                    { id: 'home', className: 'black-text', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 40
                      }
                    },
                    'Home'
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'li',
                { id: 'search', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                  }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
                  { href: '/search', prefetch: true, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 41
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'a',
                    { id: 'search', className: 'black-text', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 41
                      }
                    },
                    'Search'
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'li',
                { id: 'login', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                  }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
                  { href: '/login', prefetch: true, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 42
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'a',
                    { id: 'login', className: 'black-text', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 42
                      }
                    },
                    'Login'
                  )
                )
              )
            )
          )
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      //$('li a').on('click', this.ToggleNav.bind(this));
    }
  }]);

  return Navbar;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Navbar);

/***/ }),

/***/ "./pages/search.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_CardRender__ = __webpack_require__("./components/CardRender.js");
var _jsxFileName = 'G:\\next-test\\pages\\search.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();




function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


var axios = __webpack_require__("axios");


var Search = function (_React$Component) {
  _inherits(Search, _React$Component);

  function Search() {
    _classCallCheck(this, Search);

    var _this = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this));

    _this.state = {
      blogger: [{
        blog: 'javascript',
        author: 'David Walsh',
        likes: 24
      }, {
        blog: 'python',
        author: 'Corey Schafer',
        likes: 200
      }, {
        blog: 'css',
        author: 'Traversy Media',
        likes: 200
      }, {
        blog: 'java',
        author: 'Mr Natraj',
        likes: 400
      }]
    };
    return _this;
  }

  _createClass(Search, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      axios.get('/api/search').then(function (data) {
        console.log(data.data);
      }).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: 'render',
    value: function render() {

      var cardContent = this.state.blogger;
      cardContent = cardContent.map(function (content, index) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_CardRender__["a" /* default */], { card: content, key: index, __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          }
        });
      });

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2__components_Layout__["a" /* default */],
        { title: 'Search:BloggSpot', page: 'search', __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          {
            className: 'jsx-2255792629',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 53
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            {
              className: 'jsx-2255792629' + ' ' + 'row',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 54
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'div',
              {
                className: 'jsx-2255792629' + ' ' + 'input-field col s6 offset-s2',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 55
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('i', { 'data-position': 'bottom', 'data-delay': '50', 'data-tooltip': 'Filter Search', className: 'jsx-2255792629' + ' ' + 'prefix ion-android-options tooltipped',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 56
                }
              }),
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'select',
                { defaultValue: 'Popular', className: 'jsx-2255792629',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'option',
                  { value: 'Author Name', className: 'jsx-2255792629',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 58
                    }
                  },
                  'Author Name'
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'option',
                  { value: 'Blog Name', className: 'jsx-2255792629',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 59
                    }
                  },
                  'Blog Name'
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'option',
                  { value: 'Popular', className: 'jsx-2255792629',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 60
                    }
                  },
                  'Popular'
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'form',
            { action: '', className: 'jsx-2255792629' + ' ' + 'row',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 64
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'div',
              {
                className: 'jsx-2255792629' + ' ' + 'input-field col s7 offset-s2',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 65
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('i', { 'data-position': 'bottom', 'data-delay': '50', 'data-tooltip': 'search', id: 'search', className: 'jsx-2255792629' + ' ' + 'prefix ion-android-search tooltipped',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 66
                }
              }),
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', { type: 'text', name: '', id: '', placeholder: 'Type here....', className: 'jsx-2255792629',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 67
                }
              })
            )
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            {
              className: 'jsx-2255792629' + ' ' + 'row',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 70
              }
            },
            cardContent
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '2255792629',
          css: '#search.jsx-2255792629{cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxzZWFyY2guanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEVVLEFBRzRCLGVBQ2hCIiwiZmlsZSI6InBhZ2VzXFxzZWFyY2guanMiLCJzb3VyY2VSb290IjoiRzovbmV4dC10ZXN0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKTtcclxuaW1wb3J0IENhcmRSZW5kZXIgZnJvbSAnLi4vY29tcG9uZW50cy9DYXJkUmVuZGVyJztcclxuXHJcbmNsYXNzIFNlYXJjaCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5zdGF0ZSA9e1xyXG4gICAgIGJsb2dnZXI6IFtcclxuICAgICAgIHtcclxuICAgICAgICBibG9nOidqYXZhc2NyaXB0JyxcclxuICAgICAgICBhdXRob3I6J0RhdmlkIFdhbHNoJyxcclxuICAgICAgICBsaWtlczoyNFxyXG4gICAgICAgfSxcclxuICAgICAgIHtcclxuICAgICAgICAgYmxvZzoncHl0aG9uJyxcclxuICAgICAgICAgYXV0aG9yOidDb3JleSBTY2hhZmVyJyxcclxuICAgICAgICAgbGlrZXM6MjAwXHJcbiAgICAgICB9LFxyXG4gICAgICAge1xyXG4gICAgICAgICBibG9nOidjc3MnLFxyXG4gICAgICAgICBhdXRob3I6J1RyYXZlcnN5IE1lZGlhJyxcclxuICAgICAgICAgbGlrZXM6MjAwXHJcbiAgICAgICB9LFxyXG4gICAgICAge1xyXG4gICAgICAgICBibG9nOidqYXZhJyxcclxuICAgICAgICAgYXV0aG9yOidNciBOYXRyYWonLFxyXG4gICAgICAgICBsaWtlczo0MDBcclxuICAgICAgIH1cclxuICAgICAgXVxyXG4gICB9XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XHJcbiAgICBheGlvc1xyXG4gICAgIC5nZXQoJy9hcGkvc2VhcmNoJylcclxuICAgICAudGhlbigoZGF0YSk9PntcclxuICAgICAgIGNvbnNvbGUubG9nKGRhdGEuZGF0YSk7XHJcbiAgICAgfSlcclxuICAgICAuY2F0Y2goKGVycik9PntcclxuICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgfSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKXtcclxuXHJcbiAgICBsZXQgY2FyZENvbnRlbnQgPSB0aGlzLnN0YXRlLmJsb2dnZXI7XHJcbiAgICBjYXJkQ29udGVudCA9IGNhcmRDb250ZW50Lm1hcCggKGNvbnRlbnQsIGluZGV4KSA9PiA8Q2FyZFJlbmRlciBjYXJkPXtjb250ZW50fSBrZXkgPSB7aW5kZXh9Lz4pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxMYXlvdXQgdGl0bGUgPSB7J1NlYXJjaDpCbG9nZ1Nwb3QnfSBwYWdlID0geydzZWFyY2gnfT5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHM2IG9mZnNldC1zMlwiPlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJwcmVmaXggaW9uLWFuZHJvaWQtb3B0aW9ucyB0b29sdGlwcGVkXCIgZGF0YS1wb3NpdGlvbj1cImJvdHRvbVwiIGRhdGEtZGVsYXk9XCI1MFwiIGRhdGEtdG9vbHRpcD1cIkZpbHRlciBTZWFyY2hcIj48L2k+XHJcbiAgICAgICAgICAgIDxzZWxlY3QgZGVmYXVsdFZhbHVlPVwiUG9wdWxhclwiPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJBdXRob3IgTmFtZVwiPkF1dGhvciBOYW1lPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkJsb2cgTmFtZVwiPkJsb2cgTmFtZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJQb3B1bGFyXCI+UG9wdWxhcjwvb3B0aW9uPiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgPGZvcm0gYWN0aW9uPVwiXCIgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczcgb2Zmc2V0LXMyXCI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInByZWZpeCBpb24tYW5kcm9pZC1zZWFyY2ggdG9vbHRpcHBlZFwiIGRhdGEtcG9zaXRpb249XCJib3R0b21cIiBkYXRhLWRlbGF5PVwiNTBcIiBkYXRhLXRvb2x0aXA9XCJzZWFyY2hcIiBpZD1cInNlYXJjaFwiPjwvaT5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIlwiIGlkPVwiXCIgcGxhY2Vob2xkZXI9XCJUeXBlIGhlcmUuLi4uXCIvPlxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICB7Y2FyZENvbnRlbnR9XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e1xyXG4gICAgICAgICAgYFxyXG4gICAgICAgICAgICNzZWFyY2h7XHJcbiAgICAgICAgICAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgICBgXHJcbiAgICAgICAgfTwvc3R5bGU+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxuICB9XHJcbiAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAkKFwic2VsZWN0XCIpLm1hdGVyaWFsX3NlbGVjdCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2g7Il19 */\n/*@ sourceURL=pages\\search.js */'
        })
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      $(document).ready(function () {
        $("select").material_select();
      });
    }
  }]);

  return Search;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/search.js");


/***/ }),

/***/ "axios":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=search.js.map