import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'

// 组卷
import Paper from '@/pages/paper'

// 我的
import Me from '@/pages/me'
import MeHome from '@/pages/me/home'
import MeNotice from '@/pages/me/notice'
import MeNoticeList from '@/pages/me/notice/list'
import MeNoticeDetail from '@/pages/me/notice/detail'
import MePaper from '@/pages/me/paper'
import MeGroupPaper from '@/pages/me/group-paper'
import MeDownloadedPaper from '@/pages/me/downloaded-paper'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      meta: {
        pageLevel: 1
      }
    },
    {
      path: '/me',
      component: Me,
      redirect: 'home',
      meta: {
        pageLevel: 1
      },
      children: [
        {
          path: 'home',
          component: MeHome,
          meta: {
            pageLevel: 1
          }
        },
        {
          path: 'notice',
          component: MeNotice,
          redirect: 'notice/list',
          children: [
            {
              path: 'list',
              component: MeNoticeList,
              meta: {
                pageLevel: 2
              }
            },
            {
              path: 'detail',
              component: MeNoticeDetail,
              meta: {
                pageLevel: 2
              }
            }
          ]
        },
        {
          path: 'paper',
          component: MePaper,
          meta: {
            pageLevel: 2
          }
        },
        {
          path: 'group-paper',
          component: MeGroupPaper,
          meta: {
            pageLevel: 2
          }
        },
        {
          path: 'downloaded-paper',
          component: MeDownloadedPaper,
          meta: {
            pageLevel: 2
          }
        }
      ]
    },
    {
      path: '/paper',
      component: Paper,
      meta: {
        pageLevel: 1
      }
    }
  ]
})
