<template>
  <v-layout column>
    <v-flex>
      <Carousel :album="banner" />
    </v-flex>
    <v-layout row>
      <v-flex v-for="(item, index) in bannerItem" :key="index" xs4>
        <v-img :src="item" height="150" lazyload />
      </v-flex>
    </v-layout>
  </v-layout>
</template>

<script>
import Carousel from '@/components/Carousel'
export default {
  components: {
    Carousel
  },
  data() {
    return {
      banner: [
        require('@/assets/images/banner1.jpg'),
        require('@/assets/images/banner2.jpg'),
        require('@/assets/images/banner3.jpg'),
        require('@/assets/images/banner4.jpg'),
        require('@/assets/images/banner5.jpg'),
        require('@/assets/images/banner6.jpg')
      ],
      bannerItem: [
        'https://media-ak.static-adayroi.com/0_0/80/images/h17/h59/17329174872094.jpg',
        'https://media-ak.static-adayroi.com/0_0/80/images/hf0/h96/17329167040542.jpg',
        'http://emocial.co.uk/wp-content/uploads/2015/12/Design-effective-4.png'
      ]
    }
  }
}
</script>

<style></style>
