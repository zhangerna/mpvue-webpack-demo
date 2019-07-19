require("../../common/manifest.js");
require("../../common/vendor.js");
(global["webpackJsonpMpvue"] = global["webpackJsonpMpvue"] || []).push([["pages/cameraWx/main"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/webpack4-mpvue-loader/lib/selector.js?type=script&index=0!./src/pages/cameraWx/index.vue":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!(webpack)4-mpvue-loader/lib/selector.js?type=script&index=0!./src/pages/cameraWx/index.vue ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  data: function data() {
    return {
      image: ""
    };
  },
  methods: {
    takePhoto: function takePhoto() {
      var self = this;
      wx.createCameraContext().takePhoto({
        quality: 'high',
        success: function success(res) {
          console.log(res.tempImagePath);
          self.image = res.tempImagePath;
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!./node_modules/webpack4-mpvue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-47c07f86\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/px2rpx-loader/index.js?{\"baseDpr\":1,\"rpxUnit\":0.5}!./node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!./node_modules/webpack4-mpvue-loader/lib/selector.js?type=styles&index=0!./src/pages/cameraWx/index.vue":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!./node_modules/vue-style-loader!./node_modules/css-loader?{"minimize":false,"sourceMap":false}!(webpack)4-mpvue-loader/lib/style-compiler?{"vue":true,"id":"data-v-47c07f86","scoped":false,"hasInlineConfig":false}!./node_modules/px2rpx-loader?{"baseDpr":1,"rpxUnit":0.5}!./node_modules/postcss-loader/lib?{"sourceMap":true}!(webpack)4-mpvue-loader/lib/selector.js?type=styles&index=0!./src/pages/cameraWx/index.vue ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/webpack4-mpvue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-47c07f86\",\"hasScoped\":false,\"transformToRequire\":{\"video\":\"src\",\"source\":\"src\",\"img\":\"src\",\"image\":\"xlink:href\"},\"fileExt\":{\"template\":\"wxml\",\"script\":\"js\",\"style\":\"wxss\",\"platform\":\"wx\"}}!./node_modules/webpack4-mpvue-loader/lib/selector.js?type=template&index=0!./src/pages/cameraWx/index.vue":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)4-mpvue-loader/lib/template-compiler?{"id":"data-v-47c07f86","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"fileExt":{"template":"wxml","script":"js","style":"wxss","platform":"wx"}}!(webpack)4-mpvue-loader/lib/selector.js?type=template&index=0!./src/pages/cameraWx/index.vue ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "camera"
  }, [_c('camera', {
    staticStyle: {
      "width": "100%",
      "height": "300px"
    },
    attrs: {
      "device-position": "back",
      "flash": "off",
      "binderror": "error",
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('button', {
    attrs: {
      "eventid": '1_0'
    },
    on: {
      "click": function($event) {
        _vm.takePhoto()
      }
    }
  }, [_vm._v("拍照")]), _vm._v(" "), _c('image', {
    attrs: {
      "mode": "widthFix",
      "src": _vm.image
    }
  })], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["default"] = (esExports);
if (false) {}

/***/ }),

/***/ "./src/pages/cameraWx/index.vue":
/*!**************************************!*\
  !*** ./src/pages/cameraWx/index.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_node_modules_webpack4_mpvue_loader_lib_selector_type_script_index_0_index_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader!../../../node_modules/webpack4-mpvue-loader/lib/selector?type=script&index=0!./index.vue */ "./node_modules/babel-loader/lib/index.js!./node_modules/webpack4-mpvue-loader/lib/selector.js?type=script&index=0!./src/pages/cameraWx/index.vue");
/* harmony import */ var _node_modules_webpack4_mpvue_loader_lib_template_compiler_index_id_data_v_47c07f86_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_webpack4_mpvue_loader_lib_selector_type_template_index_0_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/webpack4-mpvue-loader/lib/template-compiler/index?{"id":"data-v-47c07f86","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"fileExt":{"template":"wxml","script":"js","style":"wxss","platform":"wx"}}!../../../node_modules/webpack4-mpvue-loader/lib/selector?type=template&index=0!./index.vue */ "./node_modules/webpack4-mpvue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-47c07f86\",\"hasScoped\":false,\"transformToRequire\":{\"video\":\"src\",\"source\":\"src\",\"img\":\"src\",\"image\":\"xlink:href\"},\"fileExt\":{\"template\":\"wxml\",\"script\":\"js\",\"style\":\"wxss\",\"platform\":\"wx\"}}!./node_modules/webpack4-mpvue-loader/lib/selector.js?type=template&index=0!./src/pages/cameraWx/index.vue");
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(/*! !../../../node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!vue-style-loader!css-loader?{"minimize":false,"sourceMap":false}!../../../node_modules/webpack4-mpvue-loader/lib/style-compiler/index?{"vue":true,"id":"data-v-47c07f86","scoped":false,"hasInlineConfig":false}!px2rpx-loader?{"baseDpr":1,"rpxUnit":0.5}!postcss-loader?{"sourceMap":true}!../../../node_modules/webpack4-mpvue-loader/lib/selector?type=styles&index=0!./index.vue */ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!./node_modules/webpack4-mpvue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-47c07f86\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/px2rpx-loader/index.js?{\"baseDpr\":1,\"rpxUnit\":0.5}!./node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!./node_modules/webpack4-mpvue-loader/lib/selector.js?type=styles&index=0!./src/pages/cameraWx/index.vue")
}
var normalizeComponent = __webpack_require__(/*! ../../../node_modules/webpack4-mpvue-loader/lib/component-normalizer */ "./node_modules/webpack4-mpvue-loader/lib/component-normalizer.js")
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  _babel_loader_node_modules_webpack4_mpvue_loader_lib_selector_type_script_index_0_index_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  _node_modules_webpack4_mpvue_loader_lib_template_compiler_index_id_data_v_47c07f86_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_webpack4_mpvue_loader_lib_selector_type_template_index_0_index_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/cameraWx/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./src/pages/cameraWx/main.js":
/*!************************************!*\
  !*** ./src/pages/cameraWx/main.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/mpvue/index.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./src/pages/cameraWx/index.vue");


var app = new vue__WEBPACK_IMPORTED_MODULE_0___default.a(_index__WEBPACK_IMPORTED_MODULE_1__["default"]);
app.$mount();

/***/ })

},[["./src/pages/cameraWx/main.js","common/manifest","common/vendor"]]]);
//# sourceMappingURL=main.js.map