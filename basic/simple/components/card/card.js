
Component({
  properties: {
    name: String,
    num: Number
  },
  methods: {
    onTap(e) {
      this.triggerEvent('cardTap', {name: this.data.name, num: this.data.num}) 
    }
  }
})
