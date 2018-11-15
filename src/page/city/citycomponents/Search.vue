<template>
  <div>
    <div class="search">
      <input type="text" class="search-input" v-model="keyword" placeholder="输入城市名或拼音">
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li class="search-item border-bottom"
            v-for="item of list"
            :key="item.id"
            @click="handleCityClick(item.name)">{{item.name}}</li>
        <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
  import { mapMutations } from 'vuex'
export default {
  name: 'CitySearch',
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  methods: {
    handleCityClick (city) {
       this.$store.commit('changeCity', city)
      this.changeCity(city)
      this.$router.push('/')
    },
      ...mapMutations(['changeCity'])
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            //搜索关键词
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  props: {
    cities: Object
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search,{ mouseWheel: true, click: true, tap: true })
  }
}
</script>

<style lang="stylus" type="text/stylus" scoped>
  .search
    height: .72rem
    padding 0 .1rem
    background #02a5c2
    .search-input
      height: .62rem
      line-height .62rem
      width 100%
      text-align: center
      color #666
      padding 0 .1rem
      box-sizing border-box
      border-radius .06rem
  .search-content
    overflow hidden
    background #eee
    z-index 1
    position absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    .search-item
      line-height .62rem
      background #fff
      padding-left .2rem
      color #666
</style>
