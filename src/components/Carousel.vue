<template>
  <v-carousel hide-delimiters height="350">
    <v-carousel-item
      v-for="(item, i) in album"
      :key="i"
      :src="item"
    ></v-carousel-item>
  </v-carousel>
</template>
<script>
export default {
  props: {
    album: {
      type: Array,
      default: null
    }
  },
  data() {
    return {}
  }
}
</script>
