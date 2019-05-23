// pages/message/index.js
Page({
  data: {
    url:'',
  },
  onLoad: function () {
    console.log(tt.getStorageSync('userName'))
    this.setData({
      url:tt.getStorageSync('urlIndex')+"?x_field_1="+tt.getStorageSync('userName')
    })
    console.log(this.data.url)
  },
})