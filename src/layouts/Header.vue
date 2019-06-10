<template>
  <v-toolbar app absolute class="bg-color">
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>Sản phẩm đấu giá</v-btn>
      <v-btn flat>Đấu giá của tôi</v-btn>
      <v-btn flat>Link Three</v-btn>
      <v-btn @click.stop="dialog = true">Login</v-btn>
    </v-toolbar-items>
    <v-dialog v-model="dialog">
      <LoginSignup />
    </v-dialog>
  </v-toolbar>
</template>

<script>
import LoginSignup from '@/components/Login/LoginSignup'
export default {
  components: {
    LoginSignup
  },
  data() {
    return {
      dialog: false
    }
  }
}
</script>

<style scoped>
>>> .v-toolbar__content {
  max-width: 1125.9375px;
  -webkit-box-flex: 1;
  -ms-flex: 1 1 100%;
  flex: 1 1 100%;
  margin: auto;
  padding: 24px;
  width: 100%;
}
</style>
