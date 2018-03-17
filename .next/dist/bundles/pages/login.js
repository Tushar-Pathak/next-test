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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./components/login.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
var _jsxFileName = "G:\\next-test\\components\\login.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Login = function (_React$Component) {
  _inherits(Login, _React$Component);

  function Login() {
    _classCallCheck(this, Login);

    return _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).apply(this, arguments));
  }

  _createClass(Login, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { className: "row", __source: {
            fileName: _jsxFileName,
            lineNumber: 6
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "form",
          { action: "#", className: "cols12", onSubmit: this.submitHandler.bind(this), __source: {
              fileName: _jsxFileName,
              lineNumber: 7
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "row", __source: {
                fileName: _jsxFileName,
                lineNumber: 8
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "div",
              { className: "input-field col s6 offset-s3", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 9
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "ion-ios-person prefix", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 10
                }
              }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "text", className: "validate", placeholder: "UserName", ref: "userName", autoFocus: true, required: true, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 11
                }
              })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "div",
              { className: "input-field col s6 offset-s3", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 13
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "prefix ion-android-create", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 14
                }
              }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "password", className: "validate", placeholder: "Password", ref: "password", required: true, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 15
                }
              })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "div",
              { className: "input-field col s6 offset-s5", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 17
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "button",
                { type: "submit", className: "btn btn-sm waves-effect waves-light", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 18
                  }
                },
                "login ",
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "ion-android-send", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 18
                  }
                })
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "input-field col s6 offset-s5", __source: {
                fileName: _jsxFileName,
                lineNumber: 21
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "span",
              { className: "chip #c8e6c9 green lighten-4", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 22
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "ion-ios-help", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 22
                }
              }),
              " ",
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
                { href: "#", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 22
                  }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  "a",
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 22
                    }
                  },
                  " Forget Password"
                )
              )
            )
          )
        )
      );
    }

    //Handle Submit Events.

  }, {
    key: "submitHandler",
    value: function submitHandler(e) {
      e.preventDefault();
      if (this.refs.userName.value === '') {
        this.refs.userName.focus();
      } else if (this.refs.password.value === '') {
        this.refs.password.focus();
      }
    }
  }]);

  return Login;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Login);

/***/ }),

/***/ "./components/signup.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "G:\\next-test\\components\\signup.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Signup = function (_React$Component) {
  _inherits(Signup, _React$Component);

  function Signup() {
    _classCallCheck(this, Signup);

    return _possibleConstructorReturn(this, (Signup.__proto__ || Object.getPrototypeOf(Signup)).apply(this, arguments));
  }

  _createClass(Signup, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { className: "row", __source: {
            fileName: _jsxFileName,
            lineNumber: 4
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "form",
          { action: "", className: "col s12", onSubmit: this.submitHandle.bind(this), __source: {
              fileName: _jsxFileName,
              lineNumber: 5
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "input-field col s6", __source: {
                fileName: _jsxFileName,
                lineNumber: 6
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "ion-person prefix", __source: {
                fileName: _jsxFileName,
                lineNumber: 7
              }
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "text", className: "validate", placeholder: "First Name", ref: "first_name", autoFocus: true, required: true, __source: {
                fileName: _jsxFileName,
                lineNumber: 8
              }
            })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "input-field col s6", __source: {
                fileName: _jsxFileName,
                lineNumber: 10
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "ion-person prefix", __source: {
                fileName: _jsxFileName,
                lineNumber: 11
              }
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "text", className: "validate", placeholder: "Last Name", ref: "last_name", required: true, __source: {
                fileName: _jsxFileName,
                lineNumber: 12
              }
            })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "input-field col s12", __source: {
                fileName: _jsxFileName,
                lineNumber: 14
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "prefix ion-person-add", __source: {
                fileName: _jsxFileName,
                lineNumber: 15
              }
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "text", className: "validate", ref: "user_name", placeholder: "Username that you like...", required: true, __source: {
                fileName: _jsxFileName,
                lineNumber: 16
              }
            })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "input-field col s12", __source: {
                fileName: _jsxFileName,
                lineNumber: 18
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "prefix ion-lock-combination", __source: {
                fileName: _jsxFileName,
                lineNumber: 19
              }
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "password", className: "validate", ref: "password", placeholder: "Password", required: true, __source: {
                fileName: _jsxFileName,
                lineNumber: 20
              }
            })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "input-field col s12", __source: {
                fileName: _jsxFileName,
                lineNumber: 22
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "prefix ion-locked", __source: {
                fileName: _jsxFileName,
                lineNumber: 23
              }
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "password", className: "validate", ref: "repassword", placeholder: "Retype your Password", onKeyUp: this.handlekeyEvent.bind(this), required: true, __source: {
                fileName: _jsxFileName,
                lineNumber: 24
              }
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", { className: "kids chip", __source: {
                fileName: _jsxFileName,
                lineNumber: 25
              }
            })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "input-field col s6 offset-s2", __source: {
                fileName: _jsxFileName,
                lineNumber: 27
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "prefix ion-person-stalker", __source: {
                fileName: _jsxFileName,
                lineNumber: 28
              }
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "select",
              { defaultValue: "Male", ref: "gender", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 29
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "option",
                { value: "Male", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                  }
                },
                "Male"
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "option",
                { value: "Female", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                  }
                },
                "Female"
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "input-field col s12", __source: {
                fileName: _jsxFileName,
                lineNumber: 34
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "prefix ion-calculator", __source: {
                fileName: _jsxFileName,
                lineNumber: 35
              }
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "text", className: "datepicker", ref: "date", required: true, __source: {
                fileName: _jsxFileName,
                lineNumber: 36
              }
            })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "input-field col s6 offset-s5", __source: {
                fileName: _jsxFileName,
                lineNumber: 38
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "button",
              { type: "submit", className: "btn", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 39
                }
              },
              "submit"
            )
          )
        )
      );
    }

    //This function will handle keyEvents for form.

  }, {
    key: "handlekeyEvent",
    value: function handlekeyEvent(e) {
      var span = $(".kids");
      if (this.refs.password.value === this.refs.repassword.value) {
        span.html('<i class="ion-checkmark-circled green"></i> Password Matched');
        setTimeout(function () {
          span.hide();
        }, 1000);
      } else {
        span.show();
        span.html('<i class="ion-information-circled red"></i> Password doesn\'t match');
      }
    }

    //This Function will handle submit events for you.

  }, {
    key: "submitHandle",
    value: function submitHandle(e) {
      e.preventDefault();
      if (this.refs.last_name.value === '') {
        this.refs.last_name.focus();
      } else if (this.refs.user_name.value === '') {
        this.refs.user_name.focus();
      } else if (this.refs.password.value === '') {
        this.refs.password.focus();
      } else if (this.refs.repassword.value === '') {
        this.refs.repassword.focus();
      } else if (this.refs.date === '') {
        this.refs.date.focus();
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      $(document).ready(function () {
        $('select').material_select();
        $('.datepicker').pickadate({
          selectMonths: true, // Creates a dropdown to control month
          selectYears: 15, // Creates a dropdown of 15 years to control year,
          today: 'Today',
          clear: 'Clear',
          close: 'Ok',
          closeOnSelect: false // Close upon selecting a date,
        });
      });
    }
  }]);

  return Signup;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Signup);

/***/ }),

/***/ "./pages/login.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_login__ = __webpack_require__("./components/login.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_signup__ = __webpack_require__("./components/signup.js");
var _jsxFileName = 'G:\\next-test\\pages\\login.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Login = function (_React$Component) {
  _inherits(Login, _React$Component);

  function Login() {
    _classCallCheck(this, Login);

    return _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).apply(this, arguments));
  }

  _createClass(Login, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1__components_Layout__["a" /* default */],
        { title: 'Login:BloggSpot', page: 'login', __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'row', __source: {
              fileName: _jsxFileName,
              lineNumber: 10
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'col s12', __source: {
                fileName: _jsxFileName,
                lineNumber: 11
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'ul',
              { className: 'tabs', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 12
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'li',
                { className: 'tab col s6', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 13
                  }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2_next_link___default.a,
                  { href: '#test1', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 13
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'a',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 13
                      }
                    },
                    'Login'
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'li',
                { className: 'tab col s6', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 14
                  }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2_next_link___default.a,
                  { href: '#test2', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 14
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'a',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 14
                      }
                    },
                    'Signup'
                  )
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { id: 'test1', className: 'col s12', __source: {
                fileName: _jsxFileName,
                lineNumber: 17
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_login__["a" /* default */], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 18
              }
            })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { id: 'test2', className: 'col s12', __source: {
                fileName: _jsxFileName,
                lineNumber: 20
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_signup__["a" /* default */], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 21
              }
            })
          )
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      $(document).ready(function () {
        $('ul.tabs').tabs();
      });
    }
  }]);

  return Login;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/login.js");


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
//# sourceMappingURL=login.js.map