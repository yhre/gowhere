<template>
  <ul class="list">
    <li class="item" v-for="(item,key) in letters" @click="lettercheck($event)">
        {{item}}
    </li>
  </ul>
</template>

<script>
    export default {
        name: "Calphabet",
        props:{
          cities: Object,
        },
       data(){
          return{

          }
       },
      methods:{
        lettercheck(event){
          console.log('ee')
           this.$emit('change', event.target.innerText)
        }
      },
      computed: {
        letters () {
          const letters = []
          for (let i in this.cities) {
            letters.push(i)
          }
          return letters
        }
      },
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
    z-index 888
    .item
      text-align: center
      line-height .42rem
      color: #666
</style>

