<template>
    <div class="header">
      <span>城市选择</span>
      <router-link to="/">
        <div class="iconfont header-back">&#xe624;</div>
      </router-link>
    </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>
<style scoped lang="stylus" type="text/stylus">
  .header
    position relative
    overflow hidden
    height: .86rem
    line-height .86rem
    color #fff
    background #00bcd4
    font-size: .32rem
    text-align: center
    width 100%;
    .header-back
      position absolute
      top: 0
      left: 0
      width: .64rem
      text-align: center
      font-size: .4rem
      color #fff
</style>
