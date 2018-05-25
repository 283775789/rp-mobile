<template>
  <div>
    <mt-header class="pl-header xindex" fixed title="资源平台" />>

    <mt-tabbar class="pl-footer" fixed v-model="selected">
      <mt-tab-item id="首页"><i class="pl-ico xhome" slot="icon"></i>首页</mt-tab-item>
      <mt-tab-item id="卷库"><i class="pl-ico xtestpaper" slot="icon"></i>卷库</mt-tab-item>
      <mt-tab-item id="我的"><i class="pl-ico xme" slot="icon"></i>我的</mt-tab-item>
    </mt-tabbar>

    <div class="pl-body">
      <mt-swipe class="pl-swiper" :auto="4000">
        <mt-swipe-item><img class="pl-swiper-img" src="/static/images/banner/1.png" /></mt-swipe-item>
        <mt-swipe-item><img class="pl-swiper-img" src="/static/images/banner/1.png" /></mt-swipe-item>
        <mt-swipe-item><img class="pl-swiper-img" src="/static/images/banner/1.png" /></mt-swipe-item>
      </mt-swipe>

      <div class="pl-card xbb">
        <div class="pl-noticeline">
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
        <ul class="pl-grid x3">
          <li class="pl-grid-col">
            <a class="pl-mi">
              <i class="pl-ico xgpm"></i>
              <div>手工组卷</div>
            </a>
          </li>
          <li class="pl-grid-col">
            <a class="pl-mi">
              <i class="pl-ico xtps"></i>
              <div>试卷查询</div>
            </a>
          </li>
          <li class="pl-grid-col">
            <a class="pl-mi">
              <i class="pl-ico xes"></i>
              <div>试题查询</div>
            </a>
          </li>
          <li class="pl-grid-col">
            <a class="pl-mi">
              <i class="pl-ico xgpr"></i>
              <div>组卷记录</div>
            </a>
          </li>
          <li class="pl-grid-col">
            <a class="pl-mi">
              <i class="pl-ico xtpdown"></i>
              <div>试卷下载记录</div>
            </a>
          </li>
          <li class="pl-grid-col">
            <a class="pl-mi">
              <i class="pl-ico xtpdel"></i>
              <div>试卷删除记录</div>
            </a>
          </li>
        </ul>
      </div>

      <div class="pl-card">
        <div class="pl-title">
          <h3 class="pl-title-left"><i class="pl-ico xnotice"></i>通知公告</h3>
          <router-link to="/notices" class="pl-title-right">更多<i class="pl-ico xmore"></i></router-link>
        </div>

        <router-link to="/notices/detail" class="pl-info">
          <div class="pl-info-title">
            <i class="pl-dot"></i>
            <span>通知标题通知标题通知标题通知标题通知标题</span>
          </div>
          <div class="pl-props">
            <span class="pl-info-prop">学校公告</span>
            <span class="pl-info-prop">2018-03-25 01:10</span>
          </div>
        </router-link>

        <router-link to="/notices/detail" class="pl-info">
          <div class="pl-info-title">
            <i class="pl-dot"></i>
            <span>系统停止、系统公告、学校公告，管理员发布通系统停止、系统公告、学校公告，管理员发布通</span>
          </div>
          <div class="pl-props">
            <span class="pl-info-prop">学校公告</span>
            <span class="pl-info-prop">2018-03-25 01:10</span>
          </div>
        </router-link>

        <pl-nodata>无数据样式</pl-nodata>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>
