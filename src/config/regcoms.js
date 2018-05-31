// 注册通用的全局组件
// ==============================
import Vue from 'vue'
import Nodata from '@/components/nodata'
import Search from '@/components/search'
import Loading from '@/components/loading'

const components = [
  Nodata,
  Search,
  Loading
]
components.forEach(function (component) {
  Vue.component(component.name, component)
})
