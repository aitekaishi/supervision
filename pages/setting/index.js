// pages/setting/index.js
Page({
  changeli0: function () {
    tt.navigateTo({ url: `/pages/name/index`, });
  },
  changeli1: function () {
    tt.navigateTo({ url: `/pages/iphone/index`, });
  },
  changeli2: function () {
    tt.navigateTo({ url: `/pages/gray/index`, });
  },
  data: {
    userimage: '',
    name: '',
    iphone: "",
    gray: '',
  },
  onLoad: function (options) {
    this.setData({
      userimage: tt.getStorageSync('userimage'),
      name: tt.getStorageSync('userName'),
      iphone: tt.getStorageSync('iphone'),
      gray: tt.getStorageSync('gray')
    })
  }
})