const dayjs  = require('dayjs')

Page({
  data: {
    items: [
      {name: "aaa", num: 1},
      {name: "bbb", num: 2},
      {name: "ccc", num: 3},
      {name: "ddd", num: 4},
      {name: "eee", num: 1}
    ]
  },

  onReady() {
    console.log(dayjs().format('YYYY-MM-DD'))
  },

  cardTap(obj) {
    console.log(obj.detail.name, obj.detail.num);
  },

  jumpTo(e) {
    let page = e.currentTarget.dataset.page;
    wx.navigateTo({
      url: `../${page}/${page}`
    })
  },

  deleteItem() {
    const self = this;
    wx.showModal({
      title: 'Delete',
      content: 'Are you sure',
      confirmText: 'Confirm',
      cancelText: 'Cancel',
      success: function (result) {
        console.log(result);
        if (result.confirm) {
          console.log('config');
        } else {
          console.log('cancel');
        }
      }
    });
  }
})
