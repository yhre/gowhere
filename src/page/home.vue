<template>
  <div>
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
  </div>
</template>

<script>
  import HomeHeader from '@/components/HomeHeader'
  import HomeSwiper from '@/components/HomeSwiper'
  import HomeIcons from '@/components/Icons'
  import HomeRecommend from '@/components/Recommend'
  import axios from 'axios'
    export default {
      name: 'home',
      components:{
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecommend
        },
      data(){
        return{
          swiperList: [],
          iconList: [],
          recommendList: [],
        }
      },
      methods:{
        getHomeInfo()
        {
          axios.get('/api/index.json').then(this.getHomeInfoSucc)
        },
        getHomeInfoSucc(res){
           res = res.data
          if (res.ret && res.data) {
            const data = res.data
            this.recommendList = data.recommendList
            this.swiperList = data.swiperList
            this.iconList = data.iconList
          }
        }
      },
      mounted(){
            this.getHomeInfo();
          },


    }
</script>

<style scoped>

</style>
