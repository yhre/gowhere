<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: 'homeswiper',
    props: {
      list: Array
    },
    data () {
      return {
        swiperOption: {
          pagination: {
            el:'.swiper-pagination'
          },
          loop: true,
          slidesPerView:1

        }
      }
    },
    computed: {
      showSwiper () {
        return this.list.length
      }
    },
    methods: {
      callback () {
        console.log('0')
      }
    }
  }
</script>
<style scoped lang="stylus" type="text/stylus">
  .wrapper > .swiper-pagination-bullet-active
    background #fff !important
  .wrapper
    overflow hidden
    width 100%
    height: auto
    background #eee
  .swiper-img
    width 100%
    display block
</style>
