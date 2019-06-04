<template>
  <div>
    <v-layout wrap>
      <v-navigation-drawer
        v-model="navDrawer"
        app
        dark
        temporary
        height="100vh"
      >
        <v-list class="pa-1">
          <v-list-tile
            avatar
            tag="div"
            @click.stop="
              {
                toogleNavDrawer(), (dialog = true)
              }
            "
          >
            <v-list-tile-avatar>
              <img
                src="https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.0-9/17799359_1459278687447696_8791451353187793014_n.jpg?_nc_cat=100&_nc_oc=AQn3maq3BjdZJPTzWI_yel9CQVH5S7OO4c2Q6ELxEvJX8-v73i_DOFVH8Fnqqgdax70&_nc_ht=scontent.fsgn2-2.fna&oh=49c182670507d267f531ff2313061496&oe=5D9F2B06"
              />
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>Nguyễn Long</v-list-tile-title>
            </v-list-tile-content>

            <v-dialog v-model="dialog" attach="body" width="768">
              <LoginSignup />
            </v-dialog>
          </v-list-tile>
        </v-list>

        <v-list class="pt-0" dense>
          <v-divider light></v-divider>

          <v-list-tile
            v-for="item in menus"
            :key="item.title"
            :to="item.link"
            @click.prevent
          >
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>

        <v-list class="pt-0" dense>
          <v-divider light></v-divider>

          <v-list-tile
            v-for="item in user_menus"
            :key="item.title"
            @click.prevent
          >
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
    </v-layout>
  </div>
</template>

<script>
import LoginSignup from '@/components/Header/LoginSignup'
export default {
  components: {
    LoginSignup
  },
  data() {
    return {
      dialog: false,
      user_menus: [
        { title: 'Tin Đã Đăng', icon: 'bookmarks' },
        { title: 'Tài Khoản', icon: 'perm_identity' },
        { title: 'Đăng Xuất', icon: 'undo' }
      ],
      menus: [
        { title: 'Trang Chủ', icon: 'home', link: '/' },
        { title: 'Đăng Bán', icon: 'attach_money', link: '/sale' },
        { title: 'Tìm Mua', icon: 'pageview', link: '/buy' }
      ]
    }
  },
  computed: {
    navDrawer: {
      get() {
        return this.$store.state.navDrawer
      },
      set(val) {
        this.$store.state.navDrawer = val
      }
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
aside.v-navigation-drawer {
  z-index: 100;
}
</style>
