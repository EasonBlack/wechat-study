
const wsAPI = require('../../utils/wsAPI.js');
const app = getApp();

Page({
  data: {
    animation: ""
  },

  onLoad() {
   

    wsAPI.taskSequence()
      .then(() => wsAPI.showLoading({ title: "保存中" }))
      .then(() => wsAPI.sleep(1000))
      .then(() => wsAPI.hideLoading())
      .then(() => wsAPI.sleep(500))
      .then(() => wsAPI.showLoading({ title: "载入中" }))
      .then(() => wsAPI.sleep(1000))
      .then(() => wsAPI.hideLoading())
      .then(() => console.log("done"))
  },

 
})
