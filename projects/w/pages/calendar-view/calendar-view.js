// pages/calendar-view/calendar-view.js
const dayjs = require('../../vendors/dayjs.min.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    year: dayjs().format("YYYY"),
    month: dayjs().format("MM"),
    events: [
      {id: 1, title: "aaa", date: "2019-02-17 10:00"},
      {id: 2, title: "aaa", date: "2019-02-17 12:00"},
      {id: 3, title: "aaa", date: "2019-02-18 10:00"}
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },

  onMonthChange: function(e) {
    let num = e.currentTarget.dataset.num;
    let current = dayjs(new Date(this.data.year, parseInt(this.data.month)-1, 1))
    console.log(current.format("YYYY-MM"))
    let next = current.add(parseInt(num), 'month');
    let _month = next.format("MM");
    let _year = next.format("YYYY");
    console.log(num, _month, _year)
    this.setData({
      year: _year,
      month: _month
    })
  }

})