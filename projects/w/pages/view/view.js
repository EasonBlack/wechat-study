
const dayjs = require('../../vendors/dayjs.min.js')
const app = getApp();

Page({
  data: {
    
  },


  onReady() {
    console.log(dayjs)
  },

  onGotUserInfo(e) {
    console.log(e.detail.errMsg)
    console.log(e.detail.userInfo)
    console.log(e.detail.rawData)
    console.log(app)
    wx.navigateTo({
      url: "/pages/calendar-view/calendar-view"
    })
  },


})
