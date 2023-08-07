<script setup lang="ts">
import { ref } from 'vue'

const conversationList = ref([
  {
    logo: '1',
    name: '圈子小助手',
    time: '14:02',
    latest: '你好你好你好你好你好你好你好你好你好你好'
  },
  {
    logo: '2',
    name: '社区助手',
    time: '14:02',
    latest: '你有新的消息'
  },
  {
    logo: '3',
    name: 'xx 公司群组',
    time: '昨天',
    latest: '我在我的文件中好桑川了哈哈哈'
  },
  {
    logo: '4',
    name: '升级提醒',
    time: '李组长',
    latest: '好的'
  },
  {
    logo: '5',
    name: '新的好友',
    time: '2月25日',
    latest: '你好单号有大队'
  },
  {
    logo: '6',
    name: '邮箱邮箱邮箱邮箱邮箱邮箱',
    time: '2023年78月98日',
    latest: '暂无'
  },
  {
    logo: '7',
    name: '小秘书',
    time: '9月21日',
    latest: '让你相恨剪完的防静电咖啡机'
  },
  {
    logo: '8',
    name: '哈喽你哈哈喽你哈哈喽你哈哈喽你哈哈喽你哈哈喽你哈',
    time: '03:21',
    latest: '哈哈哈'
  },
  {
    logo: '9',
    name: '圈子小助手',
    time: '14:02',
    latest: '你好你好你好你好你好你好你好你好你好你好'
  },
  {
    logo: '12',
    name: '社区助手',
    time: '14:02',
    latest: '你有新的消息'
  },
  {
    logo: '23',
    name: 'xx 公司群组',
    time: '昨天',
    latest: '我在我的文件中好桑川了哈哈哈'
  },
  {
    logo: '24',
    name: '升级提醒',
    time: '李组长',
    latest: '好的'
  },
  {
    logo: '25',
    name: '新的好友',
    time: '2月25日',
    latest: '你好单号有大队'
  },
  {
    logo: '26',
    name: '邮箱',
    time: '2023年11月12日',
    latest: '暂无'
  },
  {
    logo: '27',
    name: '小秘书',
    time: '9月21日',
    latest: '让你相恨剪完的防静电咖啡机'
  },
  {
    logo: '28',
    name: '哈喽你哈哈喽你哈哈喽你哈哈喽你哈哈喽你哈哈喽你哈',
    time: '03:21',
    latest: '哈哈哈'
  },
  {
    logo: '31',
    name: '圈子小助手',
    time: '14:02',
    latest: '你好你好你好你好你好你好你好你好你好你好'
  },
  {
    logo: '32',
    name: '社区助手',
    time: '14:02',
    latest: '你有新的消息'
  },
  {
    logo: '43',
    name: 'xx 公司群组',
    time: '昨天',
    latest: '我在我的文件中好桑川了哈哈哈'
  },
  {
    logo: '54',
    name: '升级提醒',
    time: '李组长',
    latest: '好的'
  },
  {
    logo: '65',
    name: '新的好友',
    time: '2月25日',
    latest: '你好单号有大队'
  },
  {
    logo: '76',
    name: '邮箱',
    time: '2023年11月12日',
    latest: '暂无'
  },
  {
    logo: '87',
    name: '小秘书',
    time: '9月21日',
    latest: '让你相恨剪完的防静电咖啡机'
  },
  {
    logo: '118',
    name: '哈喽你哈哈喽你哈哈喽你哈哈喽你哈哈喽你哈哈喽你哈',
    time: '03:21',
    latest: '哈哈哈'
  },
  {
    logo: '211',
    name: '圈子小助手',
    time: '14:02',
    latest: '你好你好你好你好你好你好你好你好你好你好'
  },
  {
    logo: '02',
    name: '社区助手',
    time: '14:02',
    latest: '你有新的消息'
  },
  {
    logo: '302',
    name: 'xx 公司群组',
    time: '昨天',
    latest: '我在我的文件中好桑川了哈哈哈'
  },
  {
    logo: '101',
    name: '升级提醒',
    time: '李组长',
    latest: '好的'
  },
  {
    logo: '57',
    name: '新的好友',
    time: '2月25日',
    latest: '你好单号有大队'
  },
  {
    logo: '60',
    name: '邮箱',
    time: '2023年11月12日',
    latest: '暂无'
  },
  {
    logo: '70',
    name: '小秘书',
    time: '9月21日',
    latest: '让你相恨剪完的防静电咖啡机'
  },
  {
    logo: '80',
    name: '哈喽你哈哈喽你哈哈喽你哈哈喽你哈哈喽你哈哈喽你哈',
    time: '03:21',
    latest: '哈哈哈'
  },
]);
</script>

<template>
  <div class="conversation-list">
    <div class="conversation-item" v-for="item in conversationList" :key="item.name">
      <div class="conversation-logo">
        {{ item.logo }}
      </div>
      <div class="conversation-info">
        <div class="conversation-info-name-time">
          <div class="conversation-name">
            {{ item.name }}
          </div>
          <div class="conversation-time">
            {{ item.time }}
          </div>
        </div>
        <div class="conversation-latest">
          {{ item.latest }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.conversation-list {
  .conversation-item {
    display: flex;
    overflow: hidden;
    height: 70px;
    min-width: 260px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-bottom: 1px solid #f2f2f2;

    .conversation-latest {
      min-width: 178px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin-right: 14px;
    }

    .conversation-name {
      flex: 2;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    .conversation-time {
      flex: 2;
      overflow: hidden;
      text-align: right;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    .conversation-info-name-time {
      display: flex;
    }

    .conversation-info {
      flex: 1;
      overflow: hidden;
      font-size: 12px;
      margin: 0 10px 0 8px;
    }

    .conversation-logo {
      width: 36px;
      height: 36px;
      border: 1px solid #f2f2f2;
      border-radius: 50%;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 12px;
    }
  }
}
</style>
