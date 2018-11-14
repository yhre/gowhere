<template>
  <ul class="list">
    <li class="item"
        v-for="item of letters"
        :key="item"
        @touchstart.prevent="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        @click="handleLetterClick"
        :ref="item">{{item}}
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'CityAlphabet',
    props: {
      cities: Object
    },
    computed: {
      letters() {
        const letters = []
        for (let i in this.cities) {
          letters.push(i)
        }
        return letters
      }
    },
    data() {
      return {
        touchStatus: false,
        startY: 0,
        alphabetHeight: 0,
        timer: null
      }
    },
    //当数据加载出来后重新渲染
    updated() {
      this.startY = this.$refs['A'][0].offsetTop
      this.alphabetHeight = this.$refs['A'][0].clientHeight
    },
    methods: {
      handleLetterClick(event) {
        //传递给父组件
        this.$emit('change', event.target.innerText)
      },
      handleTouchStart() {
        this.touchStatus = true
      },
      handleTouchMove(e) {
        if (this.touchStatus) {
          //time做一个数据节流16毫秒之间（节约handleTouchMove的执行频率，优化代码性能）
          if (this.time) {
            clearTimeout(this.timer)
          }
          this.timer = setTimeout(() => {
            const touchY = e.touches[0].clientY - 74
            const index = Math.floor((touchY - this.startY) / this.alphabetHeight)
            if (index >= 0 && index < this.letters.length) {
              this.$emit('change', this.letters[index])
            }
          }, 16)
        }
      },
      handleTouchEnd() {
        this.touchStatus = false
      }
    }
  }
</script>

<style scoped lang="stylus" type="text/stylus">
  .list
    display flex
    flex-direction column
    justify-content center
    position absolute
    top: 1.80rem
    right: 0
    bottom: 0
    width .4rem
    .item
      text-align: center
      line-height .42rem
      color: #666
</style>
