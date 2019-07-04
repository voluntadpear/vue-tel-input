webpackJsonp([1],{

/***/ 103:
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-286e6488","hasScoped":true,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/vue-tel-input.vue ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      class: ["vue-tel-input", _vm.wrapperClasses, { disabled: _vm.disabled }]
    },
    [
      _c(
        "div",
        {
          directives: [
            {
              name: "click-outside",
              rawName: "v-click-outside",
              value: _vm.clickedOutside,
              expression: "clickedOutside"
            }
          ],
          staticClass: "dropdown",
          class: { open: _vm.open },
          attrs: {
            tabindex:
              _vm.dropdownOptions && _vm.dropdownOptions.tabindex
                ? _vm.dropdownOptions.tabindex
                : 0
          },
          on: {
            keydown: [
              _vm.keyboardNav,
              function($event) {
                if (
                  !$event.type.indexOf("key") &&
                  _vm._k($event.keyCode, "esc", 27, $event.key, [
                    "Esc",
                    "Escape"
                  ])
                ) {
                  return null
                }
                return _vm.reset($event)
              }
            ],
            click: _vm.toggleDropdown
          }
        },
        [
          _c("span", { staticClass: "selection" }, [
            _vm.enabledFlags
              ? _c("div", {
                  staticClass: "iti-flag",
                  class: _vm.activeCountry.iso2.toLowerCase()
                })
              : _vm._e(),
            _vm._v(" "),
            _vm.enabledCountryCode
              ? _c("span", { staticClass: "country-code" }, [
                  _vm._v("+" + _vm._s(_vm.activeCountry.dialCode))
                ])
              : _vm._e(),
            _vm._v(" "),
            _c("span", { staticClass: "dropdown-arrow" }, [
              _vm._v(_vm._s(_vm.open ? "▲" : "▼"))
            ])
          ]),
          _vm._v(" "),
          _c(
            "ul",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.open,
                  expression: "open"
                }
              ],
              ref: "list"
            },
            _vm._l(_vm.sortedCountries, function(pb, index) {
              return _c(
                "li",
                {
                  key: pb.iso2 + (pb.preferred ? "-preferred" : ""),
                  staticClass: "dropdown-item",
                  class: _vm.getItemClass(index, pb.iso2),
                  on: {
                    click: function($event) {
                      return _vm.choose(pb)
                    },
                    mousemove: function($event) {
                      _vm.selectedIndex = index
                    }
                  }
                },
                [
                  _vm.enabledFlags
                    ? _c("div", {
                        staticClass: "iti-flag",
                        class: pb.iso2.toLowerCase()
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _c("strong", [_vm._v(_vm._s(pb.name))]),
                  _vm._v(" "),
                  _vm.dropdownOptions && !_vm.dropdownOptions.disabledDialCode
                    ? _c("span", [_vm._v("+" + _vm._s(pb.dialCode))])
                    : _vm._e()
                ]
              )
            }),
            0
          )
        ]
      ),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.phone,
            expression: "phone"
          }
        ],
        ref: "input",
        class: _vm.inputClasses,
        attrs: {
          type: "tel",
          placeholder: _vm.placeholder,
          disabled: _vm.disabled,
          required: _vm.required,
          autocomplete: _vm.autocomplete,
          name: _vm.name,
          id: _vm.inputId,
          maxlength: _vm.maxLen,
          tabindex:
            _vm.inputOptions && _vm.inputOptions.tabindex
              ? _vm.inputOptions.tabindex
              : 0
        },
        domProps: { value: _vm.phone },
        on: {
          blur: _vm.onBlur,
          input: [
            function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.phone = $event.target.value
            },
            _vm.onInput
          ],
          keyup: [
            function($event) {
              if (
                !$event.type.indexOf("key") &&
                _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
              ) {
                return null
              }
              return _vm.onEnter($event)
            },
            function($event) {
              if (
                !$event.type.indexOf("key") &&
                _vm._k($event.keyCode, "space", 32, $event.key, [
                  " ",
                  "Spacebar"
                ])
              ) {
                return null
              }
              return _vm.onSpace($event)
            }
          ]
        }
      })
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-286e6488", esExports)
  }
}

/***/ }),

/***/ 104:
/*!**********************!*\
  !*** ./demo/App.vue ***!
  \**********************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_babelrc_false_presets_root_project_node_modules_babel_preset_poi_index_js_jsx_vue_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(/*! !babel-loader?{"babelrc":false,"presets":[["/root/project/node_modules/babel-preset-poi/index.js",{"jsx":"vue"}]],"cacheDirectory":true}!../node_modules/vue-loader/lib/selector?type=script&index=0!./App.vue */ 58);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1bd2bee3_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__(/*! !../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-1bd2bee3","hasScoped":false,"buble":{"transforms":{}}}!../node_modules/vue-loader/lib/selector?type=template&index=0!./App.vue */ 105);
var disposed = false
var normalizeComponent = __webpack_require__(/*! ../node_modules/vue-loader/lib/component-normalizer */ 33)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_babelrc_false_presets_root_project_node_modules_babel_preset_poi_index_js_jsx_vue_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1bd2bee3_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "demo/App.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1bd2bee3", Component.options)
  } else {
    hotAPI.reload("data-v-1bd2bee3", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 105:
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-1bd2bee3","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./demo/App.vue ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "app" } }, [
    _c(
      "div",
      { staticStyle: { width: "500px", margin: "20px auto" } },
      [
        _c("vue-tel-input", {
          attrs: { preferredCountries: ["us", "gb", "ua"] },
          on: { input: _vm.onInput }
        })
      ],
      1
    ),
    _vm._v(" "),
    _vm.phone.number
      ? _c("div", { staticStyle: { color: "#e83e8c" } }, [
          _c("span", [
            _vm._v("\n      Number:\n      "),
            _c("strong", [_vm._v(_vm._s(_vm.phone.number))]),
            _vm._v(", \n    ")
          ]),
          _vm._v(" "),
          _c("span", [
            _vm._v("\n      Is valid:\n      "),
            _c("strong", [_vm._v(_vm._s(_vm.phone.isValid))]),
            _vm._v(", \n    ")
          ]),
          _vm._v(" "),
          _c("span", [
            _vm._v("\n      Country:\n      "),
            _c("strong", [_vm._v(_vm._s(_vm.phone.country))])
          ])
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1bd2bee3", esExports)
  }
}

/***/ }),

/***/ 34:
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib?{"babelrc":false,"presets":[["/root/project/node_modules/babel-preset-poi/index.js",{"jsx":"vue"}]],"cacheDirectory":true}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/vue-tel-input.vue ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_libphonenumber_js__ = __webpack_require__(/*! libphonenumber-js */ 66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_all_countries__ = __webpack_require__(/*! ./assets/all-countries */ 79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_default_country__ = __webpack_require__(/*! ./assets/default-country */ 80);
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'vue-tel-input',
  props: {
    value: {
      type: String
    },
    placeholder: {
      type: String,
      default: 'Enter a phone number'
    },
    disabledFetchingCountry: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    disabledFormatting: {
      type: Boolean,
      default: false
    },
    invalidMsg: {
      default: '',
      type: String
    },
    required: {
      type: Boolean,
      default: false
    },
    defaultCountry: {
      // Default country code, ie: 'AU'
      // Will override the current country of user
      type: String,
      default: ''
    },
    enabledCountryCode: {
      type: Boolean,
      default: false
    },
    enabledFlags: {
      type: Boolean,
      default: true
    },
    preferredCountries: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    onlyCountries: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    ignoredCountries: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    autocomplete: {
      type: String,
      default: 'on'
    },
    name: {
      type: String,
      default: 'telephone'
    },
    wrapperClasses: {
      type: [String, Array, Object],
      default: ''
    },
    inputClasses: {
      type: [String, Array, Object],
      default: ''
    },
    inputId: {
      type: String,
      default: ''
    },
    dropdownOptions: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    inputOptions: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    maxLen: {
      type: Number,
      default: 25
    },
    validCharactersOnly: {
      type: Boolean,
      default: false
    }
  },
  mounted: function mounted() {
    this.initializeCountry();
    if (!this.phone && this.inputOptions && this.inputOptions.showDialCode && this.activeCountry) {
      this.phone = '+' + this.activeCountry.dialCode;
    }
    this.$emit('validate', this.response);
    this.$emit('onValidate', this.response); // Deprecated
  },
  created: function created() {
    if (this.value) {
      this.phone = this.value.trim();
    }
  },
  data: function data() {
    return {
      phone: '',
      activeCountry: { iso2: '' },
      open: false,
      selectedIndex: null,
      typeToFindInput: '',
      typeToFindTimer: null
    };
  },

  computed: {
    mode: function mode() {
      if (!this.phone) {
        return '';
      }
      if (this.phone[0] === '+') {
        return 'code';
      }
      if (this.phone[0] === '0') {
        return 'prefix';
      }
      return 'normal';
    },
    filteredCountries: function filteredCountries() {
      var _this = this;

      // List countries after filtered
      if (this.onlyCountries.length) {
        return this.getCountries(this.onlyCountries);
      }

      if (this.ignoredCountries.length) {
        return __WEBPACK_IMPORTED_MODULE_1__assets_all_countries__["a" /* default */].filter(function (_ref) {
          var iso2 = _ref.iso2;
          return !_this.ignoredCountries.includes(iso2.toUpperCase()) && !_this.ignoredCountries.includes(iso2.toLowerCase());
        });
      }

      return __WEBPACK_IMPORTED_MODULE_1__assets_all_countries__["a" /* default */];
    },
    sortedCountries: function sortedCountries() {
      // Sort the list countries: from preferred countries to all countries
      var preferredCountries = this.getCountries(this.preferredCountries).map(function (country) {
        return Object.assign({}, country, { preferred: true });
      });

      return [].concat(_toConsumableArray(preferredCountries), _toConsumableArray(this.filteredCountries));
    },
    formattedResult: function formattedResult() {
      // Calculate phone number based on mode
      if (!this.mode || !this.filteredCountries) {
        return '';
      }
      var phone = this.phone;
      if (this.mode === 'code') {
        // If user manually type the country code
        var formatter = new __WEBPACK_IMPORTED_MODULE_0_libphonenumber_js__["a" /* AsYouType */](); // eslint-disable-line
        formatter.input(this.phone);

        // Find inputted country in the countries list
        this.activeCountry = this.findCountry(formatter.country) || this.activeCountry;
      } else if (this.mode === 'prefix') {
        // Remove the first '0' if this is a '0' prefix number
        // Ex: 0432421999
        phone = this.phone.slice(1);
      }
      if (this.disabledFormatting) {
        return this.phone;
      }

      return Object(__WEBPACK_IMPORTED_MODULE_0_libphonenumber_js__["b" /* formatNumber */])(phone, this.activeCountry && this.activeCountry.iso2, 'International');
    },
    state: function state() {
      return Object(__WEBPACK_IMPORTED_MODULE_0_libphonenumber_js__["c" /* isValidNumber */])(this.formattedResult, this.activeCountry && this.activeCountry.iso2);
    },
    response: function response() {
      // If it is a valid number, returns the formatted value
      // Otherwise returns what it is
      var response = {
        number: this.state ? this.formattedResult : this.phone,
        isValid: this.state,
        country: this.activeCountry
        // If formatting to the input is disabled, try to return the formatted value to its parent
      };if (this.disabledFormatting) {
        Object.assign(response, {
          formattedNumber: Object(__WEBPACK_IMPORTED_MODULE_0_libphonenumber_js__["b" /* formatNumber */])(this.phone, this.activeCountry && this.activeCountry.iso2, 'International')
        });
      }
      return response;
    }
  },
  watch: {
    state: function state(value) {
      if (value && this.mode !== 'prefix') {
        // If mode is 'prefix', keep the number as user typed,
        // Otherwise format it
        this.phone = this.formattedResult;
      }
      this.$emit('onValidate', this.response); // Deprecated
      this.$emit('validate', this.response);
    },
    value: function value() {
      this.phone = this.value;
    },
    open: function open(isDropdownOpened) {
      // Emit open and close events
      if (isDropdownOpened) {
        this.$emit('open');
      } else {
        this.$emit('close');
      }
    },
    phone: function phone(newValue, oldValue) {
      var _this2 = this;

      if (this.validCharactersOnly && !this.testCharacters()) {
        this.$nextTick(function () {
          _this2.phone = oldValue;
        });
      }
    }
  },
  methods: {
    initializeCountry: function initializeCountry() {
      var _this3 = this;

      /**
       * 1. If the phone included prefix (+12), try to get the country and set it
       */
      if (this.phone && this.phone[0] === '+') {
        var parsedPhone = Object(__WEBPACK_IMPORTED_MODULE_0_libphonenumber_js__["d" /* parsePhoneNumberFromString */])(this.phone);
        if (parsedPhone && parsedPhone.country) {
          this.activeCountry = parsedPhone.country;
          return;
        }
      }
      /**
       * 2. Use default country if passed from parent
       */
      if (this.defaultCountry) {
        var defaultCountry = this.findCountry(this.defaultCountry);
        if (defaultCountry) {
          this.activeCountry = defaultCountry;
          return;
        }
      }
      /**
       * 3. Use the first country from preferred list (if available) or all countries list
       */
      this.activeCountry = this.findCountry(this.preferredCountries[0]) || this.filteredCountries[0];
      /**
       * 4. Check if fetching country based on user's IP is allowed, set it as the default country
       */
      if (!this.disabledFetchingCountry) {
        Object(__WEBPACK_IMPORTED_MODULE_2__assets_default_country__["a" /* default */])().then(function (res) {
          _this3.activeCountry = _this3.findCountry(res) || _this3.activeCountry;
        });
      }
    },

    /**
     * Get the list of countries from the list of iso2 code
     */
    getCountries: function getCountries() {
      var _this4 = this;

      var list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      return list.map(function (countryCode) {
        return _this4.findCountry(countryCode);
      }).filter(Boolean);
    },
    findCountry: function findCountry() {
      var iso = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      return __WEBPACK_IMPORTED_MODULE_1__assets_all_countries__["a" /* default */].find(function (country) {
        return country.iso2 === iso.toUpperCase();
      });
    },
    getItemClass: function getItemClass(index, iso2) {
      var highlighted = this.selectedIndex === index;
      var lastPreferred = index === this.preferredCountries.length - 1;
      var preferred = !!~this.preferredCountries.map(function (c) {
        return c.toUpperCase();
      }).indexOf(iso2);
      return {
        highlighted: highlighted,
        'last-preferred': lastPreferred,
        preferred: preferred
      };
    },
    choose: function choose(country) {
      this.activeCountry = country;
      if (this.inputOptions && this.inputOptions.showDialCode && country) {
        this.phone = '+' + country.dialCode;
      }
      this.$emit('input', this.response.number, this.response);
      this.$emit('onInput', this.response); // Deprecated
    },
    testCharacters: function testCharacters() {
      var re = /^[\(\)\-\+0-9\s]*$/;
      return re.test(this.phone);
    },
    onInput: function onInput() {
      if (this.validCharactersOnly && !this.testCharacters()) {
        return;
      }
      this.$refs.input.setCustomValidity(this.response.isValid ? '' : this.invalidMsg);
      // Returns response.number to assign it to v-model (if being used)
      // Returns full response for cases @input is used and parent wants to return the whole response.
      this.$emit('input', this.response.number, this.response);
      this.$emit('onInput', this.response); // Deprecated
    },
    onBlur: function onBlur() {
      this.$emit('blur');
      this.$emit('onBlur'); // Deprecated
    },
    onEnter: function onEnter() {
      this.$emit('enter');
      this.$emit('onEnter'); // Deprecated
    },
    onSpace: function onSpace() {
      this.$emit('space');
      this.$emit('onSpace'); // Deprecated
    },
    focus: function focus() {
      this.$refs.input.focus();
    },
    toggleDropdown: function toggleDropdown() {
      if (this.disabled) {
        return;
      }
      this.open = !this.open;
    },
    clickedOutside: function clickedOutside() {
      this.open = false;
    },
    keyboardNav: function keyboardNav(e) {
      var _this5 = this;

      if (e.keyCode === 40) {
        // down arrow
        this.open = true;
        if (this.selectedIndex === null) {
          this.selectedIndex = 0;
        } else {
          this.selectedIndex = Math.min(this.sortedCountries.length - 1, this.selectedIndex + 1);
        }
        var selEle = this.$refs.list.children[this.selectedIndex];
        if (selEle.offsetTop + selEle.clientHeight > this.$refs.list.scrollTop + this.$refs.list.clientHeight) this.$refs.list.scrollTop = selEle.offsetTop - this.$refs.list.clientHeight + selEle.clientHeight;
      } else if (e.keyCode === 38) {
        // up arrow
        this.open = true;
        if (this.selectedIndex === null) {
          this.selectedIndex = this.sortedCountries.length - 1;
        } else {
          this.selectedIndex = Math.max(0, this.selectedIndex - 1);
        }
        var _selEle = this.$refs.list.children[this.selectedIndex];
        if (_selEle.offsetTop < this.$refs.list.scrollTop) this.$refs.list.scrollTop = _selEle.offsetTop;
      } else if (e.keyCode === 13) {
        // enter key
        if (this.selectedIndex !== null) {
          this.choose(this.sortedCountries[this.selectedIndex]);
        }
        this.open = !this.open;
      } else {
        // typing a country's name
        this.typeToFindInput += e.key;
        clearTimeout(this.typeToFindTimer);
        this.typeToFindTimer = setTimeout(function () {
          _this5.typeToFindInput = '';
        }, 700);
        // don't include preferred countries so we jump to the right place in the alphabet
        var typedCountryI = this.sortedCountries.slice(this.preferredCountries.length).findIndex(function (c) {
          return c.name.toLowerCase().startsWith(_this5.typeToFindInput);
        });
        if (~typedCountryI) {
          this.selectedIndex = this.preferredCountries.length + typedCountryI;
          var _selEle2 = this.$refs.list.children[this.selectedIndex];
          if (_selEle2.offsetTop < this.$refs.list.scrollTop || _selEle2.offsetTop + _selEle2.clientHeight > this.$refs.list.scrollTop + this.$refs.list.clientHeight) {
            this.$refs.list.scrollTop = _selEle2.offsetTop - this.$refs.list.clientHeight / 2;
          }
        }
      }
    },
    reset: function reset() {
      this.selectedIndex = this.sortedCountries.map(function (c) {
        return c.iso2;
      }).indexOf(this.activeCountry.iso2);
      this.open = false;
    }
  },
  directives: {
    // Click-outside by BosNaufal: https://github.com/BosNaufal/vue-click-outside
    'click-outside': {
      bind: function bind(el, binding, vNode) {
        // Provided expression must evaluate to a function.
        if (typeof binding.value !== 'function') {
          var compName = vNode.context.name;
          var warn = '[Vue-click-outside:] provided expression ' + binding.expression + ' is not a function, but has to be';
          if (compName) {
            warn += 'Found in component ' + compName;
          }
          console.warn(warn);
        }
        // Define Handler and cache it on the element
        var bubble = binding.modifiers.bubble;
        var handler = function handler(e) {
          // Fall back to composedPath if e.path is undefined
          var path = e.path || e.composedPath && e.composedPath();
          if (bubble || path.length && !el.contains(path[0]) && el !== path[0]) {
            binding.value(e);
          }
        };
        el.__vueClickOutside__ = handler;
        // add Event Listeners
        document.addEventListener('click', handler);
      },
      unbind: function unbind(el, binding) {
        // Remove Event Listeners
        document.removeEventListener('click', el.__vueClickOutside__);
        el.__vueClickOutside__ = null;
      }
    }
  }
});

/***/ }),

/***/ 58:
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib?{"babelrc":false,"presets":[["/root/project/node_modules/babel-preset-poi/index.js",{"jsx":"vue"}]],"cacheDirectory":true}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./demo/App.vue ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'app',
  data: function data() {
    return {
      phone: {
        number: '',
        isValid: false,
        country: undefined
      }
    };
  },

  methods: {
    onInput: function onInput(formattedNumber, _ref) {
      var number = _ref.number,
          isValid = _ref.isValid,
          country = _ref.country;

      this.phone.number = number;
      this.phone.isValid = isValid;
      this.phone.country = country && country.name;
    }
  }
});

/***/ }),

/***/ 59:
/*!*****************************!*\
  !*** multi ./demo/index.js ***!
  \*****************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /root/project/demo/index.js */60);


/***/ }),

/***/ 60:
/*!***********************!*\
  !*** ./demo/index.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(/*! vue */ 61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_vue_tel_input_vue__ = __webpack_require__(/*! ../src/vue-tel-input.vue */ 63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App_vue__ = __webpack_require__(/*! ./App.vue */ 104);





__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component('vue-tel-input', __WEBPACK_IMPORTED_MODULE_1__src_vue_tel_input_vue__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false;

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */](Object.assign({}, __WEBPACK_IMPORTED_MODULE_2__App_vue__["a" /* default */])).$mount('#app');

/***/ }),

/***/ 63:
/*!*******************************!*\
  !*** ./src/vue-tel-input.vue ***!
  \*******************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_babelrc_false_presets_root_project_node_modules_babel_preset_poi_index_js_jsx_vue_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_vue_tel_input_vue__ = __webpack_require__(/*! !babel-loader?{"babelrc":false,"presets":[["/root/project/node_modules/babel-preset-poi/index.js",{"jsx":"vue"}]],"cacheDirectory":true}!../node_modules/vue-loader/lib/selector?type=script&index=0!./vue-tel-input.vue */ 34);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_286e6488_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_vue_tel_input_vue__ = __webpack_require__(/*! !../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-286e6488","hasScoped":true,"buble":{"transforms":{}}}!../node_modules/vue-loader/lib/selector?type=template&index=0!./vue-tel-input.vue */ 103);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(/*! !../node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!vue-style-loader!css-loader?{"autoprefixer":false,"sourceMap":false,"minimize":false}!../node_modules/vue-loader/lib/style-compiler/index?{"vue":true,"id":"data-v-286e6488","scoped":false,"hasInlineConfig":true}!./assets/sprite.css */ 64)
  __webpack_require__(/*! !../node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!vue-style-loader!css-loader?{"autoprefixer":false,"sourceMap":false,"minimize":false}!../node_modules/vue-loader/lib/style-compiler/index?{"vue":true,"id":"data-v-286e6488","scoped":true,"hasInlineConfig":true}!../node_modules/vue-loader/lib/selector?type=styles&index=1!./vue-tel-input.vue */ 65)
}
var normalizeComponent = __webpack_require__(/*! ../node_modules/vue-loader/lib/component-normalizer */ 33)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-286e6488"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_babelrc_false_presets_root_project_node_modules_babel_preset_poi_index_js_jsx_vue_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_vue_tel_input_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_286e6488_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_vue_tel_input_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/vue-tel-input.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-286e6488", Component.options)
  } else {
    hotAPI.reload("data-v-286e6488", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 64:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!./node_modules/vue-style-loader!./node_modules/css-loader?{"autoprefixer":false,"sourceMap":false,"minimize":false}!./node_modules/vue-loader/lib/style-compiler?{"vue":true,"id":"data-v-286e6488","scoped":false,"hasInlineConfig":true}!./src/assets/sprite.css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 65:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!./node_modules/vue-style-loader!./node_modules/css-loader?{"autoprefixer":false,"sourceMap":false,"minimize":false}!./node_modules/vue-loader/lib/style-compiler?{"vue":true,"id":"data-v-286e6488","scoped":true,"hasInlineConfig":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=1!./src/vue-tel-input.vue ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 79:
/*!*************************************!*\
  !*** ./src/assets/all-countries.js ***!
  \*************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// Array of country objects for the flag dropdown.

// Here is the criteria for the plugin to support a given country/territory
// - It has an iso2 code: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
// - It has it's own country calling code (it is not a sub-region of another country): https://en.wikipedia.org/wiki/List_of_country_calling_codes
// - It has a flag in the region-flags project: https://github.com/behdad/region-flags/tree/gh-pages/png
// - It is supported by libphonenumber (it must be listed on this page): https://github.com/googlei18n/libphonenumber/blob/master/resources/ShortNumberMetadata.xml

// Each country array has the following information:
// [
//    Country name,
//    iso2 code,
//    International dial code,
//    Order (if >1 country with same dial code),
//    Area codes
// ]
var allCountries = [['Afghanistan (‫افغانستان‬‎)', 'af', '93'], ['Albania (Shqipëri)', 'al', '355'], ['Algeria (‫الجزائر‬‎)', 'dz', '213'], ['American Samoa', 'as', '1684'], ['Andorra', 'ad', '376'], ['Angola', 'ao', '244'], ['Anguilla', 'ai', '1264'], ['Antigua and Barbuda', 'ag', '1268'], ['Argentina', 'ar', '54'], ['Armenia (Հայաստան)', 'am', '374'], ['Aruba', 'aw', '297'], ['Australia', 'au', '61', 0], ['Austria (Österreich)', 'at', '43'], ['Azerbaijan (Azərbaycan)', 'az', '994'], ['Bahamas', 'bs', '1242'], ['Bahrain (‫البحرين‬‎)', 'bh', '973'], ['Bangladesh (বাংলাদেশ)', 'bd', '880'], ['Barbados', 'bb', '1246'], ['Belarus (Беларусь)', 'by', '375'], ['Belgium (België)', 'be', '32'], ['Belize', 'bz', '501'], ['Benin (Bénin)', 'bj', '229'], ['Bermuda', 'bm', '1441'], ['Bhutan (འབྲུག)', 'bt', '975'], ['Bolivia', 'bo', '591'], ['Bosnia and Herzegovina (Босна и Херцеговина)', 'ba', '387'], ['Botswana', 'bw', '267'], ['Brazil (Brasil)', 'br', '55'], ['British Indian Ocean Territory', 'io', '246'], ['British Virgin Islands', 'vg', '1284'], ['Brunei', 'bn', '673'], ['Bulgaria (България)', 'bg', '359'], ['Burkina Faso', 'bf', '226'], ['Burundi (Uburundi)', 'bi', '257'], ['Cambodia (កម្ពុជា)', 'kh', '855'], ['Cameroon (Cameroun)', 'cm', '237'], ['Canada', 'ca', '1', 1, ['204', '226', '236', '249', '250', '289', '306', '343', '365', '387', '403', '416', '418', '431', '437', '438', '450', '506', '514', '519', '548', '579', '581', '587', '604', '613', '639', '647', '672', '705', '709', '742', '778', '780', '782', '807', '819', '825', '867', '873', '902', '905']], ['Cape Verde (Kabu Verdi)', 'cv', '238'], ['Caribbean Netherlands', 'bq', '599', 1], ['Cayman Islands', 'ky', '1345'], ['Central African Republic (République centrafricaine)', 'cf', '236'], ['Chad (Tchad)', 'td', '235'], ['Chile', 'cl', '56'], ['China (中国)', 'cn', '86'], ['Christmas Island', 'cx', '61', 2], ['Cocos (Keeling) Islands', 'cc', '61', 1], ['Colombia', 'co', '57'], ['Comoros (‫جزر القمر‬‎)', 'km', '269'], ['Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)', 'cd', '243'], ['Congo (Republic) (Congo-Brazzaville)', 'cg', '242'], ['Cook Islands', 'ck', '682'], ['Costa Rica', 'cr', '506'], ['Côte d’Ivoire', 'ci', '225'], ['Croatia (Hrvatska)', 'hr', '385'], ['Cuba', 'cu', '53'], ['Curaçao', 'cw', '599', 0], ['Cyprus (Κύπρος)', 'cy', '357'], ['Czech Republic (Česká republika)', 'cz', '420'], ['Denmark (Danmark)', 'dk', '45'], ['Djibouti', 'dj', '253'], ['Dominica', 'dm', '1767'], ['Dominican Republic (República Dominicana)', 'do', '1', 2, ['809', '829', '849']], ['Ecuador', 'ec', '593'], ['Egypt (‫مصر‬‎)', 'eg', '20'], ['El Salvador', 'sv', '503'], ['Equatorial Guinea (Guinea Ecuatorial)', 'gq', '240'], ['Eritrea', 'er', '291'], ['Estonia (Eesti)', 'ee', '372'], ['Ethiopia', 'et', '251'], ['Falkland Islands (Islas Malvinas)', 'fk', '500'], ['Faroe Islands (Føroyar)', 'fo', '298'], ['Fiji', 'fj', '679'], ['Finland (Suomi)', 'fi', '358', 0], ['France', 'fr', '33'], ['French Guiana (Guyane française)', 'gf', '594'], ['French Polynesia (Polynésie française)', 'pf', '689'], ['Gabon', 'ga', '241'], ['Gambia', 'gm', '220'], ['Georgia (საქართველო)', 'ge', '995'], ['Germany (Deutschland)', 'de', '49'], ['Ghana (Gaana)', 'gh', '233'], ['Gibraltar', 'gi', '350'], ['Greece (Ελλάδα)', 'gr', '30'], ['Greenland (Kalaallit Nunaat)', 'gl', '299'], ['Grenada', 'gd', '1473'], ['Guadeloupe', 'gp', '590', 0], ['Guam', 'gu', '1671'], ['Guatemala', 'gt', '502'], ['Guernsey', 'gg', '44', 1], ['Guinea (Guinée)', 'gn', '224'], ['Guinea-Bissau (Guiné Bissau)', 'gw', '245'], ['Guyana', 'gy', '592'], ['Haiti', 'ht', '509'], ['Honduras', 'hn', '504'], ['Hong Kong (香港)', 'hk', '852'], ['Hungary (Magyarország)', 'hu', '36'], ['Iceland (Ísland)', 'is', '354'], ['India (भारत)', 'in', '91'], ['Indonesia', 'id', '62'], ['Iran (‫ایران‬‎)', 'ir', '98'], ['Iraq (‫العراق‬‎)', 'iq', '964'], ['Ireland', 'ie', '353'], ['Isle of Man', 'im', '44', 2], ['Israel (‫ישראל‬‎)', 'il', '972'], ['Italy (Italia)', 'it', '39', 0], ['Jamaica', 'jm', '1876'], ['Japan (日本)', 'jp', '81'], ['Jersey', 'je', '44', 3], ['Jordan (‫الأردن‬‎)', 'jo', '962'], ['Kazakhstan (Казахстан)', 'kz', '7', 1], ['Kenya', 'ke', '254'], ['Kiribati', 'ki', '686'], ['Kosovo', 'xk', '383'], ['Kuwait (‫الكويت‬‎)', 'kw', '965'], ['Kyrgyzstan (Кыргызстан)', 'kg', '996'], ['Laos (ລາວ)', 'la', '856'], ['Latvia (Latvija)', 'lv', '371'], ['Lebanon (‫لبنان‬‎)', 'lb', '961'], ['Lesotho', 'ls', '266'], ['Liberia', 'lr', '231'], ['Libya (‫ليبيا‬‎)', 'ly', '218'], ['Liechtenstein', 'li', '423'], ['Lithuania (Lietuva)', 'lt', '370'], ['Luxembourg', 'lu', '352'], ['Macau (澳門)', 'mo', '853'], ['Macedonia (FYROM) (Македонија)', 'mk', '389'], ['Madagascar (Madagasikara)', 'mg', '261'], ['Malawi', 'mw', '265'], ['Malaysia', 'my', '60'], ['Maldives', 'mv', '960'], ['Mali', 'ml', '223'], ['Malta', 'mt', '356'], ['Marshall Islands', 'mh', '692'], ['Martinique', 'mq', '596'], ['Mauritania (‫موريتانيا‬‎)', 'mr', '222'], ['Mauritius (Moris)', 'mu', '230'], ['Mayotte', 'yt', '262', 1], ['Mexico (México)', 'mx', '52'], ['Micronesia', 'fm', '691'], ['Moldova (Republica Moldova)', 'md', '373'], ['Monaco', 'mc', '377'], ['Mongolia (Монгол)', 'mn', '976'], ['Montenegro (Crna Gora)', 'me', '382'], ['Montserrat', 'ms', '1664'], ['Morocco (‫المغرب‬‎)', 'ma', '212', 0], ['Mozambique (Moçambique)', 'mz', '258'], ['Myanmar (Burma) (မြန်မာ)', 'mm', '95'], ['Namibia (Namibië)', 'na', '264'], ['Nauru', 'nr', '674'], ['Nepal (नेपाल)', 'np', '977'], ['Netherlands (Nederland)', 'nl', '31'], ['New Caledonia (Nouvelle-Calédonie)', 'nc', '687'], ['New Zealand', 'nz', '64'], ['Nicaragua', 'ni', '505'], ['Niger (Nijar)', 'ne', '227'], ['Nigeria', 'ng', '234'], ['Niue', 'nu', '683'], ['Norfolk Island', 'nf', '672'], ['North Korea (조선 민주주의 인민 공화국)', 'kp', '850'], ['Northern Mariana Islands', 'mp', '1670'], ['Norway (Norge)', 'no', '47', 0], ['Oman (‫عُمان‬‎)', 'om', '968'], ['Pakistan (‫پاکستان‬‎)', 'pk', '92'], ['Palau', 'pw', '680'], ['Palestine (‫فلسطين‬‎)', 'ps', '970'], ['Panama (Panamá)', 'pa', '507'], ['Papua New Guinea', 'pg', '675'], ['Paraguay', 'py', '595'], ['Peru (Perú)', 'pe', '51'], ['Philippines', 'ph', '63'], ['Poland (Polska)', 'pl', '48'], ['Portugal', 'pt', '351'], ['Puerto Rico', 'pr', '1', 3, ['787', '939']], ['Qatar (‫قطر‬‎)', 'qa', '974'], ['Réunion (La Réunion)', 're', '262', 0], ['Romania (România)', 'ro', '40'], ['Russia (Россия)', 'ru', '7', 0], ['Rwanda', 'rw', '250'], ['Saint Barthélemy', 'bl', '590', 1], ['Saint Helena', 'sh', '290'], ['Saint Kitts and Nevis', 'kn', '1869'], ['Saint Lucia', 'lc', '1758'], ['Saint Martin (Saint-Martin (partie française))', 'mf', '590', 2], ['Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)', 'pm', '508'], ['Saint Vincent and the Grenadines', 'vc', '1784'], ['Samoa', 'ws', '685'], ['San Marino', 'sm', '378'], ['São Tomé and Príncipe (São Tomé e Príncipe)', 'st', '239'], ['Saudi Arabia (‫المملكة العربية السعودية‬‎)', 'sa', '966'], ['Senegal (Sénégal)', 'sn', '221'], ['Serbia (Србија)', 'rs', '381'], ['Seychelles', 'sc', '248'], ['Sierra Leone', 'sl', '232'], ['Singapore', 'sg', '65'], ['Sint Maarten', 'sx', '1721'], ['Slovakia (Slovensko)', 'sk', '421'], ['Slovenia (Slovenija)', 'si', '386'], ['Solomon Islands', 'sb', '677'], ['Somalia (Soomaaliya)', 'so', '252'], ['South Africa', 'za', '27'], ['South Korea (대한민국)', 'kr', '82'], ['South Sudan (‫جنوب السودان‬‎)', 'ss', '211'], ['Spain (España)', 'es', '34'], ['Sri Lanka (ශ්‍රී ලංකාව)', 'lk', '94'], ['Sudan (‫السودان‬‎)', 'sd', '249'], ['Suriname', 'sr', '597'], ['Svalbard and Jan Mayen', 'sj', '47', 1], ['Swaziland', 'sz', '268'], ['Sweden (Sverige)', 'se', '46'], ['Switzerland (Schweiz)', 'ch', '41'], ['Syria (‫سوريا‬‎)', 'sy', '963'], ['Taiwan (台灣)', 'tw', '886'], ['Tajikistan', 'tj', '992'], ['Tanzania', 'tz', '255'], ['Thailand (ไทย)', 'th', '66'], ['Timor-Leste', 'tl', '670'], ['Togo', 'tg', '228'], ['Tokelau', 'tk', '690'], ['Tonga', 'to', '676'], ['Trinidad and Tobago', 'tt', '1868'], ['Tunisia (‫تونس‬‎)', 'tn', '216'], ['Turkey (Türkiye)', 'tr', '90'], ['Turkmenistan', 'tm', '993'], ['Turks and Caicos Islands', 'tc', '1649'], ['Tuvalu', 'tv', '688'], ['U.S. Virgin Islands', 'vi', '1340'], ['Uganda', 'ug', '256'], ['Ukraine (Україна)', 'ua', '380'], ['United Arab Emirates (‫الإمارات العربية المتحدة‬‎)', 'ae', '971'], ['United Kingdom', 'gb', '44', 0], ['United States', 'us', '1', 0], ['Uruguay', 'uy', '598'], ['Uzbekistan (Oʻzbekiston)', 'uz', '998'], ['Vanuatu', 'vu', '678'], ['Vatican City (Città del Vaticano)', 'va', '39', 1], ['Venezuela', 've', '58'], ['Vietnam (Việt Nam)', 'vn', '84'], ['Wallis and Futuna (Wallis-et-Futuna)', 'wf', '681'], ['Western Sahara (‫الصحراء الغربية‬‎)', 'eh', '212', 1], ['Yemen (‫اليمن‬‎)', 'ye', '967'], ['Zambia', 'zm', '260'], ['Zimbabwe', 'zw', '263'], ['Åland Islands', 'ax', '358', 1]];

/* harmony default export */ __webpack_exports__["a"] = (allCountries.map(function (country) {
  return {
    name: country[0],
    iso2: country[1].toUpperCase(),
    dialCode: country[2],
    priority: country[3] || 0,
    areaCodes: country[4] || null
  };
}));

/***/ }),

/***/ 80:
/*!***************************************!*\
  !*** ./src/assets/default-country.js ***!
  \***************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var get = __webpack_require__(/*! simple-get */ 81);

var getCountry = function getCountry() {
  return new Promise(function (resolve, reject) {
    get.concat('https://ip2c.org/s', function (error, response, data) {
      // Response: 1;CD;COD;COUNTRY
      if (error) {
        return reject(error);
      }
      var result = (data || '').toString();

      if (!result || result[0] !== '1') {
        return reject(new Error('unable to fetch the country'));
      }

      return resolve(result.substr(2, 2));
    });
  });
};

/* harmony default export */ __webpack_exports__["a"] = (getCountry);

/***/ }),

/***/ 85:
/*!*************************************!*\
  !*** decompress-response (ignored) ***!
  \*************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 87:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 89:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[59]);