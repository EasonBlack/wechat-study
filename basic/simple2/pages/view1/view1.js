
const app  = getApp();

Page({
  data: {
    message: "Hello"
  },
  onLoad() {
    console.log("View1 OnLoad");
    console.log(this)
    console.log(app)
    app.viewCallBack = value => {
      console.log("callback from view1 do sth about " + value + " " + this.data.message)
    }
  },

  onShow() {
    console.log("View1 On Show")
  },

  toView2() {
    wx.redirectTo ({
      url: "/pages/view2/view2"
    })
  }


})
