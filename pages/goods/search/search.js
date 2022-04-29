"use strict";
var common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {}
};
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  _easycom_uni_search_bar2();
}
const _easycom_uni_search_bar = () => "../../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
if (!Math) {
  _easycom_uni_search_bar();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(_ctx.search),
    b: common_vendor.p({
      radius: "100",
      bgColor: "rgba(166,166,166,.2)",
      cancelButton: "none",
      placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9"
    }),
    c: common_vendor.t(_ctx.item),
    d: common_vendor.t(_ctx.item)
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/mycode/myapp/pages/goods/search/search.vue"]]);
wx.createPage(MiniProgramPage);
