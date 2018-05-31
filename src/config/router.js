import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'

// 组卷
import Paper from '@/pages/paper'
import Papers from '@/pages/paper/list'
import SelectBook from '@/pages/paper/select-book'

// 通用
import Questions from '@/pages/common/questions'
import QuestionDetail from '@/pages/common/question-detail'
import QuestionCart from '@/pages/common/question-cart'

// 我的
import Me from '@/pages/me'
import MeHome from '@/pages/me/home'
import MeNotice from '@/pages/me/notice'
import MeNoticeList from '@/pages/me/notice/list'
import MeNoticeDetail from '@/pages/me/notice/detail'
import MePaper from '@/pages/me/paper'
import MeGroupPaper from '@/pages/me/group-paper'
import MeDownloadedPaper from '@/pages/me/downloaded-paper'
import MeQuestions from '@/pages/me/questions'

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
        },
        {
          path: 'questions',
          component: MeQuestions,
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
    },
    {
      path: '/papers',
      component: Papers,
      meta: {
        pageLevel: 2
      }
    },
    {
      path: '/select-book',
      component: SelectBook,
      meta: {
        pageLevel: 2
      }
    },
    {
      path: '/questions',
      component: Questions,
      meta: {
        pageLevel: 2
      }
    },
    {
      path: '/question-detail',
      component: QuestionDetail,
      meta: {
        pageLevel: 2
      }
    },
    {
      path: '/question-cart',
      component: QuestionCart,
      meta: {
        pageLevel: 2
      }
    }
  ]
})
