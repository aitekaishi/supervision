// pages/name/index.js
Page({
  formName: function (e) {
    this.setData({
      value: e.detail.value
    })
  },
  tapname: function () {
    tt.setStorageSync('userName', this.data.value);
    tt.navigateTo({ url: `/pages/index/index`, });
  },
  data: {
    value: ''
  },
  onLoad: function (options) {
    this.setData({
      value: tt.getStorageSync('userName'),
    })
  }
})