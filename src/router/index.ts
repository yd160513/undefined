import { createRouter, createWebHashHistory } from 'vue-router';

export default createRouter({
  routes: [
    {
      path: '/',
      component: () => import('./../App.vue'),
      redirect: {
        name: 'message'
      },
      children: [
        {
          path: 'message',
          name: 'message',
          component: () => import('./../views/index.vue'),
          children: [
            {
              path: 'conversation',
              name: 'conversation',
              component: () => import('./../views/message/index.vue')
            }
          ]
        }
      ]
    },
  ],
  history: createWebHashHistory()
})