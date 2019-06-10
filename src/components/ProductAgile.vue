<template>
  <div>
    <v-card-title>
      <h3>{{ content.name }}</h3>
    </v-card-title>
    <agile :options="myOptions">
      <div
        v-for="(item, index) in content.listProduct"
        :key="index"
        class="slide ml-2"
      >
        <router-link :to="'/product/' + item.productId">
          <Product :content="item" />
        </router-link>
      </div>
    </agile>
  </div>
</template>

<script>
import Product from '@/components/Product'
export default {
  components: {
    Product
  },
  props: {
    content: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      myOptions: {
        slidesToShow: 4
      }
    }
  }
}
</script>

<style></style>
