const app = getApp();
Page({
  data: {
    defaultImg: app.config.defaultImg,
    animationData: "",
    animationContent: "",
    isContentDisplay: false
  },

  onLoad() {
    
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: "ease",
      delay: 0,
    })
   
    animation.opacity(0).step();
    
    setTimeout(()=>{
      this.setData({
        animationData: animation.export(),
      }, () => {
        setTimeout(() => {
          this.setData({
            animationContent: animation.opacity(1).step().export(),
            isContentDisplay: true
            //defaultImg: "/images/2.png"
          })
        }, 1000)

      })
    }, 1000)
    
  },

 
})
