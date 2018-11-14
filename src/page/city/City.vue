<template>
    <div>
      <city-header></city-header>
      <city-search :cities="cities"></city-search>
      <city-list :cities="cities"
                 :hot="hotCities"
                 :letter="letter">
      </city-list>
      <city-alphabet :cities="cities"
                     @change="handleLetterChange">
      </city-alphabet>
    </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './citycomponents/Header'
import CitySearch from './citycomponents/Search'
 import CityList from './citycomponents/List'
import CityAlphabet from './citycomponents/Alphabet'

export default {
  //  重新导入city-router分支
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: ''
    }
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json')
        .then(this.handleGetCityInfoSucc)
    },
    handleGetCityInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    },
    handleLetterChange (letter) {
      this.letter = letter
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style scoped lang="stylus">

</style>
