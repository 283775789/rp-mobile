<template>
  <div class="pl-body">
    <a class="pl-headerbtn" @click="openPropsPopup">试题篮</a>

    <div class="pl-body-content">
      <div class="pl-question">
        <div class="pl-question-title">
          <b>1.</b>
          <span>(2分) 对课文理解不正确的是（  ）</span>
        </div>
        <div class="pl-question-body">
          <div class="pl-attachment">
            <i class="pl-ico xword"></i>
            <div class="pl-attachment-name">小学四年级语文下册期末试卷.doc</div>
          </div>
          <div class="pl-attachment">
            <i class="pl-ico xvoice"></i>
            <div class="pl-attachment-name">小学四年级语文下册期末试卷.doc</div>
          </div>
          <ul class="pl-question-options">
            <li>A.《穷人》通过描写善良的渔夫和妻子桑娜在自己生活极度贫困的情况下，抱回邻居的两个孩子，并决心抚养他们，表现了沙俄时代穷人的悲惨生活和他们美好的心灵。</li>
            <li>B.《尊敬普通人》这篇课文，告诉我们要做一个生活中的普通人，这样会赢得别人的尊敬。</li>
            <li>C.《 一夜的工作》通过写总理一夜的工作，歌颂了总理不辞劳苦的工作精神和简朴的生活作风。</li>
            <li>D. 标题有个图片<img class="pl-swiper-img" src="/static/images/banner/1.png" /></li>
          </ul>
          <div class="pl-question-props">
            <span>难度-中等</span>
            <span>组卷 299</span>
            <span>收藏 299</span>
            <span>单选题</span>
          </div>
        </div>
        <div class="pl-question-tools">
          <a><i class="pl-ico xfavorite"></i>收藏</a>
          <a><i class="pl-ico xtadd"></i>加入试题篮</a>
          <a><i class="pl-ico xtoprev"></i>上移</a>
          <a><i class="pl-ico xtonext"></i>下移</a>
          <a><i class="pl-ico xtdel"></i>删除</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'me-questions',
  created () {
    this.$store.commit('setPageTitle', '试题收藏(50套)')
  }
}
</script>
