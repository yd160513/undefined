import { createRouter, createWebHashHistory } from 'vue-router';

export default createRouter({
  routes: [
    {
      path: '/',
      component: () => import('./../App.vue'),
      children: [
        {
          path: '',
          component: () => import('./../views/index.vue'),
          children: [
            {
              path: 'message',
              name: 'message',
              component: () => import('./../views/message/index.vue')
            }
          ]
        }
      ]
    },
  ],
  history: createWebHashHistory()
})