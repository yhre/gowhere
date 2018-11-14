<template>
    <div>
      <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
        <div class="iconfont header-abs-back">&#xe624;</div>
      </router-link>
      <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
        <router-link tag="div" to="/">
          <div class="iconfont header-fixed-back">&#xe624;</div>
        </router-link>
        景点详情
      </div>
    </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {
          opacity: opacity
        }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    //keep-alive组件激活时调用，绑定的全局滚动
    window.addEventListener('scroll', this.handleScroll)
  },
  //页面即将被隐藏或者替换解绑window.scroll事件
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped lang="stylus" type="text/stylus">

  .header-abs
    position absolute
    left: .2rem
    top: .2rem
    width: .8rem
    height: .8rem
    text-align: center
    line-height .8rem
    border-radius .4rem
    background rgba(0, 0, 0, .8)
    .header-abs-back
      color #fff
      font-size: .4rem
  .header-fixed
    z-index 2
    position fixed
    top: 0
    left: 0
    right: 0
    height: 0.86rem
    line-height 0.86rem
    color #fff
    background #00bcd4
    font-size: .32rem
    text-align: center
    .header-fixed-back
      position absolute
      top: 0
      left: 0
      width: .64rem
      text-align: center
      font-size: .4rem
      color #fff
</style>
