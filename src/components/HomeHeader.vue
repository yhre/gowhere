<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to='citycopy'>
      <div class="header-right">
        {{this.$store.state.city}}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>

  export default {
    name: 'homeheader',
    computed: {

    }
  }
</script>

<style scoped lang="stylus" type="text/stylus">
  @import "../assets/stylus/varibles.styl"
  .header
    display flex
    height: $headerHeight
    line-height $headerHeight
    background $bgColor
    color: #fff
    .header-left
      width .61rem
      float: left
      .back-icon
        text-align: center
        font-size: .4rem
    .header-input
      flex 1
      height .64rem
      line-height .64rem
      padding-left .2rem
      margin .12rem .2rem
      /*margin-top .12rem*/
      /*margin-left .2rem*/
      background #fff
      border-radius .1rem
      color: #ccc
    .header-right
      min-width 1.04rem
      /*padding 0.1rem*/
      color #fff
      float: right
      text-align: center
      .arrow-icon
        margin-left -.04rem
        font-size: .24rem
</style>
