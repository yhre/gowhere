<template>
  <div>
  <home-header></home-header>
    <home-swiper></home-swiper>
   <div>我是首页页面</div>
  </div>
</template>

<script>
  import HomeHeader from '@/components/HomeHeader'
  import HomeSwiper from '@/components/HomeSwiper'
    export default {
      name: 'home',
      components:{
        HomeHeader,
        HomeSwiper,
        },
      data(){
          return{

          }
      },
      methods:{

      }
    }
</script>

<style scoped>

</style>
