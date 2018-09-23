<template>
  <div>
    <div class="box">
      <div>{{text}}</div>
      <div>
        <button @click='confirm'>Confirm</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['text'],
  methods: {
    confirm () {
      console.log(this.text)
      this.$emit('confirm', this.text)
    }
  }
}
</script>
<style>
.box {
  border: 1px solid steelblue;
  padding: 10px;
  font-size: 20px;
}
</style>

