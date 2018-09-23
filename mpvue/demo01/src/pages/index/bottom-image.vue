<template>
  <div class="bottom-image" :class="{ intop: isTop}">
    <div class='bottom-info' @tap='bottomTapHandle'>
      <h1>Hello World</h1>
      <p>Please don't bother me!</p>
    </div>
    <div class='image-list-wrapper'>
      <div class='image-list'>
        <card :bgcolor="'steelblue'" :text="'#1'"/>
        <card :bgcolor="'lightgreen'"  :text="'#2'"/>
        <card :bgcolor="'lightsalmon'" :text="'#3'"/>
      </div>
    </div>
    
  </div>
</template>

<script>

import card from '@/components/card'
export default {
  data () {
    return {
      isTop: false
    }
  },
  components: { card },
  methods: {
    bottomTapHandle () {
      this.isTop = !this.isTop
    }
  }
}
</script>

<style scoped>
.bottom-image {
  position:absolute;
  bottom:-100rpx;
  left: 0;
  right: 0;
  height:230rpx;
  transition: all 0.5s ease;
}
.bottom-image.intop {
  bottom:200rpx;
}

.bottom-image p {
  color: #ccc;
  overflow: auto;
}

.image-list-wrapper {
  overflow: auto;
  height:300rpx;
}


</style>
