<template>
  <div class="pl-body xwhite">
    <div class="pl-body-content">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'me-notice',
  created () {
    this.$store.commit('setPageTitle', '通知公告')
  }
}
</script>
