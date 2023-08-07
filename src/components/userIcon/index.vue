<script setup lang="ts">
const userIconPath = './../../assets/vue.svg'
</script>

<template>
  <div class="user-icon">
    <img :src="userIconPath" alt="">
  </div>
</template>

<style lang="scss" scoped>
.user-icon {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  -webkit-app-region: no-drag;

  img {
    width: 100%;
  }
}
</style>
