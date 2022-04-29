"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      goodsList: [
        {
          image: "https://img13.360buyimg.com/n8/jfs/t1/30343/20/1029/481370/5c449438Ecb46a15b/2b2adccb6dc742fd.jpg",
          image2: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553418265666&di=d4a7f7eb0ae3c859edeb921641ee1c3a&imgtype=0&src=http%3A%2F%2Fimg003.hc360.cn%2Fy3%2FM02%2FF8%2F9F%2FwKhQh1TuSkGELIlQAAAAAPuLl4M987.jpg",
          image3: "http://img.ef43.com.cn/product/2016/8/05100204b0c.jpg",
          title: "\u5A07\u8BD7\u8339 ulzzang\u539F\u5BBF\u98CE\u5B66\u751F\u6F6E\u97E9\u7248\u6625\u590F\u77ED",
          price: 422,
          sales: 137
        },
        {
          image: "https://img13.360buyimg.com/n8/jfs/t1/30343/20/1029/481370/5c449438Ecb46a15b/2b2adccb6dc742fd.jpg",
          image2: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553418265666&di=d4a7f7eb0ae3c859edeb921641ee1c3a&imgtype=0&src=http%3A%2F%2Fimg003.hc360.cn%2Fy3%2FM02%2FF8%2F9F%2FwKhQh1TuSkGELIlQAAAAAPuLl4M987.jpg",
          image3: "http://img.ef43.com.cn/product/2016/8/05100204b0c.jpg",
          title: "\u5A07\u8BD7\u8339 ulzzang\u539F\u5BBF\u98CE\u5B66\u751F\u6F6E\u97E9\u7248\u6625\u590F\u77ED",
          price: 422,
          sales: 137
        },
        {
          image: "https://img13.360buyimg.com/n8/jfs/t1/30343/20/1029/481370/5c449438Ecb46a15b/2b2adccb6dc742fd.jpg",
          image2: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553418265666&di=d4a7f7eb0ae3c859edeb921641ee1c3a&imgtype=0&src=http%3A%2F%2Fimg003.hc360.cn%2Fy3%2FM02%2FF8%2F9F%2FwKhQh1TuSkGELIlQAAAAAPuLl4M987.jpg",
          image3: "http://img.ef43.com.cn/product/2016/8/05100204b0c.jpg",
          title: "\u5A07\u8BD7\u8339 ulzzang\u539F\u5BBF\u98CE\u5B66\u751F\u6F6E\u97E9\u7248\u6625\u590F\u77ED",
          price: 422,
          sales: 137
        },
        {
          image: "https://img13.360buyimg.com/n8/jfs/t1/30343/20/1029/481370/5c449438Ecb46a15b/2b2adccb6dc742fd.jpg",
          image2: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553418265666&di=d4a7f7eb0ae3c859edeb921641ee1c3a&imgtype=0&src=http%3A%2F%2Fimg003.hc360.cn%2Fy3%2FM02%2FF8%2F9F%2FwKhQh1TuSkGELIlQAAAAAPuLl4M987.jpg",
          image3: "http://img.ef43.com.cn/product/2016/8/05100204b0c.jpg",
          title: "\u5A07\u8BD7\u8339 ulzzang\u539F\u5BBF\u98CE\u5B66\u751F\u6F6E\u97E9\u7248\u6625\u590F\u77ED",
          price: 422,
          sales: 137
        },
        {
          image: "https://img13.360buyimg.com/n8/jfs/t1/30343/20/1029/481370/5c449438Ecb46a15b/2b2adccb6dc742fd.jpg",
          image2: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553418265666&di=d4a7f7eb0ae3c859edeb921641ee1c3a&imgtype=0&src=http%3A%2F%2Fimg003.hc360.cn%2Fy3%2FM02%2FF8%2F9F%2FwKhQh1TuSkGELIlQAAAAAPuLl4M987.jpg",
          image3: "http://img.ef43.com.cn/product/2016/8/05100204b0c.jpg",
          title: "\u5A07\u8BD7\u8339 ulzzang\u539F\u5BBF\u98CE\u5B66\u751F\u6F6E\u97E9\u7248\u6625\u590F\u77ED",
          price: 422,
          sales: 137
        },
        {
          image: "https://img13.360buyimg.com/n8/jfs/t1/30343/20/1029/481370/5c449438Ecb46a15b/2b2adccb6dc742fd.jpg",
          image2: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553418265666&di=d4a7f7eb0ae3c859edeb921641ee1c3a&imgtype=0&src=http%3A%2F%2Fimg003.hc360.cn%2Fy3%2FM02%2FF8%2F9F%2FwKhQh1TuSkGELIlQAAAAAPuLl4M987.jpg",
          image3: "http://img.ef43.com.cn/product/2016/8/05100204b0c.jpg",
          title: "\u5A07\u8BD7\u8339 ulzzang\u539F\u5BBF\u98CE\u5B66\u751F\u6F6E\u97E9\u7248\u6625\u590F\u77ED",
          price: 422,
          sales: 137
        }
      ]
    };
  },
  methods: {
    navToSearchPage() {
      common_vendor.index.navigateTo({
        url: "../goods/search/search"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.navToSearchPage && $options.navToSearchPage(...args)),
    b: common_vendor.f($data.goodsList, (item, index, i0) => {
      return {
        a: item.image,
        b: common_vendor.t(item.title),
        c: common_vendor.t(item.price),
        d: common_vendor.t(item.sales),
        e: index,
        f: common_vendor.o(($event) => _ctx.navToDetailPage(item))
      };
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/mycode/myapp/pages/home/home.vue"]]);
wx.createPage(MiniProgramPage);
