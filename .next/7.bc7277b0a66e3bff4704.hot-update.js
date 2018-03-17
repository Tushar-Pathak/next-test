webpackHotUpdate(7,{

/***/ "./components/Home/NewBlog.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
var _jsxFileName = "G:\\next-test\\components\\Home\\NewBlog.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();




(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var NewBlog = function (_React$Component) {
  _inherits(NewBlog, _React$Component);

  function NewBlog() {
    _classCallCheck(this, NewBlog);

    return _possibleConstructorReturn(this, (NewBlog.__proto__ || Object.getPrototypeOf(NewBlog)).apply(this, arguments));
  }

  _createClass(NewBlog, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "div",
        {
          className: "jsx-520386337" + " " + "row col s12",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 6
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "h5",
          {
            className: "jsx-520386337" + " " + "header col s6 offset-s1",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 7
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
            className: "jsx-520386337" + " " + "ion-compose",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 7
            }
          }),
          " New Blog"
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "div",
          {
            className: "jsx-520386337" + " " + "input-field col s6 offset-s3",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 8
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
            className: "jsx-520386337" + " " + "prefix ion-mic-b",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 9
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", { type: "text", placeholder: "Enter title here", ref: "title", required: true, autoFocus: true, className: "jsx-520386337",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 10
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "div",
          {
            className: "jsx-520386337" + " " + "input-field col s6 offset-s3",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 12
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
            className: "jsx-520386337" + " " + "ion-edit prefix",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 13
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("textarea", { ref: "body", placeholder: "start blogging:-", required: true, className: "jsx-520386337" + " " + "materialize-textarea",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 14
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "div",
          {
            className: "jsx-520386337" + " " + "input-field col s3",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 16
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "select",
            { defaultValue: "Normal", className: "jsx-520386337",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 17
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "option",
              { value: "Normal", className: "jsx-520386337",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 18
                }
              },
              "Normal"
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "option",
              { value: "20", className: "jsx-520386337",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 19
                }
              },
              "20"
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "option",
              { value: "25", className: "jsx-520386337",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 20
                }
              },
              "25"
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "option",
              { value: "30", className: "jsx-520386337",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 21
                }
              },
              "30"
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "div",
          {
            className: "jsx-520386337" + " " + "input-field col s6 offset-s2",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "button",
            { onClick: this.submitBlog.bind(this), className: "jsx-520386337" + " " + "btn waves-effect red black-text",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 25
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", { "data-position": "bottom", "data-delay": "50", "data-tooltip": "blog", className: "jsx-520386337" + " " + "ion-share tooltipped",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 25
              }
            })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: "520386337",
          css: ".header.jsx-520386337{margin-bottom:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEhvbWVcXE5ld0Jsb2cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEJTLEFBRytCLG1CQUNwQiIsImZpbGUiOiJjb21wb25lbnRzXFxIb21lXFxOZXdCbG9nLmpzIiwic291cmNlUm9vdCI6Ikc6L25leHQtdGVzdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jbGFzcyBOZXdCbG9nIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG4gIHJlbmRlcigpe1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgY29sIHMxMlwiPlxyXG4gICAgICAgPGg1IGNsYXNzTmFtZT1cImhlYWRlciBjb2wgczYgb2Zmc2V0LXMxXCI+PGkgY2xhc3NOYW1lPVwiaW9uLWNvbXBvc2VcIj48L2k+IE5ldyBCbG9nPC9oNT5cclxuICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHM2IG9mZnNldC1zM1wiPlxyXG4gICAgICAgIDxpIGNsYXNzTmFtZT1cInByZWZpeCBpb24tbWljLWJcIj48L2k+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJFbnRlciB0aXRsZSBoZXJlXCIgcmVmPVwidGl0bGVcIiByZXF1aXJlZCBhdXRvRm9jdXMvPlxyXG4gICAgICAgPC9kaXY+IFxyXG4gICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczYgb2Zmc2V0LXMzXCI+XHJcbiAgICAgICAgIDxpIGNsYXNzTmFtZT1cImlvbi1lZGl0IHByZWZpeFwiPjwvaT5cclxuICAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT1cIm1hdGVyaWFsaXplLXRleHRhcmVhXCIgcmVmPVwiYm9keVwiIHBsYWNlaG9sZGVyPVwic3RhcnQgYmxvZ2dpbmc6LVwiIHJlcXVpcmVkLz5cclxuICAgICAgIDwvZGl2PlxyXG4gICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczNcIj5cclxuICAgICAgICA8c2VsZWN0IGRlZmF1bHRWYWx1ZT1cIk5vcm1hbFwiPlxyXG4gICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTm9ybWFsXCI+Tm9ybWFsPC9vcHRpb24+XHJcbiAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyMFwiPjIwPC9vcHRpb24+XHJcbiAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyNVwiPjI1PC9vcHRpb24+XHJcbiAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIzMFwiPjMwPC9vcHRpb24+ICAgICAgICAgXHJcbiAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICA8L2Rpdj5cclxuICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHM2IG9mZnNldC1zMlwiPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIHdhdmVzLWVmZmVjdCByZWQgYmxhY2stdGV4dFwiIG9uQ2xpY2s9e3RoaXMuc3VibWl0QmxvZy5iaW5kKHRoaXMpfT48aSBjbGFzc05hbWU9XCJpb24tc2hhcmUgdG9vbHRpcHBlZFwiIGRhdGEtcG9zaXRpb249XCJib3R0b21cIiBkYXRhLWRlbGF5PVwiNTBcIiBkYXRhLXRvb2x0aXA9XCJibG9nXCIgPjwvaT48L2J1dHRvbj5cclxuICAgICAgIDwvZGl2PlxyXG4gICAgICAgPHN0eWxlIGpzeD57XHJcblxyXG4gICAgICAgICBgXHJcbiAgICAgICAgICAuaGVhZGVye1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOjEwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgIGBcclxuICAgICAgIH08L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvL1N1Ym1pdCBCbG9nLlxyXG4gIHN1Ym1pdEJsb2coKXtcclxuICAgIGF4aW9zXHJcbiAgICAgLnBvc3QoJy9hcGkvbmV3YmxvZycse1xyXG4gICAgICAgIHRpdGxlOnRoaXMucmVmcy50aXRsZS52YWx1ZSxcclxuICAgICAgICBib2R5OnRoaXMucmVmcy5ib2R5LnZhbHVlLFxyXG4gICAgICAgIHVzZXJJZDp0aGlzLnByb3BzLnVzZXJJZCxcclxuICAgICB9KVxyXG4gICAgIC50aGVuKCBkYXRhID0+IHtcclxuICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9ICcvaG9tZS8nK3RoaXMucHJvcHMudXNlcklkO1xyXG4gICAgIH0pXHJcbiAgICAgLmNhdGNoKCBlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJChcInNlbGVjdFwiKS5tYXRlcmlhbF9zZWxlY3QoKTsgICAgXHJcbiAgICAgfSk7XHJcbiAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV3QmxvZzsiXX0= */\n/*@ sourceURL=components\\Home\\NewBlog.js */"
        })
      );
    }

    //Submit Blog.

  }, {
    key: "submitBlog",
    value: function submitBlog() {
      var _this2 = this;

      __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('/api/newblog', {
        title: this.refs.title.value,
        body: this.refs.body.value,
        userId: this.props.userId
      }).then(function (data) {
        window.location = '/home/' + _this2.props.userId;
      }).catch(function (err) {
        return console.log(err);
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      $(document).ready(function () {
        $("select").material_select();
      });
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return NewBlog;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

var _default = NewBlog;


/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(NewBlog, "NewBlog", "G:/next-test/components/Home/NewBlog.js");
  reactHotLoader.register(_default, "default", "G:/next-test/components/Home/NewBlog.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/Home/ShowBlog.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_if__ = __webpack_require__("./node_modules/react-if/lib/ReactIf.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_if___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_if__);
var _jsxFileName = 'G:\\next-test\\components\\Home\\ShowBlog.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();




(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var ShowBlog = function (_React$Component) {
  _inherits(ShowBlog, _React$Component);

  function ShowBlog() {
    _classCallCheck(this, ShowBlog);

    var _this = _possibleConstructorReturn(this, (ShowBlog.__proto__ || Object.getPrototypeOf(ShowBlog)).call(this));

    _this.state = {
      likes: 0,
      views: 0,
      view: false
    };
    return _this;
  }

  _createClass(ShowBlog, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({
        likes: this.props.blog.likes,
        views: this.props.blog.views
      });
    }
  }, {
    key: 'render',
    value: function render() {

      var timeNow = this.props.blog.createdAt;
      timeNow = timeNow.substr(0, timeNow.indexOf('T'));
      var year = timeNow.substr(0, timeNow.indexOf('-'));
      var month = timeNow.substring(timeNow.indexOf('-') + 1, timeNow.lastIndexOf('-'));
      switch (parseInt(month)) {
        case 1:
          month = "January";
          break;
        case 2:
          month = "Febuary";
          break;
        case 3:
          month = "March";
          break;
        case 4:
          month = "April";
          break;
        case 5:
          month = "May";
          break;
        case 6:
          month = "June";
          break;
        case 7:
          month = "July";
          break;
        case 8:
          month = "August";
          break;
        case 9:
          month = "September";
          break;
        case 10:
          month = "October";
          break;
        case 11:
          month = "November";
          break;
        case 12:
          month = "December";
          break;
      }
      var day = timeNow.substr(timeNow.lastIndexOf('-') + 1, timeNow.length);
      timeNow = day + ' ' + month + ',' + year;

      return (
        // <div className="row col s12">
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          {
            className: 'jsx-3059147084' + ' ' + '',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 59
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3_react_if__["If"],
            { condition: this.state.view === false, __source: {
                fileName: _jsxFileName,
                lineNumber: 60
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3_react_if__["Then"],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 61
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                {
                  className: 'jsx-3059147084' + ' ' + 'col s12 l6',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'div',
                  {
                    className: 'jsx-3059147084' + ' ' + 'card horizontal hoverable',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 63
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'div',
                    {
                      className: 'jsx-3059147084' + ' ' + 'card-stacked',
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 64
                      }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                      'div',
                      {
                        className: 'jsx-3059147084' + ' ' + 'card-content',
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 65
                        }
                      },
                      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'div',
                        {
                          className: 'jsx-3059147084' + ' ' + 'card-image',
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 66
                          }
                        },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: this.props.blog.image, className: 'jsx-3059147084',
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 67
                          }
                        })
                      ),
                      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'span',
                        {
                          className: 'jsx-3059147084' + ' ' + 'card-title',
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 69
                          }
                        },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                          'strong',
                          {
                            className: 'jsx-3059147084',
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 70
                            }
                          },
                          this.props.blog.title
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'p',
                        {
                          className: 'jsx-3059147084' + ' ' + 'body flow-text',
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 72
                          }
                        },
                        this.props.blog.body.substr(0, 10) + '...',
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                          'span',
                          {
                            className: 'jsx-3059147084' + ' ' + 'card-btn',
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 73
                            }
                          },
                          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            'button',
                            { onClick: this.toggleBody.bind(this), className: 'jsx-3059147084' + ' ' + 'btn waves-effect btn-toggle',
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 73
                              }
                            },
                            'Read More'
                          )
                        ),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('br', {
                          className: 'jsx-3059147084',
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 74
                          }
                        }),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                          'span',
                          {
                            className: 'jsx-3059147084' + ' ' + 'chip',
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 75
                            }
                          },
                          timeNow
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'p',
                        {
                          className: 'jsx-3059147084' + ' ' + 'flow-text',
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 77
                          }
                        },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('i', { onClick: this.addLikes.bind(this), id: this.props.blog.id, className: 'jsx-3059147084' + ' ' + 'icon ion-android-favorite-outline',
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 78
                          }
                        }),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                          'span',
                          {
                            className: 'jsx-3059147084' + ' ' + (this.props.blog.id || ''),
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 79
                            }
                          },
                          this.props.blog.likes
                        ),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('i', { id: this.props.blog.id, className: 'jsx-3059147084' + ' ' + 'icon ion-android-contacts',
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 80
                          }
                        }),
                        this.props.blog.views
                      )
                    )
                  )
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3_react_if__["If"],
            { condition: this.state.view === true, __source: {
                fileName: _jsxFileName,
                lineNumber: 89
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3_react_if__["Then"],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 90
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                {
                  className: 'jsx-3059147084' + ' ' + 'card horizontal col s12',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 91
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'div',
                  {
                    className: 'jsx-3059147084' + ' ' + 'card-stacked',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 92
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'div',
                    {
                      className: 'jsx-3059147084' + ' ' + 'card-content',
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 93
                      }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                      'span',
                      {
                        className: 'jsx-3059147084' + ' ' + 'card-title',
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 94
                        }
                      },
                      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'strong',
                        {
                          className: 'jsx-3059147084',
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 95
                          }
                        },
                        this.props.blog.title
                      ),
                      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: this.props.blog.image, height: '25px', className: 'jsx-3059147084' + ' ' + 'circle',
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 96
                        }
                      })
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                      'p',
                      {
                        className: 'jsx-3059147084' + ' ' + 'body flow-text',
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 98
                        }
                      },
                      this.props.blog.body,
                      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('br', {
                        className: 'jsx-3059147084',
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 99
                        }
                      }),
                      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'span',
                        {
                          className: 'jsx-3059147084' + ' ' + 'chip',
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 100
                          }
                        },
                        timeNow
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                      'p',
                      {
                        className: 'jsx-3059147084' + ' ' + 'flow-text',
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 102
                        }
                      },
                      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('i', { onClick: this.addLikes.bind(this), id: this.props.blog.id, className: 'jsx-3059147084' + ' ' + 'icon ion-android-favorite-outline',
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 103
                        }
                      }),
                      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'span',
                        {
                          className: 'jsx-3059147084' + ' ' + (this.props.blog.id || ''),
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 104
                          }
                        },
                        this.props.blog.likes
                      ),
                      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('i', { id: this.props.blog.id, className: 'jsx-3059147084' + ' ' + 'icon ion-android-contacts',
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 105
                        }
                      }),
                      this.props.blog.views
                    )
                  )
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
            styleId: '3059147084',
            css: '.card-btn.jsx-3059147084{font-size:20px;cursor:pointer;}.icon.jsx-3059147084{margin:10px;cursor:pointer;font-size:30px;}p.body.jsx-3059147084{width:22em;word-wrap:break-word;}.btn-toggle.jsx-3059147084{font-size:15px;margin:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEhvbWVcXFNob3dCbG9nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlIVSxBQUc0QixBQUlGLEFBS0YsQUFJSSxXQUhNLENBTEwsR0FKRCxBQWFILFlBUkksQUFTakIsR0FiQSxFQVNBLFVBSkEiLCJmaWxlIjoiY29tcG9uZW50c1xcSG9tZVxcU2hvd0Jsb2cuanMiLCJzb3VyY2VSb290IjoiRzovbmV4dC10ZXN0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHtJZiwgVGhlbn0gZnJvbSAncmVhY3QtaWYnO1xyXG5cclxuY2xhc3MgU2hvd0Jsb2cgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIFxyXG4gIGNvbnN0cnVjdG9yKCl7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgbGlrZXM6MCxcclxuICAgICAgdmlld3M6MCxcclxuICAgICAgdmlldzpmYWxzZVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpe1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGxpa2VzOnRoaXMucHJvcHMuYmxvZy5saWtlcyxcclxuICAgICAgdmlld3M6dGhpcy5wcm9wcy5ibG9nLnZpZXdzXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuXHJcbiAgICBsZXQgdGltZU5vdyA9IHRoaXMucHJvcHMuYmxvZy5jcmVhdGVkQXQ7XHJcbiAgICB0aW1lTm93ID0gdGltZU5vdy5zdWJzdHIoMCwgdGltZU5vdy5pbmRleE9mKCdUJykpO1xyXG4gICAgbGV0IHllYXIgPSB0aW1lTm93LnN1YnN0cigwLCB0aW1lTm93LmluZGV4T2YoJy0nKSk7XHJcbiAgICBsZXQgbW9udGggPSB0aW1lTm93LnN1YnN0cmluZyh0aW1lTm93LmluZGV4T2YoJy0nKSArIDEsdGltZU5vdy5sYXN0SW5kZXhPZignLScpKTtcclxuICAgIHN3aXRjaChwYXJzZUludChtb250aCkpe1xyXG4gICAgICBjYXNlIDE6bW9udGg9XCJKYW51YXJ5XCI7XHJcbiAgICAgICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAyOm1vbnRoPVwiRmVidWFyeVwiO1xyXG4gICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgMzptb250aD1cIk1hcmNoXCI7XHJcbiAgICAgICAgICAgICBicmVhazsgIFxyXG4gICAgICBjYXNlIDQ6bW9udGg9XCJBcHJpbFwiO1xyXG4gICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgNTptb250aD1cIk1heVwiO1xyXG4gICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgNjptb250aD1cIkp1bmVcIjtcclxuICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIDc6bW9udGg9XCJKdWx5XCI7XHJcbiAgICAgICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSA4Om1vbnRoPVwiQXVndXN0XCI7XHJcbiAgICAgICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSA5Om1vbnRoPVwiU2VwdGVtYmVyXCI7XHJcbiAgICAgICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAxMDptb250aD1cIk9jdG9iZXJcIjtcclxuICAgICAgICAgICAgIGJyZWFrOyAgXHJcbiAgICAgIGNhc2UgMTE6bW9udGg9XCJOb3ZlbWJlclwiO1xyXG4gICAgICAgICAgICAgYnJlYWs7ICBcclxuICAgICAgY2FzZSAxMjptb250aD1cIkRlY2VtYmVyXCI7XHJcbiAgICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGxldCBkYXkgPSB0aW1lTm93LnN1YnN0cih0aW1lTm93Lmxhc3RJbmRleE9mKCctJykrMSwgdGltZU5vdy5sZW5ndGgpO1xyXG4gICAgdGltZU5vdyA9IGAke2RheX0gJHttb250aH0sJHt5ZWFyfWA7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgLy8gPGRpdiBjbGFzc05hbWU9XCJyb3cgY29sIHMxMlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICA8SWYgY29uZGl0aW9uID0ge3RoaXMuc3RhdGUudmlldyA9PT0gZmFsc2V9PlxyXG4gICAgICAgICAgICA8VGhlbj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMTIgbDZcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgaG9yaXpvbnRhbCBob3ZlcmFibGVcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtc3RhY2tlZFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dGhpcy5wcm9wcy5ibG9nLmltYWdlfT48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPnt0aGlzLnByb3BzLmJsb2cudGl0bGV9PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYm9keSBmbG93LXRleHRcIj57dGhpcy5wcm9wcy5ibG9nLmJvZHkuc3Vic3RyKDAsIDEwKSArICcuLi4nfVxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhcmQtYnRuXCI+PGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gd2F2ZXMtZWZmZWN0IGJ0bi10b2dnbGVcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZUJvZHkuYmluZCh0aGlzKX0+UmVhZCBNb3JlPC9idXR0b24+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNoaXBcIj57dGltZU5vd308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmxvdy10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpb24tYW5kcm9pZC1mYXZvcml0ZS1vdXRsaW5lXCIgb25DbGljaz17dGhpcy5hZGRMaWtlcy5iaW5kKHRoaXMpfSBpZD17dGhpcy5wcm9wcy5ibG9nLmlkfT48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXt0aGlzLnByb3BzLmJsb2cuaWR9Pnt0aGlzLnByb3BzLmJsb2cubGlrZXN9PC9zcGFuPiAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpb24tYW5kcm9pZC1jb250YWN0c1wiIGlkPXt0aGlzLnByb3BzLmJsb2cuaWR9PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5ibG9nLnZpZXdzfVxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9UaGVuPlxyXG4gICAgICAgICAgPC9JZj4gXHJcbiAgICAgICAgICA8SWYgY29uZGl0aW9uPXt0aGlzLnN0YXRlLnZpZXcgPT09IHRydWV9PlxyXG4gICAgICAgICAgICA8VGhlbj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGhvcml6b250YWwgY29sIHMxMlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1zdGFja2VkXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz57dGhpcy5wcm9wcy5ibG9nLnRpdGxlIH08L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dGhpcy5wcm9wcy5ibG9nLmltYWdlfSBoZWlnaHQ9XCIyNXB4XCIgY2xhc3NOYW1lPVwiY2lyY2xlXCI+PC9pbWc+ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJib2R5IGZsb3ctdGV4dFwiPnt0aGlzLnByb3BzLmJsb2cuYm9keX1cclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjaGlwXCI+e3RpbWVOb3d9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZsb3ctdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaW9uLWFuZHJvaWQtZmF2b3JpdGUtb3V0bGluZVwiIG9uQ2xpY2s9e3RoaXMuYWRkTGlrZXMuYmluZCh0aGlzKX0gaWQ9e3RoaXMucHJvcHMuYmxvZy5pZH0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5ibG9nLmlkfT57dGhpcy5wcm9wcy5ibG9nLmxpa2VzfTwvc3Bhbj4gIFxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaW9uLWFuZHJvaWQtY29udGFjdHNcIiBpZD17dGhpcy5wcm9wcy5ibG9nLmlkfT48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuYmxvZy52aWV3c31cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvVGhlbj5cclxuICAgICAgICAgIDwvSWY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57XHJcbiAgICAgICAgICBgXHJcbiAgICAgICAgICAgLmNhcmQtYnRue1xyXG4gICAgICAgICAgICAgZm9udC1zaXplOjIwcHg7XHJcbiAgICAgICAgICAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgICAgLmljb257XHJcbiAgICAgICAgICAgICAgbWFyZ2luOjEwcHg7XHJcbiAgICAgICAgICAgICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOjMwcHg7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICAgIHAuYm9keXtcclxuICAgICAgICAgICAgIHdpZHRoOjIyZW07XHJcbiAgICAgICAgICAgICB3b3JkLXdyYXA6YnJlYWstd29yZDtcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgICAgLmJ0bi10b2dnbGV7XHJcbiAgICAgICAgICAgICBmb250LXNpemU6MTVweDtcclxuICAgICAgICAgICAgIG1hcmdpbjoxMHB4O1xyXG4gICAgICAgICAgIH1cclxuICAgICAgICAgIGAgXHJcbiAgICAgICAgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8vVG9nZ2xlIEJvZHkuXHJcbiAgdG9nZ2xlQm9keShlKXtcclxuICAgIGxldCBjdXJyZW50U3RhdGUgPSB0aGlzLnN0YXRlO1xyXG4gICAgY3VycmVudFN0YXRlLnZpZXcgPSB0cnVlO1xyXG4gICAgY3VycmVudFN0YXRlLnZpZXdCbG9nID0ge1xyXG4gICAgICB0aXRsZTp0aGlzLnByb3BzLmJsb2cudGl0bGUsXHJcbiAgICAgIGJvZHk6dGhpcy5wcm9wcy5ibG9nLmJvZHksXHJcbiAgICAgIGNyZWF0ZWRBdDp0aGlzLnByb3BzLmJsb2cuY3JlYXRlZEF0LFxyXG4gICAgICBsaWtlczp0aGlzLnByb3BzLmxpa2VzLFxyXG4gICAgICB2aWV3czp0aGlzLnByb3BzLnZpZXdzXHJcbiAgICB9O1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGN1cnJlbnRTdGF0ZVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvL0FkZCBMaWtlcyBUbyBQb3N0cy5cclxuICBhZGRMaWtlcyhlKXtcclxuICAgIGNvbnN0IGlkID0gZS50YXJnZXQuaWQ7XHJcbiAgICBheGlvcy5wdXQoJy9hcGkvYWRkbGlrZXMnLCB7XHJcbiAgICAgICAgdXNlcklkOnRoaXMucHJvcHMudXNlcklkLFxyXG4gICAgICAgIGJsb2dJZDppZCxcclxuICAgICAgICB0cnVlOnRydWVcclxuICAgIH0pXHJcbiAgICAgLnRoZW4oIHJlc3VsdCA9PiB7XHJcbiAgICAgICAkKGAjJHtpZH1gKS5jc3MoJ2NvbG9yJywncmVkJyk7XHJcbiAgICAgICBsZXQgc3BhbiA9ICQoYC4ke2lkfWApO1xyXG4gICAgICAgc3Bhbi5odG1sKHBhcnNlSW50KHRoaXMuc3RhdGUubGlrZXMpICsgMSk7XHJcbiAgICAgICB0aGlzLnN0YXRlLmxpa2VzID0gcGFyc2VJbnQodGhpcy5zdGF0ZS5saWtlcykgKyAxO1xyXG4gICAgIH0pXHJcbiAgICAgLmNhdGNoKCBlcnIgPT4gY29uc29sZS5sb2coZXJyKSApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvd0Jsb2c7Il19 */\n/*@ sourceURL=components\\Home\\ShowBlog.js */'
          })
        )
      );
    }

    //Toggle Body.

  }, {
    key: 'toggleBody',
    value: function toggleBody(e) {
      var currentState = this.state;
      currentState.view = true;
      currentState.viewBlog = {
        title: this.props.blog.title,
        body: this.props.blog.body,
        createdAt: this.props.blog.createdAt,
        likes: this.props.likes,
        views: this.props.views
      };
      this.setState({
        currentState: currentState
      });
    }

    //Add Likes To Posts.

  }, {
    key: 'addLikes',
    value: function addLikes(e) {
      var _this2 = this;

      var id = e.target.id;
      __WEBPACK_IMPORTED_MODULE_2_axios___default.a.put('/api/addlikes', {
        userId: this.props.userId,
        blogId: id,
        true: true
      }).then(function (result) {
        $('#' + id).css('color', 'red');
        var span = $('.' + id);
        span.html(parseInt(_this2.state.likes) + 1);
        _this2.state.likes = parseInt(_this2.state.likes) + 1;
      }).catch(function (err) {
        return console.log(err);
      });
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return ShowBlog;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

var _default = ShowBlog;


/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ShowBlog, 'ShowBlog', 'G:/next-test/components/Home/ShowBlog.js');
  reactHotLoader.register(_default, 'default', 'G:/next-test/components/Home/ShowBlog.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/axios/index.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./pages/home.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Home_Blog__ = __webpack_require__("./components/Home/Blog.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Home_NewBlog__ = __webpack_require__("./components/Home/NewBlog.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_if__ = __webpack_require__("./node_modules/react-if/lib/ReactIf.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_if___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_if__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Home_ShowBlog__ = __webpack_require__("./components/Home/ShowBlog.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_axios__);
var _jsxFileName = 'G:\\next-test\\pages\\home.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home() {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this));

    _this.state = {
      newBlog: false,
      first_name: null,
      last_name: null,
      gender: null,
      createdAt: null,
      blogs: [],
      date_of_birth: null
    };
    return _this;
  }

  _createClass(Home, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      __WEBPACK_IMPORTED_MODULE_6_axios___default.a.get('/api/getUser', {
        params: {
          id: this.props.query.id
        }
      }).then(function (response) {
        var res = response.data;
        console.log(res);
        _this2.setState({
          userName: res.userName,
          newBlog: false,
          userId: res.userId,
          first_name: res.first_name,
          last_name: res.last_name,
          gender: res.gender,
          createdAt: res.createdAt,
          blogs: res.blogs,
          date_of_birth: res.date_of_birth
        });
        console.log(res.blogs);
      }).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var addImages = this.state.blogs.map(function (blogs) {
        var js = new RegExp('javascript', 'i');
        var react = new RegExp('react');
        var angular = new RegExp('angular');
        var css = new RegExp('css');
        var html = new RegExp('html', 'i');
        var python = new RegExp('python');
        var node = new RegExp('node');

        if (js.test(blogs.title)) {
          blogs.image = '/static/images/javascript.png';
        } else if (react.test(blogs.title)) {
          blogs.image = '/static/images/react.png';
        } else if (angular.test(blogs.title)) {
          blogs.image = '/static/images/angular.jpg';
        } else if (html.test(blogs.title)) {
          blogs.image = '/static/images/html.png';
        } else if (css.test(blogs.title)) {
          blogs.image = '/static/images/css.jpg';
        } else if (node.test(blogs.title)) {
          blogs.image = '/static/images/nodejs.png';
        } else {
          blogs.image = '/static/images/python.jpg';
        }

        return blogs;
      });

      var myBlogs = addImages.map(function (blogs, index) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_Home_ShowBlog__["a" /* default */], { blog: blogs, userId: _this3.state.userId, key: index, __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          }
        });
      });

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1__components_Layout__["a" /* default */],
        { title: 'Welcome to BloggSpot', loggedIn: 'true', userName: this.state.userName, userId: this.state.userId, __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4_react_if__["If"],
          { condition: this.state.newBlog === true, __source: {
              fileName: _jsxFileName,
              lineNumber: 92
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_4_react_if__["Then"],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 93
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Home_NewBlog__["a" /* default */], { userId: this.state.userId, __source: {
                fileName: _jsxFileName,
                lineNumber: 94
              }
            })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4_react_if__["If"],
          { condition: this.state.newBlog === false, __source: {
              fileName: _jsxFileName,
              lineNumber: 97
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_4_react_if__["Then"],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 98
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Home_Blog__["a" /* default */], { state: this.state, __source: {
                fileName: _jsxFileName,
                lineNumber: 99
              }
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'row col s12', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 100
                }
              },
              myBlogs
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'fixed-action-btn horizontal', __source: {
              fileName: _jsxFileName,
              lineNumber: 106
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'a',
            { className: 'btn-floating btn-large red', __source: {
                fileName: _jsxFileName,
                lineNumber: 107
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'ion-ios-compose', onClick: this.handleClick.bind(this), __source: {
                fileName: _jsxFileName,
                lineNumber: 108
              }
            })
          )
        )
      );
    }

    //Handle Click Events.

  }, {
    key: 'handleClick',
    value: function handleClick() {
      var newState = this.state;
      if (this.state.newBlog === false) {
        newState.newBlog = true;
        this.setState({
          newState: newState
        });
      }
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var query = _ref.query;

      //console.log(query, ' page');
      return { query: query };
    }
  }]);

  return Home;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var _default = Home;


/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Home, 'Home', 'G:/next-test/pages/home.js');
  reactHotLoader.register(_default, 'default', 'G:/next-test/pages/home.js');
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/home")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=7.bc7277b0a66e3bff4704.hot-update.js.map