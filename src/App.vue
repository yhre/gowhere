<template>
  <div id="app">
  <div class="bg">cccc</div>
    <div class="bf">hhh</div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style type="text/stylus" lang="stylus" scoped>
  @import "assets/css/varibles.styl"
  .bg
   background:$bgColor;

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
