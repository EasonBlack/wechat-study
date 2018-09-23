<template>
  <div class='card' :style='{
    backgroundColor: bgcolor
  }'>
    <p>
        {{text}}
    </p>
  </div>
</template>

<script>
export default {
  props: ['text', 'bgcolor']
}
</script>

<style scoped>
.card {
  display: flex;
  justify-content: center;
  align-items:center;
  min-width:100%;
  height:300rpx;
  font-size:20rpx;
}
</style>
