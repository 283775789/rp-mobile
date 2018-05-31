<template>
  <div class="pl-body">
    <div class="pl-body-content">
      <div class="pl-meheader">
        <div class="pl-meheader-userinfo">
          <img class="pl-avatar" src="/static/images/avatar-default.png" alt="用户头像" />
          <h3 class="pl-meheader-username">刘斌</h3>
          <h3 class="pl-meheader-userprops">教师ID:123456</h3>
        </div>
      </div>

      <div class="pl-xspacebox">
        <div class="pl-card xbr xsummary">
          <div class="pl-grid x4">
            <div class="pl-grid-col">
              <div class="pl-num">960</div>
              <div class="pl-minortext">总积分</div>
            </div>
            <div class="pl-grid-col">
              <div class="pl-num">960</div>
              <div class="pl-minortext">上传积分</div>
            </div>
            <div class="pl-grid-col">
              <div class="pl-num">960</div>
              <div class="pl-minortext">下载积分</div>
            </div>
            <div class="pl-grid-col">
              <div class="pl-num">960</div>
              <div class="pl-minortext">登录积分</div>
            </div>
          </div>
        </div>

        <div class="pl-card xbr">
          <ul class="pl-grid x3">
            <li class="pl-grid-col">
              <a class="pl-mi" @click="$router.push('/me/notice')">
                <i class="pl-ico xmn"></i>
                <div>通知公告</div>
              </a>
            </li>
            <li class="pl-grid-col">
              <a class="pl-mi" @click="$router.push('/me/questions')">
                <i class="pl-ico xmex"></i>
                <div>试题收藏</div>
              </a>
            </li>
            <li class="pl-grid-col">
              <a class="pl-mi" @click="$router.push('/me/paper')">
                <i class="pl-ico xmp"></i>
                <div>试卷收藏</div>
              </a>
            </li>
            <li class="pl-grid-col">
              <a class="pl-mi" @click="$router.push('/me/group-paper')">
                <i class="pl-ico xgpr"></i>
                <div>组卷记录</div>
              </a>
            </li>
            <li class="pl-grid-col">
              <a class="pl-mi" @click="$router.push('/me/downloaded-paper')">
                <i class="pl-ico xtpdown"></i>
                <div>试卷下载记录</div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pl-me-home'
}
</script>

<style scoped>

</style>
