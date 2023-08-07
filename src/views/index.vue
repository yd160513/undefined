<template>
  <div class="main-window-view">
    <div v-if="isWindows" class="windows-title-bar">
      <title-bar></title-bar>
    </div>
    <div class="left-title">
      <div class="user-icon-box">
        <user-icon></user-icon>
      </div>
      <div class="left-menus-box">
        <left-menus></left-menus>
      </div>
    </div>
    <div class="right-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import TitleBar from './../components/titleBar/index.vue';
import { computed } from "vue";
import { isWindowsPlatform } from './../utils/index';
import LeftMenus from '../components/leftMenus/index.vue';
import UserIcon from './../components/userIcon/index.vue';

const isWindows = computed(() => {
  return isWindowsPlatform()
})

</script>


<style lang="scss" scoped>
.main-window-view {
  height: 100%;
  display: flex;
}
.right-content {
  flex: 1;
  overflow: hidden;
}

.user-icon-box {
  height: 88px;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-app-region: drag;
}

.left-title {
  background: #027DFB;
  width: 65px;
  height: 100%;
  overflow: hidden;
}
</style>
