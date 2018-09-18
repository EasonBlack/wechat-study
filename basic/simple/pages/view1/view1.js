
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
  },

  cardTap(obj) {
    console.log(obj.detail.name, obj.detail.num);
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
