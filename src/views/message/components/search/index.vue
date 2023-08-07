<script setup lang="ts">
import { ElInput } from 'element-plus';
import { ref } from 'vue';

const searchValue = ref('')
</script>

<template>
  <div class="search-component">
    <el-input v-model="searchValue" placeholder="搜索" clearable class="search"></el-input>
  </div>
</template>

<style lang="scss" scoped>
.search-component {
    width: 100%;
    height: 100%;
  -webkit-app-region: no-drag;

    :deep(.el-input) {
      width: 100%;
      height: 100%;
    }

  :deep(.el-input__wrapper) {
    // width: 178px;
    // height: 34px;
    width: 100%;
    height: 100%;
    border-radius: 16px;
    padding: 0 12px;
  }
}
</style>
