// components/calendar/date/date.js

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    day: String,
    events: Array,
    start: String,
    month: Number,
    extraClass: String
  },

  /**
   * 组件的初始数据
   */
  data: {
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onDateTap() {
      let _month = this.data.month > 9 ?this.data.month.toString() : "0" + this.data.month.toString(); 
      wx.navigateTo({
        url: `/pages/date-event/date-event?date=${_month + "-" + this.data.day.toString()}`
      });
    }
  },

  lifetimes: {

    ready() {
    }

  }
})
