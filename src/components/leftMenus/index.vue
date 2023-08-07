<script setup lang="ts">
import { ref, Ref } from "vue";
import { useRouter } from "vue-router";

type Menu = {
  icon: string
  name: string
  path?: string
}

const router = useRouter()

const menus: Ref<Menu[]> = ref([
  {
    icon: '',
    name: '消息',
    path: 'message'
  },
  {
    icon: '',
    name: '文档'
  },
  {
    icon: '',
    name: '下载'
  },
  {
    icon: '',
    name: '上传'
  }
]);

const changePage = (menu: Menu) => {
  router.push({
    name: menu.path
  })
}

</script>

<template>
  <div class="left-menus">
    <div v-for="menu in menus" :key="menu.name" @click="changePage(menu)" class="menu-item">
      {{ menu.name }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.left-menus {
  display: flex;
  flex-direction: column;
  align-items: center;

  :first-child {
    margin-top: 10px;
  }
}
.menu-item {
  margin-top: 22px;
  width: 50px;
  height: 48px;
  line-height: 48px;
  text-align: center;
  overflow: hidden;
  border: 1px solid;
  cursor: pointer;
}
</style>
