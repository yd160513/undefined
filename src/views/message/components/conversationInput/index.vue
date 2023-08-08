<script setup lang="ts">
import { ref } from "vue";

const value = ref('')
</script>

<template>
<div class="conversation-input">
  <ElInput type="textarea" resize="none" v-model="value"></ElInput>
</div>
</template>

<style lang="scss" scoped>
.conversation-input {
  height: 100%;

  :deep(.el-textarea) {
    height: 100%;

    .el-textarea__inner {
      height: 100%;
    }
  }
}
</style>
