<template>
  <div class="camera">
      <input type="file" accept="image/*" id="show-picture" @change="getFile($event)">
      <img v-if="image" :src="image" width="100%">
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
        image: ""
    }
  },
  methods: {
    getFile(event) {
      let files = event.target.files;
      console.log(event.target.files);
      if (files && files.length > 0) {
          let url = window.URL || window.webkitURL;
          this.image = url.createObjectURL(files[0]);
      }
    }
  }
}
</script>

<style>
.log-list {
  display: flex;
  flex-direction: column;
  padding: 40rpx;
}

.log-item {
  margin: 10rpx;
}
</style>
