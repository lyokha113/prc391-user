<template>
  <v-app id="sandbox">
    <Header />
    <v-content>
      <router-view></router-view>
    </v-content>
    <Footer />
  </v-app>
</template>

<style></style>

<script>
import Footer from '@/layouts/Footer'
import Header from '@/layouts/Header'
export default {
  components: {
    Footer,
    Header
  }
}
</script>
<style></style>
