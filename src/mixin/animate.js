export default {
  methods: {
    // 添加试题动画效果
    animateAddQuestion (offset, cb) {
      const elDot = document.createElement('div')
      elDot.setAttribute('class', 'pl-dot')
      elDot.style.top = offset.top + 'px'
      elDot.style.left = offset.left + 'px'
      document.body.appendChild(elDot)
      setTimeout(() => {
        document.body.removeChild(elDot)
        cb()
      }, 350)
    }
  }
}
