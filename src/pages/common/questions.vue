<template>
  <div class="pl-body">
    <a class="pl-headerbtn" @click="$router.push('/question-cart')">试题篮</a>

    <div class="pl-body-content">
      <!-- 单/多选题 -->
      <div class="pl-question" @click="$router.push('/question-detail')">
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
            <li><b>A.</b>《穷人》通过描写善良的渔夫和妻子桑娜在自己生活极度贫困的情况下，抱回邻居的两个孩子，并决心抚养他们，表现了沙俄时代穷人的悲惨生活和他们美好的心灵。</li>
            <li><b>B.</b>《尊敬普通人》这篇课文，告诉我们要做一个生活中的普通人，这样会赢得别人的尊敬。</li>
            <li><b>C.</b>《 一夜的工作》通过写总理一夜的工作，歌颂了总理不辞劳苦的工作精神和简朴的生活作风。</li>
            <li><b>D.</b> 标题有个图片<img class="pl-swiper-img" src="/static/images/banner/1.png" /></li>
          </ul>
          <div class="pl-question-props" @click.stop>
            <span>单选题</span>
            <span>组卷 299</span>
            <span>收藏 299</span>
            <span>难度-中等</span>
          </div>
        </div>
        <div class="pl-question-tools" @click.stop>
          <a class="pl-question-tool-btn"><i class="pl\-ico xfavorite"></i>收藏</a>
          <a class="pl-question-tool-btn"><i class="pl-ico xtadd"></i>加入试题篮</a>
        </div>
      </div>
      <!-- /单/多选题 -->

      <!-- 填空题 -->
      <div class="pl-question" @click="$router.push('/question-detail')">
        <div class="pl-question-title">
          <b>3.</b>
          <span>20. (2分) 比一比，再组词。 </span>
        </div>
        <div class="pl-question-body">
          <div class="pl-question-fill">绚<var></var>载<var></var>凌<var></var>骄<var></var>绚<var></var>载<var></var>凌<var></var>骄<var></var></div>
          <div class="pl-question-props">
            <span>填空题</span>
            <span>组卷 299</span>
            <span>收藏 299</span>
            <span>难度-中等</span>
          </div>
        </div>
        <div class="pl-question-tools" @click.stop>
          <a class="pl-question-tool-btn"><i class="pl\-ico xfavorite"></i>收藏</a>
          <a class="pl-question-tool-btn"><i class="pl-ico xtadd"></i>加入试题篮</a>
        </div>
      </div>
      <!-- /填空题 -->

      <!-- 连线题 -->
      <div class="pl-question" @click="$router.push('/question-detail')">
        <div class="pl-question-title">
          <b>4.</b>
          <span>20. (2分) 比一比，再组词。 </span>
        </div>
        <div class="pl-question-body">
          <div class="pl-linebox">
            <div class="pl-astable xline">
              <div class="pl-astable-row">
                <div class="pl-astable-col">
                  <div class="pl-qeditor">
                    <div class="pl-qeditor-body">选项内容</div>
                  </div>
                  <i class="xline-leftcircle"></i>
                  <i class="xline-rightcircle"></i>
                </div>
                <div class="pl-astable-col">
                  <div class="pl-qeditor">
                    <div class="pl-qeditor-body">选项内容</div>
                  </div>
                  <i class="xline-leftcircle"></i>
                  <i class="xline-rightcircle"></i>
                </div>
              </div>
              <div class="pl-astable-row">
                <div class="pl-astable-col">
                  <div class="pl-qeditor">
                    <div class="pl-qeditor-body">选项内容</div>
                  </div>
                  <i class="xline-leftcircle"></i>
                  <i class="xline-rightcircle"></i>
                </div>
                <div class="pl-astable-col">
                  <div class="pl-qeditor">
                    <div class="pl-qeditor-body">选项内容</div>
                  </div>
                  <i class="xline-leftcircle"></i>
                  <i class="xline-rightcircle"></i>
                </div>
              </div>
              <div class="pl-astable-row">
                <div class="pl-astable-col">
                  <div class="pl-qeditor">
                    <div class="pl-qeditor-body">选项内容</div>
                  </div>
                  <i class="xline-leftcircle"></i>
                  <i class="xline-rightcircle"></i>
                </div>
                <div class="pl-astable-col">
                  <div class="pl-qeditor">
                    <div class="pl-qeditor-body">选项内容</div>
                  </div>
                  <i class="xline-leftcircle"></i>
                  <i class="xline-rightcircle"></i>
                </div>
              </div>
            </div>
          </div>

          <div class="pl-question-props" @click.stop>
            <span>连线题</span>
            <span>组卷 299</span>
            <span>收藏 299</span>
            <span>难度-中等</span>
          </div>
        </div>
        <div class="pl-question-tools" @click.stop>
          <a class="pl-question-tool-btn"><i class="pl\-ico xfavorite"></i>收藏</a>
          <a class="pl-question-tool-btn"><i class="pl-ico xtadd"></i>加入试题篮</a>
        </div>
      </div>
      <!-- /连线题 -->

      <!-- 判断题 -->
      <div class="pl-question" @click="$router.push('/question-detail')">
        <div class="pl-question-title">
          <b>5.</b>
          <span>(2分) 对课文理解不正确的是（  ）</span>
        </div>
        <div class="pl-question-body">
          <ul class="pl-question-options xjudge">
            <li><b>A.</b><i class="pl-ico xyes"></i></li>
            <li><b>B.</b><i class="pl-ico xno"></i></li>
          </ul>
          <div class="pl-question-props" @click.stop>
            <span>判断题</span>
            <span>组卷 299</span>
            <span>收藏 299</span>
            <span>难度-中等</span>
          </div>
        </div>
        <div class="pl-question-tools" @click.stop>
          <a class="pl-question-tool-btn"><i class="pl\-ico xfavorite"></i>收藏</a>
          <a class="pl-question-tool-btn"><i class="pl-ico xtadd"></i>加入试题篮</a>
        </div>
      </div>
      <!-- /判断题 -->

      <!-- 跟读题+听力题+综合题 -->
      <div class="pl-question" @click="$router.push('/question-detail')">
        <div class="pl-question-title">
          <b>5.</b>
          <span>(2分) 听写录音内容，回答相关问题（  ）</span>
        </div>
        <div class="pl-question-body">
          <div class="pl-attachment">
            <i class="pl-ico xvoice"></i>
            <div class="pl-attachment-name">小学四年级语文下册期末试卷.doc</div>
          </div>
          <!-- 单/多选题 -->
          <div class="pl-question" @click="$router.push('/question-detail')">
            <div class="pl-question-title">
              <b>1.</b>
              <span>(2分) Question title title title title title?</span>
            </div>
            <div class="pl-question-body">
              <ul class="pl-question-options">
                <li><b>A.</b>Option item Option item Option item Option item Option item Option item</li>
                <li><b>B.</b> Option item Option item Option item Option item Option item Option item</li>
                <li><b>C.</b> Option item Option item Option item Option item Option item Option item</li>
                <li><b>D.</b> Option item Option item Option item Option item Option item Option item</li>
              </ul>
            </div>
          </div>
          <!-- /单/多选题 -->

          <!-- 单/多选题 -->
          <div class="pl-question" @click="$router.push('/question-detail')">
            <div class="pl-question-title">
              <b>2.</b>
              <span>(2分) Question title title title title title?</span>
            </div>
            <div class="pl-question-body">
              <ul class="pl-question-options">
                <li><b>A.</b>Option item Option item Option item Option item Option item Option item</li>
                <li><b>B.</b> Option item Option item Option item Option item Option item Option item</li>
                <li><b>C.</b> Option item Option item Option item Option item Option item Option item</li>
                <li><b>D.</b> Option item Option item Option item Option item Option item Option item</li>
              </ul>
            </div>
          </div>
          <!-- /单/多选题 -->

          <div class="pl-question-props" @click.stop>
            <span>跟读题+听力题+综合题</span>
            <span>组卷 299</span>
            <span>收藏 299</span>
            <span>难度-中等</span>
          </div>
        </div>
        <div class="pl-question-tools" @click.stop>
          <a class="pl-question-tool-btn"><i class="pl\-ico xfavorite"></i>收藏</a>
          <a class="pl-question-tool-btn"><i class="pl-ico xtadd"></i>加入试题篮</a>
        </div>
      </div>
      <!-- /跟读题+听力题+综合题 -->

       <!-- 简答题 -->
      <div class="pl-question" @click="$router.push('/question-detail')">
        <div class="pl-question-title">
          <b>6.</b>
          <span>(2分) 简答题标题</span>
        </div>
        <div class="pl-question-body">
          <div class="pl-question-props" @click.stop>
            <span>简答题</span>
            <span>组卷 299</span>
            <span>收藏 299</span>
            <span>难度-中等</span>
          </div>
        </div>
        <div class="pl-question-tools" @click.stop>
          <a class="pl-question-tool-btn"><i class="pl\-ico xfavorite"></i>收藏</a>
          <a class="pl-question-tool-btn"><i class="pl-ico xtadd"></i>加入试题篮</a>
        </div>
      </div>
      <!-- /简答题 -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'pl-questions',
  created () {
    this.$store.commit('setPageTitle', '试题列表')
  }
}
</script>
