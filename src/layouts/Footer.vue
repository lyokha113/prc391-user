<template>
  <div>
    <v-footer id="copyright" class="justify-center white--text">
      @2019 -
      <strong>&nbsp;Đấu Giá</strong>
    </v-footer>
  </div>
</template>

<script>
export default {
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
