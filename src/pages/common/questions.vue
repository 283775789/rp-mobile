<template>
  <div class="pl-body">
    <a class="pl-headerbtn" @click="$router.push('/question-cart')">试题篮<span>{{questionNum}}</span></a>

    <div class="pl-body-content" style="padding-bottom:3rem;">
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
          <a class="pl-question-tool-btn" @click="addQuestionToCart"><i class="pl-ico xtadd"></i>加入试题篮</a>
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
          <a class="pl-question-tool-btn" @click="addQuestionToCart"><i class="pl-ico xtadd"></i>加入试题篮</a>
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
          <a class="pl-question-tool-btn" @click="addQuestionToCart"><i class="pl-ico xtadd"></i>加入试题篮</a>
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
          <a class="pl-question-tool-btn" @click="addQuestionToCart"><i class="pl-ico xtadd"></i>加入试题篮</a>
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
            <div class="pl-question-props" @click.stop style="margin-top:0;">
              <span>知识点1</span>
              <span>知识点2</span>
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
            <div class="pl-question-props" @click.stop style="margin-top:0;">
              <span>知识点1</span>
              <span>知识点2</span>
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
          <a class="pl-question-tool-btn" @click="addQuestionToCart"><i class="pl-ico xtadd"></i>加入试题篮</a>
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
          <a class="pl-question-tool-btn" @click="addQuestionToCart"><i class="pl-ico xtadd"></i>加入试题篮</a>
        </div>
      </div>
      <!-- /简答题 -->
    </div>

    <!-- 底部工具按钮 -->
    <div class="pl-footer xtools">
      <a><i class="pl-ico xdownload"></i>下载试卷</a>
      <a @click="setAnswerCardPopupVisible = true"><i class="pl-ico xac"></i>下载答题卡</a>
      <a><i class="pl-ico xfavorite2 xdone"></i>取消收藏</a>
      <a>保存修改</a>
    </div>
    <!-- /底部工具按钮 -->

    <!-- 弹出层：筛选学段 -->
    <mt-popup class="xheader"
      v-model="setAnswerCardPopupVisible"
      position="bottom">
      <div class="pl-popup-body" style="padding-bottom:0;">
        <div class="pl-title xquestion">
          <div class="pl-title-left">设置答题卡</div>
        </div>
        <div class="pl-popup-label">设置答题卡布局</div>
        <ul class="pl-grid x4 xpopup">
          <li class="pl-grid-col">
            <i class="pl-ico xcol1" :class="{xselected: 1 === 1}"></i>
          </li>
          <li class="pl-grid-col">
            <i class="pl-ico xcol2"></i>
          </li>
          <li class="pl-grid-col">
            <i class="pl-ico xcol3"></i>
          </li>
          <li class="pl-grid-col">
            <div class="pl-answercart-note">一栏建议A4两/三栏建议A3、8k纸张</div>
          </li>
        </ul>
        <div class="pl-popup-label">选择考号版式</div>
        <ul class="pl-grid x4 xpopup">
          <li class="pl-grid-col">
            <div class="pl-tag" :class="{xselected: 1 === 1}">
              <div class="pl-tag-body">条形码</div>
            </div>
          </li>
          <li class="pl-grid-col">
            <div class="pl-tag">
              <div class="pl-tag-body">准考证号</div>
            </div>
          </li>
        </ul>
        <div class="pl-popup-label">设置禁止作答区</div>
        <ul class="pl-grid x4 xpopup">
          <li class="pl-grid-col">
            <div class="pl-tag" :class="{xselected: 1 === 1}">
              <div class="pl-tag-body">启用</div>
            </div>
          </li>
          <li class="pl-grid-col">
            <div class="pl-tag">
              <div class="pl-tag-body">禁用</div>
            </div>
          </li>
        </ul>
        <mt-cell title="按题号排序">
          <mt-switch v-model="demoValue" />
        </mt-cell>
        <mt-cell title="添加页脚">
          <mt-switch v-model="demoValue" />
        </mt-cell>
      </div>
      <div class="pl-popup-footer">
        <a class="pl-popup-btn">清空筛选</a>
        <a class="pl-popup-btn">确定</a>
      </div>
    </mt-popup>
    <!-- /弹出层：筛选学段 -->
  </div>
</template>

<script>
import animate from '@/mixin/animate'

export default {
  name: 'pl-questions',
  data () {
    return {
      setAnswerCardPopupVisible: false,
      demoValue: '',
      questionNum: 0
    }
  },
  mixins: [animate],
  methods: {
    addQuestionToCart (event) {
      this.animateAddQuestion({top: event.pageY, left: event.pageX}, () => {
        this.questionNum++
      })
    }
  },
  created () {
    this.$store.commit('setPageTitle', '2017-2018学年七年级英语上')
  }
}
</script>
