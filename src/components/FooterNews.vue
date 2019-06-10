<template>
  <v-content>
    <v-layout wrap>
      <v-flex
        v-for="types in news"
        :key="types.id"
        xs12
        sm6
        md4
        row
        class="pa-3 news"
      >
        <p class="title yellow--text text--light-2 mb-2">{{ types.name }}</p>
        <router-link
          v-for="item in types.news"
          :key="item.id"
          to="#"
          class="white--text d-flex my-2"
          >{{ item.title }}</router-link
        >
      </v-flex>
    </v-layout>
  </v-content>
</template>

<script>
import news from '@/data/news.json'
export default {
  data() {
    return {
      news
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
  margin: 10px 0 10px 0;
  font-size: 14px;
}
@media only screen and (max-width: 992px) {
  .news {
    padding: 20px 5px 0 5px !important;
  }
}
</style>
