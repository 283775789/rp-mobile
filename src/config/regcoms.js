// 注册通用的全局组件
// ==============================
import Vue from 'vue'
import Nodata from '@/components/nodata'
const components = [
  Nodata
]
components.forEach(function (component) {
  Vue.component(component.name, component)
})
