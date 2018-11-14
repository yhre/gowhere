<template>
    <div>
      <div class="item" v-for="(item, index) of list" :key="index">
        <div class="item-title border-bottom">
          <span class="item-title-icon"></span>
          {{item.title}}
        </div>
        <!--  递归组件  组件的自身去调用组件的自身 用自身的名字来使用-->
        <div v-if="item.children" class="item-children">
          <detail-list :list="item.children"></detail-list>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>

<style scoped lang="stylus" type="text/stylus">
  .item-title
    line-height .8rem
    font-size: .32rem
    padding 0 .2rem
    .item-title-icon
      position relative
      left: .06rem
      top: .07rem
      display inline-block
      width: .36rem
      height: .36rem
      background: #fff
      background: url(//s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
      margin-right: .1rem
      background-size: .4rem 3rem
      color: #333
      font-size: .32rem
      line-height: .8rem
  .item-children
    padding 0 .2rem
</style>
