require("../../common/manifest.js");
require("../../common/vendor.js");
(global["webpackJsonpMpvue"] = global["webpackJsonpMpvue"] || []).push([["pages/index/main"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/webpack4-mpvue-loader/lib/selector.js?type=script&index=0!./src/components/card.vue":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!(webpack)4-mpvue-loader/lib/selector.js?type=script&index=0!./src/components/card.vue ***!
  \*****************************************************************************************************************************/
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
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "card",
  props: ['data'],
  data: function data() {
    return {};
  },
  methods: {
    linkTo: function linkTo(type) {
      console.log(this.platform);
      var url;
      var temp = this.platform == "h5" ? ["/camera", "/map"] : ["../cameraWx/main", "../mapWx/main"];
      url = type == "camera" ? temp[0] : temp[1];
      console.log(url);

      if (this.platform == 'h5') {
        this.$router.push(url);
      } else {
        global.mpvue.switchTab({
          url: url
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/webpack4-mpvue-loader/lib/selector.js?type=script&index=0!./src/pages/index/index.vue":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!(webpack)4-mpvue-loader/lib/selector.js?type=script&index=0!./src/pages/index/index.vue ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/card */ "./src/components/card.vue");
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    card: _components_card__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      list: [{
        img: "https://cdn.shopify.com/s/files/1/0703/1149/files/ckf_b45e6543-e5d3-4e50-ab10-8cd72b2610c9.jpg?708313",
        title: "product 1",
        des: "Never Lose Your Car Key Again"
      }, {
        img: "https://cdn.shopify.com/s/files/1/0703/1149/files/ckf_b45e6543-e5d3-4e50-ab10-8cd72b2610c9.jpg?708313",
        title: "product 2",
        des: "Never Lose Your Car Key Again"
      }, {
        img: "https://cdn.shopify.com/s/files/1/0703/1149/files/ckf_b45e6543-e5d3-4e50-ab10-8cd72b2610c9.jpg?708313",
        title: "product 3",
        des: "Never Lose Your Car Key Again"
      }]
    };
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!./node_modules/webpack4-mpvue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2cfcf99e\",\"scoped\":true,\"hasInlineConfig\":false}!./node_modules/px2rpx-loader/index.js?{\"baseDpr\":1,\"rpxUnit\":0.5}!./node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!./node_modules/webpack4-mpvue-loader/lib/selector.js?type=styles&index=0!./src/pages/index/index.vue":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!./node_modules/vue-style-loader!./node_modules/css-loader?{"minimize":false,"sourceMap":false}!(webpack)4-mpvue-loader/lib/style-compiler?{"vue":true,"id":"data-v-2cfcf99e","scoped":true,"hasInlineConfig":false}!./node_modules/px2rpx-loader?{"baseDpr":1,"rpxUnit":0.5}!./node_modules/postcss-loader/lib?{"sourceMap":true}!(webpack)4-mpvue-loader/lib/selector.js?type=styles&index=0!./src/pages/index/index.vue ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!./node_modules/webpack4-mpvue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-36a78250\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/px2rpx-loader/index.js?{\"baseDpr\":1,\"rpxUnit\":0.5}!./node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!./node_modules/webpack4-mpvue-loader/lib/selector.js?type=styles&index=0!./src/components/card.vue":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!./node_modules/vue-style-loader!./node_modules/css-loader?{"minimize":false,"sourceMap":false}!(webpack)4-mpvue-loader/lib/style-compiler?{"vue":true,"id":"data-v-36a78250","scoped":false,"hasInlineConfig":false}!./node_modules/px2rpx-loader?{"baseDpr":1,"rpxUnit":0.5}!./node_modules/postcss-loader/lib?{"sourceMap":true}!(webpack)4-mpvue-loader/lib/selector.js?type=styles&index=0!./src/components/card.vue ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/webpack4-mpvue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2cfcf99e\",\"hasScoped\":true,\"transformToRequire\":{\"video\":\"src\",\"source\":\"src\",\"img\":\"src\",\"image\":\"xlink:href\"},\"fileExt\":{\"template\":\"wxml\",\"script\":\"js\",\"style\":\"wxss\",\"platform\":\"wx\"}}!./node_modules/webpack4-mpvue-loader/lib/selector.js?type=template&index=0!./src/pages/index/index.vue":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)4-mpvue-loader/lib/template-compiler?{"id":"data-v-2cfcf99e","hasScoped":true,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"fileExt":{"template":"wxml","script":"js","style":"wxss","platform":"wx"}}!(webpack)4-mpvue-loader/lib/selector.js?type=template&index=0!./src/pages/index/index.vue ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "index"
  }, _vm._l((_vm.list), function(item, key) {
    return _c('div', {
      key: key,
      staticClass: "placeholder"
    }, [_c('card', {
      attrs: {
        "data": item,
        "mpcomid": '0_' + key
      }
    })], 1)
  }))
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["default"] = (esExports);
if (false) {}

/***/ }),

/***/ "./node_modules/webpack4-mpvue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-36a78250\",\"hasScoped\":false,\"transformToRequire\":{\"video\":\"src\",\"source\":\"src\",\"img\":\"src\",\"image\":\"xlink:href\"},\"fileExt\":{\"template\":\"wxml\",\"script\":\"js\",\"style\":\"wxss\",\"platform\":\"wx\"}}!./node_modules/webpack4-mpvue-loader/lib/selector.js?type=template&index=0!./src/components/card.vue":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)4-mpvue-loader/lib/template-compiler?{"id":"data-v-36a78250","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"fileExt":{"template":"wxml","script":"js","style":"wxss","platform":"wx"}}!(webpack)4-mpvue-loader/lib/selector.js?type=template&index=0!./src/components/card.vue ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "weui-flex list-card"
  }, [_c('img', {
    staticClass: "weui-flex__item",
    attrs: {
      "src": _vm.data.img,
      "width": "40%"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "weui-flex__item right"
  }, [_c('h3', [_vm._v(_vm._s(_vm.data.title))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.data.des))]), _vm._v(" "), _c('button', {
    staticClass: "weui-cell_link placeholder-top",
    attrs: {
      "eventid": '2_0'
    },
    on: {
      "click": function($event) {
        _vm.linkTo('camera')
      }
    }
  }, [_vm._v("拍照")]), _vm._v(" "), _c('button', {
    staticClass: "weui-cell_link placeholder-top",
    attrs: {
      "eventid": '2_1'
    },
    on: {
      "click": function($event) {
        _vm.linkTo('map')
      }
    }
  }, [_vm._v("地图")])], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["default"] = (esExports);
if (false) {}

/***/ }),

/***/ "./src/components/card.vue":
/*!*********************************!*\
  !*** ./src/components/card.vue ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_node_modules_webpack4_mpvue_loader_lib_selector_type_script_index_0_card_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader!../../node_modules/webpack4-mpvue-loader/lib/selector?type=script&index=0!./card.vue */ "./node_modules/babel-loader/lib/index.js!./node_modules/webpack4-mpvue-loader/lib/selector.js?type=script&index=0!./src/components/card.vue");
/* harmony import */ var _node_modules_webpack4_mpvue_loader_lib_template_compiler_index_id_data_v_36a78250_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_webpack4_mpvue_loader_lib_selector_type_template_index_0_card_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/webpack4-mpvue-loader/lib/template-compiler/index?{"id":"data-v-36a78250","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"fileExt":{"template":"wxml","script":"js","style":"wxss","platform":"wx"}}!../../node_modules/webpack4-mpvue-loader/lib/selector?type=template&index=0!./card.vue */ "./node_modules/webpack4-mpvue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-36a78250\",\"hasScoped\":false,\"transformToRequire\":{\"video\":\"src\",\"source\":\"src\",\"img\":\"src\",\"image\":\"xlink:href\"},\"fileExt\":{\"template\":\"wxml\",\"script\":\"js\",\"style\":\"wxss\",\"platform\":\"wx\"}}!./node_modules/webpack4-mpvue-loader/lib/selector.js?type=template&index=0!./src/components/card.vue");
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(/*! !../../node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!vue-style-loader!css-loader?{"minimize":false,"sourceMap":false}!../../node_modules/webpack4-mpvue-loader/lib/style-compiler/index?{"vue":true,"id":"data-v-36a78250","scoped":false,"hasInlineConfig":false}!px2rpx-loader?{"baseDpr":1,"rpxUnit":0.5}!postcss-loader?{"sourceMap":true}!../../node_modules/webpack4-mpvue-loader/lib/selector?type=styles&index=0!./card.vue */ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!./node_modules/webpack4-mpvue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-36a78250\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/px2rpx-loader/index.js?{\"baseDpr\":1,\"rpxUnit\":0.5}!./node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!./node_modules/webpack4-mpvue-loader/lib/selector.js?type=styles&index=0!./src/components/card.vue")
}
var normalizeComponent = __webpack_require__(/*! ../../node_modules/webpack4-mpvue-loader/lib/component-normalizer */ "./node_modules/webpack4-mpvue-loader/lib/component-normalizer.js")
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  _babel_loader_node_modules_webpack4_mpvue_loader_lib_selector_type_script_index_0_card_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  _node_modules_webpack4_mpvue_loader_lib_template_compiler_index_id_data_v_36a78250_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_webpack4_mpvue_loader_lib_selector_type_template_index_0_card_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/card.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] card.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./src/pages/index/index.vue":
/*!***********************************!*\
  !*** ./src/pages/index/index.vue ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_node_modules_webpack4_mpvue_loader_lib_selector_type_script_index_0_index_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader!../../../node_modules/webpack4-mpvue-loader/lib/selector?type=script&index=0!./index.vue */ "./node_modules/babel-loader/lib/index.js!./node_modules/webpack4-mpvue-loader/lib/selector.js?type=script&index=0!./src/pages/index/index.vue");
/* harmony import */ var _node_modules_webpack4_mpvue_loader_lib_template_compiler_index_id_data_v_2cfcf99e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_webpack4_mpvue_loader_lib_selector_type_template_index_0_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/webpack4-mpvue-loader/lib/template-compiler/index?{"id":"data-v-2cfcf99e","hasScoped":true,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"fileExt":{"template":"wxml","script":"js","style":"wxss","platform":"wx"}}!../../../node_modules/webpack4-mpvue-loader/lib/selector?type=template&index=0!./index.vue */ "./node_modules/webpack4-mpvue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2cfcf99e\",\"hasScoped\":true,\"transformToRequire\":{\"video\":\"src\",\"source\":\"src\",\"img\":\"src\",\"image\":\"xlink:href\"},\"fileExt\":{\"template\":\"wxml\",\"script\":\"js\",\"style\":\"wxss\",\"platform\":\"wx\"}}!./node_modules/webpack4-mpvue-loader/lib/selector.js?type=template&index=0!./src/pages/index/index.vue");
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(/*! !../../../node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!vue-style-loader!css-loader?{"minimize":false,"sourceMap":false}!../../../node_modules/webpack4-mpvue-loader/lib/style-compiler/index?{"vue":true,"id":"data-v-2cfcf99e","scoped":true,"hasInlineConfig":false}!px2rpx-loader?{"baseDpr":1,"rpxUnit":0.5}!postcss-loader?{"sourceMap":true}!../../../node_modules/webpack4-mpvue-loader/lib/selector?type=styles&index=0!./index.vue */ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!./node_modules/webpack4-mpvue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2cfcf99e\",\"scoped\":true,\"hasInlineConfig\":false}!./node_modules/px2rpx-loader/index.js?{\"baseDpr\":1,\"rpxUnit\":0.5}!./node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!./node_modules/webpack4-mpvue-loader/lib/selector.js?type=styles&index=0!./src/pages/index/index.vue")
}
var normalizeComponent = __webpack_require__(/*! ../../../node_modules/webpack4-mpvue-loader/lib/component-normalizer */ "./node_modules/webpack4-mpvue-loader/lib/component-normalizer.js")
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2cfcf99e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  _babel_loader_node_modules_webpack4_mpvue_loader_lib_selector_type_script_index_0_index_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  _node_modules_webpack4_mpvue_loader_lib_template_compiler_index_id_data_v_2cfcf99e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_webpack4_mpvue_loader_lib_selector_type_template_index_0_index_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/index/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./src/pages/index/main.js":
/*!*********************************!*\
  !*** ./src/pages/index/main.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/mpvue/index.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./src/pages/index/index.vue");

 // add this to handle exception

vue__WEBPACK_IMPORTED_MODULE_0___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new vue__WEBPACK_IMPORTED_MODULE_0___default.a(_index__WEBPACK_IMPORTED_MODULE_1__["default"]);
app.$mount();

/***/ })

},[["./src/pages/index/main.js","common/manifest","common/vendor"]]]);
//# sourceMappingURL=main.js.map