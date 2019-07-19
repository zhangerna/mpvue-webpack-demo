<template>
  <div class="index">
        <div class="placeholder" v-for="(item, key) in list" :key="key">
          <card :data="item"></card>
        </div>
  </div>
</template>

<script>
    import card from '@/components/card'
    export default {
        components: {
          card
        },
        data () {
            return {
                list: [
                    {
                        img: "https://cdn.shopify.com/s/files/1/0703/1149/files/ckf_b45e6543-e5d3-4e50-ab10-8cd72b2610c9.jpg?708313",
                        title: "product 1",
                        des: "Never Lose Your Car Key Again"
                    },
                    {
                        img: "https://cdn.shopify.com/s/files/1/0703/1149/files/ckf_b45e6543-e5d3-4e50-ab10-8cd72b2610c9.jpg?708313",
                        title: "product 2",
                        des: "Never Lose Your Car Key Again"
                    },
                    {
                        img: "https://cdn.shopify.com/s/files/1/0703/1149/files/ckf_b45e6543-e5d3-4e50-ab10-8cd72b2610c9.jpg?708313",
                        title: "product 3",
                        des: "Never Lose Your Car Key Again"
                    }
                ]

            }
        },

        methods: {},
    }
</script>

<style scoped>
    .index .placeholder {
      margin: 10px;
    }
</style>
