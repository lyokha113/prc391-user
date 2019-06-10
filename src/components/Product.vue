<template>
  <v-card class="mx-auto" height="300">
    <!-- <v-img height="190" :src="content.product.images[0].image"></v-img> -->
    <v-img height="190" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"></v-img>
    <v-card-title class="pb-0">
      <span class="text-truncate black--text subheading">
        {{
        content.product.name
        }}
      </span>
    </v-card-title>
    <v-flex xs12 class="text-xs-center">
      <span class="product-price">
        {{
        content.currentPrice
        }}
      </span>
    </v-flex>
    <v-layout row justify-center>
      <v-flex xs10 class="product-timer" row>
        <v-layout>
          <v-flex xs4 pt-0 class="timer-clock">
            <span>1</span>
          </v-flex>
          <span class="colon">:</span>
          <v-flex xs4 pt-0 class="timer-clock">
            <span>1</span>
          </v-flex>
          <span class="colon">:</span>
          <v-flex xs4 pt-0 class="timer-clock">
            <span>1</span>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  created() {
    console.log(this.content)
  },
  props: {
    content: {
      type: Object,
      default: null
    }
  },
  data() {
    return {}
  }
}
</script>

<style scoped>
.v-card {
  background-color: white !important;
  position: relative;
  border-radius: 0px;
}
.v-card__title {
  display: flex;
  justify-content: center;
}
.v-card__title span {
  height: 20px;
}
.colon {
  line-height: 40px;
  text-align: center;
  vertical-align: middle;
  color: rgba(249, 121, 39, 0.8);
  font-size: 28px;
  font-weight: bold;
  margin-left: 5px;
  margin-right: 5px;
}
.timer-clock {
  background: #f2f1f1;
  box-shadow: 4px 3px 5px 0px rgba(158, 158, 158, 1);
  height: 40px;
  text-align: center;
  border-radius: 4px;
  padding-top: 5px;
  color: rgba(249, 121, 39, 0.8);
}
.timer-clock-vip {
  background: rgba(249, 121, 39, 0.8);
  color: white;
}
.timer-clock span {
  vertical-align: middle;
  line-height: 40px;
  font-size: 20px !important;
  font-weight: 500;
}

.product-price {
  font-size: 17px !important;
  color: #e47328 !important;
  font-weight: bold;
}
</style>
