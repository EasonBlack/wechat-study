
Page({
  data: {
    currentNav: 0,
    navIndex: 0,
    containerH: 0,
    heightArr: [],
    items: [
      {
        name: "aaaaa",
        children: [
          { name: "a1" },
          { name: "a2" },
          { name: "a3" },
          { name: "a4" },
          { name: "a5" },
          { name: "a6" },
          { name: "a7" }
        ]
      }, {
        name: "bbbbb",
        children: [
          { name: "b1" },
          { name: "b2" },
          { name: "b3" },
          { name: "b4" },
          { name: "b5" },
          { name: "b6" },
          { name: "b7" }
        ]
      }, {
        name: "ccccc",
        children: [
          { name: "c1" },
          { name: "c2" },
          { name: "c3" },
          { name: "c4" },
          { name: "c5" },
          { name: "c6" },
          { name: "c7" }
        ]
      }, {
        name: "ddddd",
        children: [
          { name: "d1" },
          { name: "d2" },
          { name: "d3" },
          { name: "d4" },
          { name: "d5" },
          { name: "d6" },
          { name: "d7" }
        ]
      }
    ]
  },

  onReady() {
    let query = wx.createSelectorQuery().in(this);
    let heightArr = [];
    let s = 0;

    query.selectAll('.content-type').boundingClientRect((react) => {
      react.forEach(res => {
        s += res.height;
        heightArr.push(s)
      })
      this.setData({
        heightArr: heightArr
      })
      console.log(heightArr);
    })
    query.select('.right-content').boundingClientRect(res => {
      this.setData({
        containerH: res.height
      })
      console.log(res.height);
    }).exec();
   
   
  },

  onMenuSelect(e) {
    this.setData({
      currentNav: `${e.currentTarget.dataset.nav}`,
      navIndex: `${e.currentTarget.dataset.nav}`,
    })
  },

  onContentScroll(e) {
  
    let scrollTop = e.detail.scrollTop;
    let scrollArr = this.data.heightArr;

    for (let i = 0; i < scrollArr.length; i++) {
      if (scrollTop >= 0 && scrollTop < scrollArr[0]) {
        console.log(scrollTop, scrollArr[0])
        this.setData({
          navIndex: 0
        })
      } else if (scrollTop >= scrollArr[i - 1] && scrollTop < scrollArr[i]) {
        this.setData({
          navIndex: i
        })
      }
    }
  }


})
