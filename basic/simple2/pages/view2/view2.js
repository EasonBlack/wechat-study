
const app  = getApp();

Page({
  data: {
    
  },

  onLoad() {
    console.log("View 2 OnLoad");
  },

  onShow() {
    console.log('View 2 Show');
  },

  toView1() {
    wx.redirectTo({
      url: "/pages/view1/view1"
    })
  }




})
