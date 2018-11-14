<template>
    <div>
      <div class="banner" @click="handleBannerClick">
        <img class="banner-img" :src="bannerImg" alt="">
        <div class="banner-info">
          <div class="banner-title">
            {{this.sightName}}
          </div>
          <div class="banner-number">
            <span class="iconfont banner-icon">&#xe63e;</span>
            {{this.bannerImgs.length}}
          </div>
        </div>
      </div>
      <fade-animation>
        <common-gallary
          :imgs="bannerImgs"
          v-show="showGallary"
          @close="handleGallryClose"
        ></common-gallary>
      </fade-animation>
    </div>
</template>

<script>
import CommonGallary from '@/common/gallary/Gallary'
import FadeAnimation from '@/common/fade/FadeAnimation'
export default {
  name: 'DetailBanner',
  data () {
    return {
      showGallary: false
    }
  },
  props: {
    sightName: String,
    bannerImg: String,
    bannerImgs: Array
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallryClose () {
      this.showGallary = false
    }
  },
  components: {
    CommonGallary,
    FadeAnimation
  }
}
</script>

<style scoped lang="stylus" type="text/stylus">
  .banner
    position relative
    overflow hidden
    height: 0
    padding-bottom 55%
    .nav-banner-img
      width: 100%
    .banner-info
      background-image linear-gradient(tap, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      display flex
      position absolute
      left: 0
      right: 0
      bottom: 0
      color #fff
      line-height .6rem
    .banner-title
      font-size: .32rem
      padding 0 .2rem
      flex 1
    .banner-number
      margin-top .14rem
      padding 0 .4rem
      height .32rem
      line-height .32rem
      border-radius .2rem
      font-size: .24rem
      background rgba(0, 0, 0, 0.8)
      .banner-icon
        font-size: .24rem
</style>
