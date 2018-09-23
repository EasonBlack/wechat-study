<template>
  <div class="container">
    <div class='image-wrapper'>
      <div class='image-list' @tap="imageTapHandle" 
        :style="{ left : '-' + currentPos * 100 + '%'}"
      >
        <card :bgcolor="'steelblue'" :text="'#1'"/>
        <card :bgcolor="'lightgreen'"  :text="'#2'"/>
        <card :bgcolor="'lightsalmon'" :text="'#3'"/>
      </div>
    </div>
    <bottom-image />
  </div>
</template>

<script>

import card from '@/components/card'
import bottomImage from './bottom-image'
export default {
  data () {
    return {
      currentPos: 0
    }
  },

  components: {
    card, bottomImage
  },

  methods: {
    imageTapHandle () {
      this.currentPos = (this.currentPos + 1) % 3
    },

    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              console.log(res)
              this.userInfo = res.userInfo
            }
          })
        }
      })
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
  }
}
</script>

<style scoped>
.container {
  position:relative;
  height: 100vh;
  overflow:hidden;
}

.image-wrapper {
  width:100%;
  position:relative;
  overflow: hidden;
  height:300rpx;
}

.image-list {
  width:auto;
  display:flex;
  position:absolute;
  top:0;
  width:100%;
  transition: all 0.5s ease;
}
</style>
