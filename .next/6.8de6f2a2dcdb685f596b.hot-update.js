webpackHotUpdate(6,{

/***/ "./components/Home/HomeNavbar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
var _jsxFileName = 'G:\\next-test\\components\\Home\\HomeNavbar.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

  enterModule && enterModule(module);
})();

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
              { className: 'right', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 38
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'li',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                  }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
                  { href: {
                      pathname: '/home/' + this.props.userId
                    },
                    prefetch: true, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 39
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'a',
                    { className: 'black-text', id: 'home', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 44
                      }
                    },
                    this.props.userName
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'li',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                  }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
                  { href: '#', prefetch: true, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 45
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'a',
                    { id: 'search', className: 'black-text', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 45
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
                    lineNumber: 46
                  }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
                  { href: '#', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 46
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'a',
                    { id: 'login', className: 'black-text dropdown-button', 'data-activates': 'dropdown1', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 46
                      }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'ion-ios-keypad', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 46
                      }
                    })
                  )
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'ul',
              { id: 'dropdown1', className: 'dropdown-content', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 49
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'li',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                  }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
                  { href: '#', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 50
                    }
                  },
                  'Privacy'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li', { className: 'divider', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 51
                }
              }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'li',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                  }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
                  { href: '/login', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 52
                    }
                  },
                  'Log out'
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
      $(document).ready(function () {
        $(".dropdown-button").dropdown();
      });
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return Navbar;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var _default = Navbar;


/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Navbar, 'Navbar', 'G:/next-test/components/Home/HomeNavbar.js');
  reactHotLoader.register(_default, 'default', 'G:/next-test/components/Home/HomeNavbar.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=6.8de6f2a2dcdb685f596b.hot-update.js.map