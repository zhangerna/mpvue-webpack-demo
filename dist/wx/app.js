require("./common/manifest.js");
require("./common/vendor.js");
(global["webpackJsonpMpvue"] = global["webpackJsonpMpvue"] || []).push([["app"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/webpack4-mpvue-loader/lib/selector.js?type=script&index=0!./src/App.vue":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!(webpack)4-mpvue-loader/lib/selector.js?type=script&index=0!./src/App.vue ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  created: function created() {
    // 调用API从本地缓存中获取数据

    /*
     * 平台 api 差异的处理方式:  api 方法统一挂载到 mpvue 名称空间, 平台判断通过 mpvuePlatform 特征字符串
     * 微信：mpvue === wx, mpvuePlatform === 'wx'
     * 头条：mpvue === tt, mpvuePlatform === 'tt'
     * 百度：mpvue === swan, mpvuePlatform === 'swan'
     * 支付宝(蚂蚁)：mpvue === my, mpvuePlatform === 'my'
     */
    var logs;

    if (global.mpvuePlatform === 'my') {
      logs = global.mpvue.getStorageSync({
        key: 'logs'
      }).data || [];
      logs.unshift(Date.now());
      global.mpvue.setStorageSync({
        key: 'logs',
        data: logs
      });
    } else {
      logs = global.mpvue.getStorageSync('logs') || [];
      logs.unshift(Date.now());
      global.mpvue.setStorageSync('logs', logs);
    }
  },
  log: function log() {
    console.log("log at:".concat(Date.now()));
  }
});

/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!./node_modules/webpack4-mpvue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-02233068\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/px2rpx-loader/index.js?{\"baseDpr\":1,\"rpxUnit\":0.5}!./node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!./node_modules/webpack4-mpvue-loader/lib/selector.js?type=styles&index=0!./src/App.vue":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!./node_modules/vue-style-loader!./node_modules/css-loader?{"minimize":false,"sourceMap":false}!(webpack)4-mpvue-loader/lib/style-compiler?{"vue":true,"id":"data-v-02233068","scoped":false,"hasInlineConfig":false}!./node_modules/px2rpx-loader?{"baseDpr":1,"rpxUnit":0.5}!./node_modules/postcss-loader/lib?{"sourceMap":true}!(webpack)4-mpvue-loader/lib/selector.js?type=styles&index=0!./src/App.vue ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/App.vue":
/*!*********************!*\
  !*** ./src/App.vue ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_node_modules_webpack4_mpvue_loader_lib_selector_type_script_index_0_App_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader!../node_modules/webpack4-mpvue-loader/lib/selector?type=script&index=0!./App.vue */ "./node_modules/babel-loader/lib/index.js!./node_modules/webpack4-mpvue-loader/lib/selector.js?type=script&index=0!./src/App.vue");
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(/*! !../node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!vue-style-loader!css-loader?{"minimize":false,"sourceMap":false}!../node_modules/webpack4-mpvue-loader/lib/style-compiler/index?{"vue":true,"id":"data-v-02233068","scoped":false,"hasInlineConfig":false}!px2rpx-loader?{"baseDpr":1,"rpxUnit":0.5}!postcss-loader?{"sourceMap":true}!../node_modules/webpack4-mpvue-loader/lib/selector?type=styles&index=0!./App.vue */ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!./node_modules/webpack4-mpvue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-02233068\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/px2rpx-loader/index.js?{\"baseDpr\":1,\"rpxUnit\":0.5}!./node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!./node_modules/webpack4-mpvue-loader/lib/selector.js?type=styles&index=0!./src/App.vue")
}
var normalizeComponent = __webpack_require__(/*! ../node_modules/webpack4-mpvue-loader/lib/component-normalizer */ "./node_modules/webpack4-mpvue-loader/lib/component-normalizer.js")
/* script */

/* template */
var __vue_template__ = null
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  _babel_loader_node_modules_webpack4_mpvue_loader_lib_selector_type_script_index_0_App_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/mpvue/index.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App */ "./src/App.vue");
/* harmony import */ var _style_weui_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style/weui.css */ "./src/style/weui.css");
/* harmony import */ var _style_weui_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_weui_css__WEBPACK_IMPORTED_MODULE_2__);



vue__WEBPACK_IMPORTED_MODULE_0___default.a.config.productionTip = false;
_App__WEBPACK_IMPORTED_MODULE_1__["default"].mpType = 'app';
vue__WEBPACK_IMPORTED_MODULE_0___default.a.prototype.platform = "wx";
var app = new vue__WEBPACK_IMPORTED_MODULE_0___default.a(_App__WEBPACK_IMPORTED_MODULE_1__["default"]);
app.$mount();

/***/ }),

/***/ "./src/style/weui.css":
/*!****************************!*\
  !*** ./src/style/weui.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[["./src/main.js","common/manifest","common/vendor"]]]);
//# sourceMappingURL=app.js.map