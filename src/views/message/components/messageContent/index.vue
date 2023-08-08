<script setup lang="ts">
import { Ref, ref } from "vue";
import Logo from './../../../../components/userIcon/index.vue'

type MessageType = 'text' | 'video'

type MessageItem = {
  isSelf: boolean
  messageId: number
  messageType: MessageType
  extra: {
    logo: string
    content: string
  }
}

const messageItem: MessageItem = {
  isSelf: true,
  messageId: 0,
  messageType: 'text',
  extra: {
    logo: '',
    content: '久啊发快递垃圾风口浪尖久啊发快递垃圾风口浪尖久啊发快递垃圾风口浪尖久啊发快递垃圾风口浪尖久啊发快递垃圾风口浪尖久啊发快递垃圾风口浪尖久啊发快递垃圾风口浪尖久啊发快递垃圾风口浪尖久啊发快递垃圾风口浪尖久啊发快递垃圾风口浪尖久啊发快递垃圾风口浪尖久啊发快递垃圾风口浪尖久啊发快递垃圾风口浪尖久啊发快递垃圾风口浪尖久啊发快递垃圾风口浪尖久啊发快递垃圾风口浪尖久啊发快递垃圾风口浪尖久啊发快递垃圾风口浪尖久啊发快递垃圾风口浪尖久啊发快递垃圾风口浪尖久啊发快递垃圾风口浪尖久啊发快递垃圾风口浪尖久啊发快递垃圾风口浪尖久啊发快递垃圾风口浪尖久啊发快递垃圾风口浪尖久啊发快递垃圾风口浪尖久啊发快递垃圾风口浪尖久啊发快递垃圾风口浪尖'
  }
}
const messageList: Ref<MessageItem[]> = ref([])

for (let i = 0; i < 10; i++) {
  messageList.value[i] = {
    ...messageItem,
    messageId: i,
    isSelf: i % 3 === 0,
    extra: {
      ...messageItem.extra,
      content: `${i}+${messageItem.extra.content}`
    }
  }
}

</script>

<template>
<div class="message-content">
  <div v-for="item in messageList" :key="item.messageId" :class="['message-item', item.isSelf && 'is-self']">
    <div class="user-logo">
      <logo></logo>
    </div>
    <div :class="['message-self', item.isSelf ? 'self' : 'other']">
      {{ item.extra.content }}
    </div>
  </div>
</div>
</template>

<style lang="scss" scoped>
.message-content {
  font-size: 14px;

  &:last-child {
    margin-bottom: 32px;
  }

  .message-self {
    overflow: hidden;
    padding: 16px 8px;
  }

  .self {
    margin-right: 16px;
    margin-left: 120px;
    background: #027dfb;
    border-radius: 6px;
  }

  .other {
    margin-left: 16px;
    margin-right: 120px;
    background: #ffffff;
    border-radius: 6px;
    color: #7f7f7f;
  }

  .is-self {
    flex-direction: row-reverse;
  }

  .message-item {
    display: flex;
    margin-top: 32px;
  }
}
</style>
