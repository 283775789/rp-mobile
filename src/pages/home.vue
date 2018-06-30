<template>
  <div class="pl-body">
    <div class="pl-body-content">
      <mt-swipe class="pl-swiper" :auto="4000">
        <mt-swipe-item><img class="pl-swiper-img" src="/static/images/banner/1.png" /></mt-swipe-item>
        <mt-swipe-item><img class="pl-swiper-img" src="/static/images/banner/1.png" /></mt-swipe-item>
        <mt-swipe-item><img class="pl-swiper-img" src="/static/images/banner/1.png" /></mt-swipe-item>
      </mt-swipe>

      <div class="pl-card xbb">
        <div class="pl-noticeline" @click="$router.push('/me/notice')">
          <div class="pl-noticeline-left">系统通知：</div>
          <div class="pl-noticeline-right">
            <!-- 最多放5条滚动通知：请修改下面对应的class为x+通知的数目 -->
            <div class="pl-noticeline-content" :class="[`x5`]">
              <a>1.通知标题1通知标题1通知标题1通知标题1通知标题1通知标题1通知标题1通知标题1</a>
              <a>2.通知标题2通知标题2通知标题2通知标题2通知标题2通知标题2通知标题2通知标题2</a>
              <a>3.通知标题3通知标题3通知标题3通知标题3通知标题3通知标题3通知标题3通知标题3</a>
              <a>4.通知标题4通知标题4通知标题4通知标题4通知标题4通知标题4通知标题4通知标题4</a>
              <a>5.通知标题5通知标题5通知标题5通知标题5通知标题5通知标题5通知标题5通知标题5</a>
            </div>
            <!-- /最多放5条滚动通知 -->
          </div>
        </div>
      </div>

      <div class="pl-card xbb">
        <ul class="pl-grid x4">
          <li class="pl-grid-col">
            <a class="pl-mi" @click="$router.push('/paper')">
              <i class="pl-ico xgpm"></i>
              <div>手工组卷</div>
            </a>
          </li>
          <li class="pl-grid-col">
            <a class="pl-mi" @click="$router.push('/question-cart')">
              <i class="pl-ico xec"></i>
              <div>试题篮</div>
            </a>
          </li>
          <li class="pl-grid-col">
            <a class="pl-mi" @click="$router.push('/questions')">
              <i class="pl-ico xes"></i>
              <div>试题查询</div>
            </a>
          </li>
          <li class="pl-grid-col">
            <a class="pl-mi" @click="$router.push('/papers')">
              <i class="pl-ico xgpr"></i>
              <div>试卷查询</div>
            </a>
          </li>
        </ul>
      </div>

      <div class="pl-card">
        <div class="pl-title">
          <h3 class="pl-title-left"><i class="pl-ico xpaper"></i>最近组卷</h3>
          <router-link to="/me/group-paper" class="pl-title-right">更多<i class="pl-ico xmore"></i></router-link>
        </div>

        <div class="pl-grouppaper" @click="$router.push('/questions')">
          <div class="pl-grouppaper-left">
            <i class="pl-ico xcover-person"></i>
            <h3>期未考试</h3>
          </div>
          <div class="pl-grouppaper-body">
            <h3 class="pl-grouppaper-title">新目标（Go for it）版2017-2018学年七年级英语上学期期中综合能力评估试题套卷</h3>
            <div class="pl-grouppaper-props">
              <span>中南讯智</span>
              <span>刘老师</span>
              <span>2018-03-25</span>
            </div>
          </div>
        </div>

        <div class="pl-grouppaper" @click="$router.push('/questions')">
          <div class="pl-grouppaper-left">
            <i class="pl-ico xcover-school"></i>
            <h3>单元测试</h3>
          </div>
          <div class="pl-grouppaper-body">
            <h3 class="pl-grouppaper-title">新目标（Go for it）版2017-2018学年七年级英语上学期期中综合能力评估试题套卷</h3>
            <div class="pl-grouppaper-props">
              <span>中南讯智</span>
              <span>刘老师</span>
              <span>2018-03-25</span>
            </div>
          </div>
        </div>

        <div class="pl-grouppaper" @click="$router.push('/questions')">
          <div class="pl-grouppaper-left">
            <i class="pl-ico xcover-cloud"></i>
            <h3>期中考试</h3>
          </div>
          <div class="pl-grouppaper-body">
            <h3 class="pl-grouppaper-title">新目标（Go for it）版2017-2018学年七年级英语上学期期中综合能力评估试题套卷</h3>
            <div class="pl-grouppaper-props">
              <span>中南讯智</span>
              <span>刘老师</span>
              <span>2018-03-25</span>
            </div>
          </div>
        </div>

        <pl-nodata>无数据样式</pl-nodata>
        <pl-loading />
      </div>

      <div class="pl-nomoredata"><span>无更多数据</span></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  created () {
    this.$store.commit('setPageTitle', '资源平台')
  }
}
</script>
