
Page({
  data: {
    currentPos: 0,
  },

  moveto(e) {
    let num = e.currentTarget.dataset.num;
    this.setData( {
      currentPos: num
    });
  },

  moveNext(e) {
    let cus = this.data.currentPos;
    this.setData( {
      currentPos: cus ? 0: 1,
    });
  },

  onReady() {
  },
})
