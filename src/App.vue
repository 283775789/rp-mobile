<template>
  <div id="app">
    <mt-header class="pl-header" :class="{xindex:$route.meta.pageLevel === 1}" fixed :title="$store.state.pageTitle">
      <a v-if="$route.meta.pageLevel > 1" @click="$router.go(-1)" slot="left">
        <mt-button icon="back"></mt-button>
      </a>
    </mt-header>

    <mt-tabbar v-if="$route.meta.pageLevel === 1" class="pl-footer" fixed v-model="selected">
      <mt-tab-item id="首页"><i class="pl-ico xhome" slot="icon"></i>首页</mt-tab-item>
      <mt-tab-item id="卷库"><i class="pl-ico xtestpaper" slot="icon"></i>组卷</mt-tab-item>
      <mt-tab-item id="我的"><i class="pl-ico xme" slot="icon"></i>我的</mt-tab-item>
    </mt-tabbar>

  <router-view/>
 </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      selected: '首页'
    }
  }
}
</script>
