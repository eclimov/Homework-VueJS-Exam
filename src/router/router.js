import Vue from 'vue'
import Router from 'vue-router'
import CommonLayout from '@/components/layouts/CommonLayout'
import Home from '@/views/Home'
import Issue from "@/views/Issue";

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '',
      component: CommonLayout,
      children: [
        {
          path: '/:page?',
          name: 'home',
          component: Home,
          'params': 'page',
          props: true
        },
        {
          path: 'issue/:id',
          name: 'issue',
          'params': ['id'],
          props: true,
          component: Issue
        }
      ]
    }
  ]
})
