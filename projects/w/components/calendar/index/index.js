
// components/calendar/calendar.js
const dayjs = require('../../../vendors/dayjs.min.js')

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    year: {
      type: Number
    },
    month: {
      type: Number
    },
    events: {
      type: Array
    },
    yearmonth: {
      type: String,
      observer: "initData"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    daySpan: 0,
    dates: [],
    start: null,
    end: null, 
    test: 10
  },

 

  lifetimes: {

  },
  

  /**
   * 组件的方法列表
   */
  methods: {

    initData() {
      let _year = this.data.year;
      let _month = this.data.month;
      let _events = this.data.events;

      let start = dayjs(new Date(_year, _month - 1, 1)).startOf('week').format('YYYY-MM-DD');
      let monthend = dayjs(new Date(_year, _month - 1, 1)).endOf('month').format('YYYY-MM-DD');
      let end = dayjs(monthend).endOf('week').format('YYYY-MM-DD');
      let span = dayjs(end).diff(dayjs(start), "day");

      let _dates = []
      for(let i = 0;i<span+1;i++) {
        let d = dayjs(start).add(i, 'day');
        let m = parseInt(d.format("M"));
        let isInMonth = _month === m ? "in" : "out"
        let _e = _events.filter(e=>e.date.split(' ')[0]===d.format("YYYY-MM-DD"))
        _dates.push({
          date: d.format('YYYY-MM-DD'),
          day: d.format('DD'),
          events: _e,
          extraClass: isInMonth
        })
      }
      this.setData({
        dates: _dates,
        daySpan: span + 1,
        start: start,
        end: end
      })

    }
    
  },

  
})
