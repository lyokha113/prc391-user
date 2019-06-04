<template>
  <v-toolbar app fixed dark style="background-color: #424242">
    <v-toolbar-side-icon @click="toogleNavDrawer()"></v-toolbar-side-icon>
    <v-toolbar-title>DANH MỤC</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <img
        src="@/static/images/logo.png"
        alt="logo"
        @click="$router.push('/')"
      />
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-badge color="blue-grey" style="margin: 15px 20px 0px 0px" overlap>
        <template v-slot:badge>
          <span>6</span>
        </template>
        <v-icon large color="grey" @click.prevent="msgBox = !msgBox"
          >notifications</v-icon
        >
      </v-badge>
      <!-- <v-badge color="blue-grey" style="margin: 15px 20px 0px 0px" overlap>
        <template v-slot:badge>
          <span>5</span>
        </template>
        <v-icon large color="grey" @click.prevent>favorite</v-icon>
      </v-badge>-->
      <v-btn
        color="blue-grey"
        dark
        round
        small
        style="height: 40px; width: 100px"
        to="/sale"
        >Đăng Bán</v-btn
      >
    </v-toolbar-items>
    <MsgBox :style="{ display: msgBox ? 'flex' : 'none' }" />
  </v-toolbar>
</template>

<script>
import MsgBox from '@/components/Header/MsgBox'
export default {
  components: {
    MsgBox
  },
  data() {
    return {
      msgBox: false
    }
  },
  computed: {
    navDrawer() {
      return this.$store.state.navDrawer
    }
  },
  methods: {
    toogleNavDrawer() {
      this.$store.commit('toggleNavDrawer', !this.$store.state.navDrawer)
    }
  }
}
</script>

<style scoped>
img:hover {
  cursor: pointer;
}
i:hover {
  color: white !important;
  caret-color: white !important;
}

nav.v-toolbar {
  z-index: 99;
}
</style>
