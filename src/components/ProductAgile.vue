<template>
  <div>
    <v-card-title>
      <h3>{{ content.name }}</h3>
    </v-card-title>
    <!-- <agile :options="myOptions">
      <div v-for="(item, index) in content.listProduct" :key="index" class="slide ml-2">
        <router-link :to="'/product/' + item.id">
          <Product :content="item"/>
        </router-link>
      </div>
    </agile>-->

    <!-- co 2 sp nen deo de agile duoc -->
    <v-layout row>
      <v-flex xs3 v-for="(item, index) in content.listProduct" :key="index" class="ml-2">
        <router-link :to="'/product/' + item.id">
          <Product :content="item"/>
        </router-link>
      </v-flex>
    </v-layout>
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
