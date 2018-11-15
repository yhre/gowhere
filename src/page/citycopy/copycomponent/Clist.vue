<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom" >当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.currentCity}}</div>
          </div>
        </div>
      </div>
      <div class="area border-topbottom">
        <div class="title">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item in hot" :key="item.id" @click="chooseCity(item.name)">
            <div class="button">{{item.name}}</div>
          </div>

        </div>
      </div>
      <div class="area" v-for="(item ,key) in cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list" v-for="itemlist in item" @click="chooseCity(itemlist.name)">
          <div class="item border-bottom">
            {{itemlist.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Bscroll from 'better-scroll'
  import { mapState, mapMutations } from 'vuex'
    export default {
        name: "Clist",
        props:{
          cities:Object,
          hot:Array,
          letter:String
        },
        data(){
          return{

          }
        },
        methods:{
          chooseCity(city){
            this.$store.commit('changeCity', city)
            this.changeCity(city)
            this.$router.push('/')
          },
          ...mapMutations(['changeCity'])
        },
      computed: {
        ...mapState({
          currentCity: 'city'
        })
      },
      watch: {
        letter () {
          if (this.letter) {
            const element = this.$refs[this.letter][0]
            this.scroll.scrollToElement(element)
            // console.log(element)
          }
        }
      },
      mounted(){
          this.scroll=new Bscroll(this.$refs.wrapper,{ mouseWheel: true, click: true, tap: true })
      }
    }
</script>
<style lang="stylus" type="text/stylus" scoped>
  .border-topbottom
    &:before
      border-color #ccc
    &:after
      border-color #ccc
  .border-bottom
    &:before
      border-color #ccc
  .list
    overflow hidden
    position absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    .title
      line-height .54rem
      background #eee
      color #666
      font-size: .26rem
      padding-left .2rem
    .button-list
      overflow hidden
      padding .1rem .6rem .1rem .1rem
      .button-wrapper
        float left
        width 33.33%
        .button
          padding .1rem 0
          text-align: center
          margin .1rem
          border-radius .06rem
          border .02rem solid #ccc
    .item-list
      .item
        line-height .76rem
        color #666
        padding-left .2rem
</style>


