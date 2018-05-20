import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'

// 通知
import Notice from '@/pages/notice/notice'
import NoticeHome from '@/pages/notice/index'
import NoticeDetail from '@/pages/notice/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/notices',
      component: Notice,
      redirect: '/notices/home',
      children: [
        {
          path: 'home',
          component: NoticeHome
        },
        {
          path: 'detail',
          component: NoticeDetail
        }
      ]
    }
  ]
})
