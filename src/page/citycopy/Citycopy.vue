<template>
<div>
  <cheader></cheader>
  <clist :cities="cities"
         :hot="hotCities" :letter="letter"></clist>
  <cserach :cities="cities"></cserach>
  <calphabet :cities="cities" @change="lettercheck"></calphabet>
</div>
</template>
<script>
  import axios from 'axios'
  import Cheader from './copycomponent/Cheader'
  import Clist from './copycomponent/Clist'
  import Cserach from './copycomponent/Cserach'
  import Calphabet from './copycomponent/Calphabet'
    export default {
        name: "Citycopy",
        components:{
          Cheader,
          Clist,
          Cserach,
          Calphabet
        },
      data(){
        return{
          cities: {},
          hotCities: [],
          letter: ''
        }
      },
      methods:{
        getCityInfo(){
          axios.get('/api/city.json').then((res)=>{
            res = res.data;
            if(res.ret && res.data){
              const data = res.data
              this.cities = data.cities
              this.hotCities = data.hotCities
              console.log(this.cities)
            }
          })
        },
        lettercheck(letter){
          this.letter=letter
        }
      },
      mounted(){
          this.getCityInfo();
      }
    }
</script>

<style lang="stylus" type="text/stylus" scoped>

</style>

