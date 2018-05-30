// 注册通用的全局组件
// ==============================
import Vue from 'vue'
import Nodata from '@/components/nodata'
import Search from '@/components/search'

const components = [
  Nodata,
  Search
]
components.forEach(function (component) {
  Vue.component(component.name, component)
})
