<template>
  <div class="camera">
    <camera device-position="back" flash="off" binderror="error" style="width: 100%; height: 300px;"></camera>
    <button @click="takePhoto()">拍照</button>
    <image mode="widthFix" :src="image"></image>
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
      takePhoto() {
        let self = this;
        wx.createCameraContext().takePhoto({
          quality: 'high',
          success: (res) => {
            console.log(res.tempImagePath)
            self.image = res.tempImagePath
          }
        })
      }

    }
  }
</script>

<style>

</style>
