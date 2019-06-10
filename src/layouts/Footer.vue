<template>
  <div>
    <v-footer id="footer" class="white--text" height="auto">
      <v-container class="pb-1">
        <v-layout wrap>
          <v-flex xs12 sm12 md4 class="subheading">
            <v-img id="logo" :src="logoImg" :height="150" class="mb-3" lazyload :width="270"/>
            <p>Giấy phép kinh doanh:</p>
            <p>Trụ sở chính: 100 Trần Hưng Đạo, phường Cầu Kho, Quận 1</p>
            <p>Hotline: 028 21521245</p>
            <p>Số Fax:</p>
            <p class="font-weight-bold">Website đang chạy thử nghiệm</p>
          </v-flex>
          <v-flex id="footer-content" xs12 sm12 md8 class="pt-4">
            <!-- News -->
            <FooterNews/>
            <v-layout row wrap>
              <!-- Social icons -->
              <v-flex class="px-1" xs12 sm5 md5>
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
              <v-flex class="px-1" xs12 sm7 md7>
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
