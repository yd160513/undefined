<template>
  <div class="message-box">
    <div class="message-left">
      <div class="function-box">
        <div class="search-box">
          <search></search>
        </div>
        <div class="more-box">
          <more></more>
        </div>
      </div>
      <div class="conversation-list-box">
        <conversation-list></conversation-list>
      </div>
    </div>
    <div class="conversation-content-box">
      <conversation-content></conversation-content>
    </div>
  </div>
</template>
<script setup lang="ts">
import Search from './components/search/index.vue';
import More from './components/more/index.vue';
import ConversationList from './components/conversationList/index.vue'
import ConversationContent from './components/conversationContent/index.vue';
</script>
<style lang="scss" scoped>
.message-box {
  height: 100%;
  display: flex;

  .conversation-list-box {
    height: calc(100% - 67px);
    overflow-y: scroll;
  }

  .conversation-content-box {
    flex: 1;
    height: 100%;
    overflow-y: hidden;
  }

  .message-left {
    width: 260px;
    height: 100%;
    border-right: 1px solid #f2f2f2;
  }

  .function-box {
    height: 66px;
    border-bottom: 1px solid #F2F2F2;
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-app-region: drag;

    .more-box {
      margin-left: 16px;
    }

    .search-box {
      width: 178px;
      height: 34px;
    }
  }
}
</style>