<template>
  <div class="map">
    <div class="amap my-map" id="map" style="height: 400px;width: 100%;">
    </div>
    <button @click="linkTo('gaode')">导航高德</button>
    <button @click="linkTo('baidu')">导航百度</button>
  </div>
</template>

<script>
  import AMap from 'AMap'
  export default {
    data () {
      return {
        image: ""
      }
    },
    mounted() {
      console.log(AMap)
      var map = new AMap.Map('map', {
        resizeEnable: true, //是否监控地图容器尺寸变化
        zoom:11, //初始化地图层级
        center: [116.397428, 39.90923] //初始化地图中心点
      });
    },
    methods: {
      linkTo(type) {
         if (type == "gaode") {
            window.location.href = "https://uri.amap.com/marker?position=116.397428,39.90923&name=北京"
         } else {
            window.location.href = "http://api.map.baidu.com/marker?location=116.397428,39.90923&title=北京&output=html"
         }
      }
    }
  }
</script>

<style>

</style>
