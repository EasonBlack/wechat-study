//app.js
App({
  onLaunch: function () {
    console.log("OnLaunch");
    console.log(Object.assign({},this))
    
    setTimeout(()=>{
    console.log(this)
     if (this.viewCallBack){
        console.log("OnLaunch Start CallBack")
        this.viewCallBack("test");
     }
     console.log("OnLaunch Async Finish")

    }, 2000)
    
  },


  // viewCallBack(value) {
  //   console.log(`callback from app ${value}`)
  // }
})