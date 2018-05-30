<template>
  <div class="pl-body">
    <a class="pl-headerbtn">完成</a>

    <div class="pl-body-content">
      <ul class="pl-tree">
        <li class="pl-tree-node" :class="{xopen:1===1}">
          <div class="pl-tree-content">
            <div class="pl-tree-body">
              <a class="pl-tree-collapse pl-iconbtn"><i class="pl-ico xcollapse" :class="{xopen:1===1}"></i></a>
              <span>人教版</span>
            </div>
          </div>
          <ul class="pl-tree-children">
            <li class="pl-tree-node" :class="{xopen:1===1}">
              <div class="pl-tree-content">
                <div class="pl-tree-body">
                  <span>一年级上册</span>
                </div>
                <a class="pl-tree-search pl-iconbtn"><i class="pl-ico xselect" :class="{xselected:1===1}"></i></a>
              </div>
            </li>
            <li class="pl-tree-node" :class="{xopen:1===1}">
              <div class="pl-tree-content">
                <div class="pl-tree-body">
                  <span>一年级下册</span>
                </div>
                <a class="pl-tree-search pl-iconbtn"><i class="pl-ico xselect"></i></a>
              </div>
            </li>
            <li class="pl-tree-node" :class="{xopen:1===1}">
              <div class="pl-tree-content">
                <div class="pl-tree-body">
                  <span>一年级下册</span>
                </div>
                <a class="pl-tree-search pl-iconbtn"><i class="pl-ico xselect"></i></a>
              </div>
            </li>
            <li class="pl-tree-node" :class="{xopen:1===1}">
              <div class="pl-tree-content">
                <div class="pl-tree-body">
                  <span>一年级下册</span>
                </div>
                <a class="pl-tree-search pl-iconbtn"><i class="pl-ico xselect"></i></a>
              </div>
            </li>
            <li class="pl-tree-node" :class="{xopen:1===1}">
              <div class="pl-tree-content">
                <div class="pl-tree-body">
                  <span>一年级下册</span>
                </div>
                <a class="pl-tree-search pl-iconbtn"><i class="pl-ico xselect"></i></a>
              </div>
            </li>
          </ul>
        </li>
        <li class="pl-tree-node">
          <div class="pl-tree-content">
            <div class="pl-tree-body">
              <a class="pl-tree-collapse pl-iconbtn"><i class="pl-ico xcollapse"></i></a>
              <span>人教版</span>
            </div>
          </div>
          <ul class="pl-tree-children">
            <li class="pl-tree-node">
              <div class="pl-tree-content">
                <div class="pl-tree-body">
                  <span>一年级上册</span>
                </div>
                <a class="pl-tree-search pl-iconbtn"><i class="pl-ico xselect"></i></a>
              </div>
            </li>
            <li class="pl-tree-node">
              <div class="pl-tree-content">
                <div class="pl-tree-body">
                  <span>一年级下册</span>
                </div>
                <a class="pl-tree-search pl-iconbtn"><i class="pl-ico xselect"></i></a>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pl-select-book',
  created () {
    this.$store.commit('setPageTitle', '选择教材')
  }
}
</script>
