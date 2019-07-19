<template>
  <div class="map">
    <map id="map" longitude="113.324520" latitude="23.099994" scale="14" bindcontroltap="controltap" bindmarkertap="markertap" bindregionchange="regionchange" show-location style="width: 100%; height: 300px;"></map>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        image: ""
      }
    },
    mounted() {

    },
    methods: {
      getLocation() {

      }
    }
  }
</script>

<style>

</style>
