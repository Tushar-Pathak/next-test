webpackHotUpdate(6,{

/***/ "./components/login.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
var _jsxFileName = 'G:\\next-test\\components\\login.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Login = function (_React$Component) {
  _inherits(Login, _React$Component);

  function Login() {
    _classCallCheck(this, Login);

    var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this));

    _this.state = {
      username: null,
      password: null
    };
    return _this;
  }

  _createClass(Login, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'row', __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'form',
          { action: '#', className: 'cols12', onSubmit: this.submitHandler.bind(this), __source: {
              fileName: _jsxFileName,
              lineNumber: 17
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'row', __source: {
                fileName: _jsxFileName,
                lineNumber: 18
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'input-field col s6 offset-s3', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 19
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                { className: 'chip red login_kids', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 20
                  }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'ion-alert-circled', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 21
                  }
                }),
                'UserName or passsword is Incorrect.'
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'input-field col s6 offset-s3', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 25
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'ion-ios-person prefix', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 26
                }
              }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', className: 'validate', placeholder: 'UserName', ref: 'userName', autoFocus: true, required: true, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 27
                }
              })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'input-field col s6 offset-s3', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 29
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'prefix ion-android-create', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 30
                }
              }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'password', className: 'validate', placeholder: 'Password', ref: 'password', required: true, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 31
                }
              })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'input-field col s6 offset-s5', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 33
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'button',
                { type: 'submit', className: 'btn btn-sm waves-effect waves-light', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                  }
                },
                'login ',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'ion-android-send', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                  }
                })
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'input-field col s6 offset-s5', __source: {
                fileName: _jsxFileName,
                lineNumber: 37
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              { className: 'chip #c8e6c9 green lighten-4', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 38
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'ion-ios-help', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 38
                }
              }),
              ' ',
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
                { href: '#', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                  }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'a',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 38
                    }
                  },
                  ' Forget Password'
                )
              )
            )
          )
        )
      );
    }

    //Handle Submit Events.

  }, {
    key: 'submitHandler',
    value: function submitHandler(e) {
      var _this2 = this;

      e.preventDefault();
      if (this.refs.userName.value === '') {
        this.refs.userName.focus();
      } else if (this.refs.password.value === '') {
        this.refs.password.focus();
      } else {
        __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('/api/login', {
          username: this.refs.userName.value,
          password: this.refs.password.value
        }).then(function (data) {
          if (data.data !== false) {
            console.log(data.data);
            window.location = '/home/' + data.data.userId;
          } else if (data.data === false) {
            _this2.refs.userName.value = '';
            _this2.refs.password.value = '';
            $('.login_kids').show();
          }
        }).catch(function (err) {
          console.log(err);
        });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      $(document).ready(function () {
        $('.login_kids').hide();
      });
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return Login;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var _default = Login;


/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Login, 'Login', 'G:/next-test/components/login.js');
  reactHotLoader.register(_default, 'default', 'G:/next-test/components/login.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/signup.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
var _jsxFileName = "G:\\next-test\\components\\signup.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

  enterModule && enterModule(module);
})();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
            lineNumber: 6
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "form",
          { action: "", className: "col s12", onSubmit: this.submitHandle.bind(this), __source: {
              fileName: _jsxFileName,
              lineNumber: 7
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "input-field col s6", __source: {
                fileName: _jsxFileName,
                lineNumber: 8
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "ion-person prefix", __source: {
                fileName: _jsxFileName,
                lineNumber: 9
              }
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "text", className: "validate", placeholder: "First Name", ref: "first_name", autoFocus: true, required: true, __source: {
                fileName: _jsxFileName,
                lineNumber: 10
              }
            })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "input-field col s6", __source: {
                fileName: _jsxFileName,
                lineNumber: 12
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "ion-person prefix", __source: {
                fileName: _jsxFileName,
                lineNumber: 13
              }
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "text", className: "validate", placeholder: "Last Name", ref: "last_name", required: true, __source: {
                fileName: _jsxFileName,
                lineNumber: 14
              }
            })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "input-field col s12", __source: {
                fileName: _jsxFileName,
                lineNumber: 16
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "prefix ion-person-add", __source: {
                fileName: _jsxFileName,
                lineNumber: 17
              }
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "text", className: "validate", ref: "user_name", placeholder: "Username that you like...", required: true, __source: {
                fileName: _jsxFileName,
                lineNumber: 18
              }
            })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "input-field col s12", __source: {
                fileName: _jsxFileName,
                lineNumber: 20
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "prefix ion-lock-combination", __source: {
                fileName: _jsxFileName,
                lineNumber: 21
              }
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "password", className: "validate", ref: "password", placeholder: "Password", required: true, __source: {
                fileName: _jsxFileName,
                lineNumber: 22
              }
            })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "input-field col s12", __source: {
                fileName: _jsxFileName,
                lineNumber: 24
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "prefix ion-locked", __source: {
                fileName: _jsxFileName,
                lineNumber: 25
              }
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "password", className: "validate", ref: "repassword", placeholder: "Retype your Password", onKeyUp: this.handlekeyEvent.bind(this), required: true, __source: {
                fileName: _jsxFileName,
                lineNumber: 26
              }
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", { className: "kids chip", __source: {
                fileName: _jsxFileName,
                lineNumber: 27
              }
            })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "input-field col s6 offset-s2", __source: {
                fileName: _jsxFileName,
                lineNumber: 29
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "prefix ion-person-stalker", __source: {
                fileName: _jsxFileName,
                lineNumber: 30
              }
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "select",
              { defaultValue: "male", ref: "gender", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 31
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "option",
                { value: "male", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                  }
                },
                "male"
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "option",
                { value: "female", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                  }
                },
                "female"
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "input-field col s12", __source: {
                fileName: _jsxFileName,
                lineNumber: 36
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "prefix ion-calculator", __source: {
                fileName: _jsxFileName,
                lineNumber: 37
              }
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "text", className: "datepicker", ref: "date", required: true, __source: {
                fileName: _jsxFileName,
                lineNumber: 38
              }
            })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "input-field col s6 offset-s5", __source: {
                fileName: _jsxFileName,
                lineNumber: 40
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "button",
              { type: "submit", className: "btn", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 41
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
      } else {
        var _axios$post;

        __WEBPACK_IMPORTED_MODULE_1_axios___default.a.post('/api/signup', (_axios$post = {
          firstName: this.refs.first_name.value,
          lastName: this.refs.last_name.value,
          gender: this.refs.gender.value,
          date_of_birth: this.refs.date.value
        }, _defineProperty(_axios$post, "firstName", this.refs.first_name.value), _defineProperty(_axios$post, "userName", this.refs.user_name.value), _defineProperty(_axios$post, "password", this.refs.password.value), _axios$post)).then(function (response) {
          window.location = '/login';
        }).catch(function (err) {
          console.log(err);
        });
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
  }, {
    key: "__reactstandin__regenerateByEval",
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return Signup;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var _default = Signup;


/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Signup, "Signup", "G:/next-test/components/signup.js");
  reactHotLoader.register(_default, "default", "G:/next-test/components/signup.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/axios/index.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/axios/lib/axios.js");

/***/ })

})
//# sourceMappingURL=6.bc7277b0a66e3bff4704.hot-update.js.map