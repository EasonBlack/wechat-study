
Page({
  data: {
    flag: 0,
    items: [
      {name: "1.png"},
      {name: "2.png"}
    ]
  },

  moveNext(e) {
    let _items = [...this.data.items];
    let lastItem = _items.shift();
    let newItems = [..._items, lastItem];
    //let extraItems = [...this.data.items, lastItem]
    this.setData({
      flag: -1
    }, ()=>{

      setTimeout(()=>{
          this.setData({
            flag: 0,
            items: [..._items]
          }, ()=>{
            this.setData({
              items: [...newItems]
            })
          })
      }, 300)
      
    })

  },

  onReady() {
  },
})
