<template>
  <div class="conversation-content">
    <div class="conversation-about">
      <div class="conversation-logo">
        <logo></logo>
      </div>
      <div class="conversation-name">
        李组长
      </div>
    </div>
    <div class="conversation-message-box">
      <message-content></message-content>
    </div>
    <div class="conversation-input-parent">
      <div class="conversation-input-function-zone-box">
        <conversation-input-function-zone></conversation-input-function-zone>
      </div>
      <div class="conversation-input-box">
        <conversation-input></conversation-input>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
 import Logo from './../../../../components/userIcon/index.vue'
 import ConversationInput from './../conversationInput/index.vue'
 import ConversationInputFunctionZone from './../conversationInputFunctionZone/index.vue'
 import MessageContent from './../messageContent/index.vue'
</script>
<style lang="scss" scoped>
.conversation-content {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;

  .conversation-input-function-zone-box {
    height: 52px;
    overflow: hidden;
    display: flex;
    align-items: center;
    max-width: 392px;
    border-right: 1px solid red;
  }

  .conversation-input-box {
    height: calc(100% - 52px);
    padding-bottom: 10px;
    box-sizing: border-box;
  }

  .conversation-input-parent {
    min-height: 188px;
  }

  .conversation-message-box {
    min-height: 384px;
    border-bottom: 1px solid #f0f0f0;
    flex: 1;
    overflow: scroll;
  }
  
  .conversation-name {
    cursor: pointer;
  }

  .conversation-name {
    margin-left: 8px;
    font-size: 14px;
  }

  .conversation-about {
    height: 66px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #f0f0f0;
  }

  .conversation-about, .conversation-message-box, .conversation-input-parent {
    padding: 0 16px;
  }
}
</style>