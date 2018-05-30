<template>
  <div class="pl-body">
    <a class="pl-headerbody"
      :class="{xopen:learningSectionPopupVisible === true}"
      @click="openLearningSectionPopup">
      初中教学
      <i class="pl-ico xcaret"></i>
    </a>
    <a class="pl-headerbtn" @click="openPropsPopup">试题属性</a>

    <div class="pl-body-content">
      <!-- 内容头部 -->
      <div class="pl-tabs">
        <a class="xactive">按章节</a>
        <a>按知识点</a>
      </div>
      <div class="pl-card xbb xenter">
        <div>教材：湘教版 二年级 上册</div>
        <a class="pl-iconbtn" @click="$router.push('/select-book')">
          <i class="pl-ico xenter"></i>
        </a>
      </div>
      <pl-search v-model="searchText" placeholder="请输入关键字..." />
      <!-- /内容头部 -->

      <!-- 内容区 -->
      <ul class="pl-tree" style="margin-top:.5rem;">
        <li class="pl-tree-node" :class="{xopen:1===1}">
          <div class="pl-tree-content">
            <div class="pl-tree-body">
              <a class="pl-tree-collapse pl-iconbtn"><i class="pl-ico xcollapse" :class="{xopen:1===1}"></i></a>
              <span>第一单元</span>
            </div>
            <a class="pl-tree-search pl-iconbtn"><i class="pl-ico xsearch2"></i></a>
          </div>
          <ul class="pl-tree-children">
            <li class="pl-tree-node" :class="{xopen:1===1}">
              <div class="pl-tree-content">
                <div class="pl-tree-body">
                  <a class="pl-tree-collapse pl-iconbtn"><i class="pl-ico xcollapse2" :class="{xopen:1===1}"></i></a>
                  <span>第1章 我们与数学</span>
                </div>
                <a class="pl-tree-search pl-iconbtn"><i class="pl-ico xsearch2"></i></a>
              </div>
              <ul class="pl-tree-children">
                <li class="pl-tree-node">
                  <div class="pl-tree-content">
                    <div class="pl-tree-body">
                      <span>1.1生活 数学</span>
                    </div>
                    <a class="pl-tree-search pl-iconbtn"><i class="pl-ico xsearch2"></i></a>
                  </div>
                </li>
                <li class="pl-tree-node">
                  <div class="pl-tree-content">
                    <div class="pl-tree-body">
                      <span>1.2活动 思考数学的乐趣</span>
                    </div>
                    <a class="pl-tree-search pl-iconbtn"><i class="pl-ico xsearch2"></i></a>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li class="pl-tree-node">
          <div class="pl-tree-content">
            <div class="pl-tree-body">
              <a class="pl-tree-collapse pl-iconbtn"><i class="pl-ico xcollapse"></i></a>
              <span>第二单元</span>
            </div>
            <a class="pl-tree-search pl-iconbtn"><i class="pl-ico xsearch2"></i></a>
          </div>
          <ul class="pl-tree-children">
            <li class="pl-tree-node">
              <div class="pl-tree-content">
                <div class="pl-tree-body">
                  <a class="pl-tree-collapse pl-iconbtn"><i class="pl-ico xcollapse2"></i></a>
                  <span>第1章 我们与数学</span>
                </div>
                <a class="pl-tree-search pl-iconbtn"><i class="pl-ico xsearch2"></i></a>
              </div>
              <ul class="pl-tree-children">
                <li class="pl-tree-node">
                  <div class="pl-tree-content">
                    <div class="pl-tree-body">
                      <span>1.1生活 数学</span>
                    </div>
                    <a class="pl-tree-search pl-iconbtn"><i class="pl-ico xsearch2"></i></a>
                  </div>
                </li>
                <li class="pl-tree-node">
                  <div class="pl-tree-content">
                    <div class="pl-tree-body">
                      <span>1.2活动 思考数学的乐趣</span>
                    </div>
                    <a class="pl-tree-search pl-iconbtn"><i class="pl-ico xsearch2"></i></a>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li class="pl-tree-node">
          <div class="pl-tree-content">
            <div class="pl-tree-body">
              <a class="pl-tree-collapse pl-iconbtn"><i class="pl-ico xcollapse"></i></a>
              <span>第三单元</span>
            </div>
            <a class="pl-tree-search pl-iconbtn"><i class="pl-ico xsearch2"></i></a>
          </div>
          <ul class="pl-tree-children">
            <li class="pl-tree-node">
              <div class="pl-tree-content">
                <div class="pl-tree-body">
                  <a class="pl-tree-collapse pl-iconbtn"><i class="pl-ico xcollapse2"></i></a>
                  <span>第1章 我们与数学</span>
                </div>
                <a class="pl-tree-search pl-iconbtn"><i class="pl-ico xsearch2"></i></a>
              </div>
              <ul class="pl-tree-children">
                <li class="pl-tree-node">
                  <div class="pl-tree-content">
                    <div class="pl-tree-body">
                      <span>1.1生活 数学</span>
                    </div>
                    <a class="pl-tree-search pl-iconbtn"><i class="pl-ico xsearch2"></i></a>
                  </div>
                </li>
                <li class="pl-tree-node">
                  <div class="pl-tree-content">
                    <div class="pl-tree-body">
                      <span>1.2活动 思考数学的乐趣</span>
                    </div>
                    <a class="pl-tree-search pl-iconbtn"><i class="pl-ico xsearch2"></i></a>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
      <!-- /内容区 -->
    </div>

    <!-- 弹出层：筛选学段 -->
    <mt-popup class="xheader"
      v-model="learningSectionPopupVisible"
      position="top">
      <div class="pl-popup-body">
        <div class="pl-popup-label">学段</div>
        <ul class="pl-grid x4 xpopup">
          <li class="pl-grid-col">
            <div class="pl-tag" :class="{xselected:1===1}">
              <div class="pl-tag-body">高中</div>
            </div>
          </li>
          <li class="pl-grid-col">
            <div class="pl-tag">
              <div class="pl-tag-body">初中</div>
            </div>
          </li>
          <li class="pl-grid-col">
            <div class="pl-tag">
              <div class="pl-tag-body">小学</div>
            </div>
          </li>
        </ul>
        <div class="pl-popup-label">学科</div>
        <ul class="pl-grid x4 xpopup">
          <li class="pl-grid-col">
            <div class="pl-tag">
              <div class="pl-tag-body">语文</div>
            </div>
          </li>
          <li class="pl-grid-col">
            <div class="pl-tag">
              <div class="pl-tag-body">语文</div>
            </div>
          </li>
          <li class="pl-grid-col">
            <div class="pl-tag">
              <div class="pl-tag-body">语文</div>
            </div>
          </li>
          <li class="pl-grid-col">
            <div class="pl-tag">
              <div class="pl-tag-body">语文</div>
            </div>
          </li>
          <li class="pl-grid-col">
            <div class="pl-tag">
              <div class="pl-tag-body">语文</div>
            </div>
          </li>
          <li class="pl-grid-col">
            <div class="pl-tag">
              <div class="pl-tag-body">语文</div>
            </div>
          </li>
        </ul>
      </div>
      <div class="pl-popup-footer">
        <a class="pl-popup-btn">清空筛选</a>
        <a class="pl-popup-btn">确定</a>
      </div>
    </mt-popup>
    <!-- /弹出层：筛选学段 -->

    <!-- 弹出层：试题属性 -->
    <mt-popup class="xheader"
      v-model="propsPopupVisible"
      position="top">
      <div class="pl-popup-body">
        <div class="pl-popup-label">共享范围</div>
        <ul class="pl-grid x4 xpopup">
          <li class="pl-grid-col">
            <div class="pl-tag" :class="{xselected:1===1}">
              <div class="pl-tag-body">全部</div>
            </div>
          </li>
          <li class="pl-grid-col">
            <div class="pl-tag">
              <div class="pl-tag-body">个人</div>
            </div>
          </li>
          <li class="pl-grid-col">
            <div class="pl-tag">
              <div class="pl-tag-body">校本</div>
            </div>
          </li>
          <li class="pl-grid-col">
            <div class="pl-tag">
              <div class="pl-tag-body">公开</div>
            </div>
          </li>
        </ul>
        <div class="pl-popup-label">试卷类型</div>
        <ul class="pl-grid x4 xpopup">
          <li class="pl-grid-col">
            <div class="pl-tag">
              <div class="pl-tag-body">全部</div>
            </div>
          </li>
          <li class="pl-grid-col">
            <div class="pl-tag">
              <div class="pl-tag-body">单元测试</div>
            </div>
          </li>
          <li class="pl-grid-col">
            <div class="pl-tag">
              <div class="pl-tag-body">月考</div>
            </div>
          </li>
          <li class="pl-grid-col">
            <div class="pl-tag">
              <div class="pl-tag-body">期中测试</div>
            </div>
          </li>
        </ul>
        <div class="pl-popup-label">难度</div>
        <ul class="pl-grid x4 xpopup">
          <li class="pl-grid-col">
            <div class="pl-tag">
              <div class="pl-tag-body">全部</div>
            </div>
          </li>
          <li class="pl-grid-col">
            <div class="pl-tag">
              <div class="pl-tag-body">容易</div>
            </div>
          </li>
          <li class="pl-grid-col">
            <div class="pl-tag">
              <div class="pl-tag-body">中等</div>
            </div>
          </li>
          <li class="pl-grid-col">
            <div class="pl-tag">
              <div class="pl-tag-body">困难</div>
            </div>
          </li>
        </ul>
        <div class="pl-popup-label">专题</div>
        <ul class="pl-grid x4 xpopup">
          <li class="pl-grid-col">
            <div class="pl-tag">
              <div class="pl-tag-body">全部</div>
            </div>
          </li>
          <li class="pl-grid-col">
            <div class="pl-tag">
              <div class="pl-tag-body">专题一</div>
            </div>
          </li>
          <li class="pl-grid-col">
            <div class="pl-tag">
              <div class="pl-tag-body">专题二</div>
            </div>
          </li>
          <li class="pl-grid-col">
            <div class="pl-tag">
              <div class="pl-tag-body">专题五个字</div>
            </div>
          </li>
        </ul>
        <div class="pl-popup-label">能力层级</div>
        <ul class="pl-grid x4 xpopup">
          <li class="pl-grid-col">
            <div class="pl-tag">
              <div class="pl-tag-body">全部</div>
            </div>
          </li>
          <li class="pl-grid-col">
            <div class="pl-tag">
              <div class="pl-tag-body">层级1</div>
            </div>
          </li>
          <li class="pl-grid-col">
            <div class="pl-tag">
              <div class="pl-tag-body">层级2</div>
            </div>
          </li>
          <li class="pl-grid-col">
            <div class="pl-tag">
              <div class="pl-tag-body">层级3</div>
            </div>
          </li>
        </ul>
      </div>
      <div class="pl-popup-footer">
        <a class="pl-popup-btn">清空筛选</a>
        <a class="pl-popup-btn">确定</a>
      </div>
    </mt-popup>
    <!-- /弹出层：试题属性 -->
  </div>
</template>

<script>
export default {
  name: 'pl-paper-home',
  data () {
    return {
      learningSectionPopupVisible: false,
      propsPopupVisible: false,
      searchText: ''
    }
  },
  methods: {
    // 打开筛选学段
    openLearningSectionPopup () {
      this.propsPopupVisible = false
      this.learningSectionPopupVisible = !this.learningSectionPopupVisible
    },
    // 打开试题属性
    openPropsPopup () {
      this.learningSectionPopupVisible = false
      this.propsPopupVisible = !this.propsPopupVisible
    }
  },
  created () {
    this.$store.commit('setPageTitle', '')
  }
}
</script>
