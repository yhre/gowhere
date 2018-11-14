<template>
  <div id="app">
    <!--缓存不包括Detail详情页-->
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  #app{
    width: 100%;
  }
</style>
