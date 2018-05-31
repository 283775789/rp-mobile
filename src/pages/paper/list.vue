<template>
  <div class="pl-body">
    <div class="pl-body-content">
      <div class="pl-card xbb">
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pl-papers',
  created () {
    this.$store.commit('setPageTitle', '试卷列表')
  }
}
</script>
