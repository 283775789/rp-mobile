<template>
  <div>
    <mt-header class="pl-header" fixed title="通知公告">
      <a @click="handleBack" slot="left">
        <mt-button icon="back"></mt-button>
      </a>
    </mt-header>

    <div class="pl-body xwhite">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'notice',
  methods: {
    handleBack () {
      this.$router.go(-1)
    }
  }
}
</script>
