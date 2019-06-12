<template>
  <div>
    <v-footer id="footer" class="white--text" height="auto">
      <v-container class="py-2">
        <v-layout wrap justify-center>
          <v-flex id="footer-content" xs8>
            <!-- News -->
            <v-layout row wrap justify-center>
              <!-- Social icons -->
              <v-flex class="px-1" xs5>
                <v-img
                  v-for="(icon, index) in socialIcons"
                  :key="index"
                  :src="icon"
                  width="40px"
                  height="40px"
                  lazyload
                  class="d-inline-flex mx-2"
                />
              </v-flex>
              <!-- Store icons -->
              <v-flex class="px-1" xs6>
                <v-img
                  v-for="(icon, index) in storeIcons"
                  :key="index"
                  :src="icon"
                  width="133px"
                  height="40px"
                  lazyload
                  class="d-inline-flex mx-2"
                />
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </v-footer>
    <v-footer id="copyright" class="justify-center white--text">
      @2019 -
      <strong>&nbsp;Đấu Giá</strong>
    </v-footer>
  </div>
</template>

<script>
import FooterNews from '@/components/FooterNews'

export default {
  components: {
    FooterNews
  },
  data() {
    return {
      logoImg: require('@/assets/images/logo.gif'),
      socialIcons: [
        require('@/assets/images/instagram_circle.png'),
        require('@/assets/images/pinterest_circle.png'),
        require('@/assets/images/facebook_circle_.png'),
        require('@/assets/images/google_circle.png'),
        require('@/assets/images/twitter_circle.png')
      ],
      storeIcons: [
        require('@/assets/images/icon_chplay.png'),
        require('@/assets/images/icon_appstore.png')
      ]
    }
  }
}
</script>
