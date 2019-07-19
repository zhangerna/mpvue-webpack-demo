<template>
  <div class="weui-flex list-card">
      <img class="weui-flex__item" :src="data.img" width="40%">
      <div class="weui-flex__item right">
        <h3>{{ data.title }}</h3>
        <p>{{ data.des }}</p>
        <button class="weui-cell_link placeholder-top" @click="linkTo('camera')">拍照</button>
        <button class="weui-cell_link placeholder-top" @click="linkTo('map')">地图</button>
      </div>
  </div>
</template>

<script>
export default {
  name: "card",
  props: ['data'],
  data() {
      return {

      }
  },
  methods: {
    linkTo(type) {
        console.log(this.platform)
        let url;
        let temp = this.platform == "h5" ? ["/camera", "/map"] : ["../cameraWx/main", "../mapWx/main"];
        url = type == "camera" ? temp[0] : temp[1];
        console.log(url)
        if (this.platform == 'h5') {
            this.$router.push(url);
        } else {
            mpvue.switchTab({ url })
        }
    }
  }
}
</script>

<style>
  .list-card .right {
    margin-left: 10px;
  }
  .list-card .placeholder-top {
    margin-top: 20px;
    color: blue;
  }
</style>
