<template>
  <v-container>
    <v-breadcrumbs :items="itemBreadCrumbs" class="black--text">
      <template v-slot:divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
    <v-layout column>
      <v-flex xs12 mb-3>
        <v-layout row>
          <v-flex xs4>
            <v-img :src="bidding.product.images[0].image" height="350"></v-img>
          </v-flex>
          <v-flex xs5 ml-4>
            <v-layout column>
              <v-flex>
                <h2>Tên: {{ bidding.product.name }}</h2>
              </v-flex>
              <v-flex>Thời gian kết thúc: {{ bidding.endTime }}</v-flex>
              <v-flex>Giá hiện tại: {{ bidding.currentPrice }}</v-flex>
              <v-flex>
                <v-select :items="selectedPrice" label="Chọn giá" suffix="VNĐ"></v-select>
                <v-btn class="bg-color white--text ma-0">
                  <template>
                    <span class="mr-2">
                      <v-icon>fa-gavel</v-icon>
                    </span>
                  </template>
                  Đấu giá
                </v-btn>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs12>
        <BiddingHistory/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import BiddingHistory from '@/components/BiddingHistory'
export default {
  created() {
    let method = 'GET'
    let url = this.$store.state.api.getBiddingDetail + this.bidding.id
    console.log(url)
    this.callAxios(method, url).then(result => {
      // this.product = result.data.data
      console.log(result.data.data)
      this.bidding = result.data.data.bidding
      this.selectedPrice = result.data.data.bidPrices
    })
  },
  components: {
    BiddingHistory
  },
  data() {
    return {
      itemBreadCrumbs: [
        {
          text: 'Trang chủ',
          disabled: false,
          href: '/Home'
        },
        {
          text: 'Chi tiết sản phẩm',
          disabled: true,
          href: 'breadcrumbs_link_1'
        }
      ],
      // product: {
      //   id: this.$route.params.productId,
      //   image: require('@/assets/images/product.png'),
      //   name: 'Nón kết sơn logo da, mũ nón sơn',
      //   currentPrice: '19.000đ',
      //   timeExpired: '00 : 03 : 21'
      // },
      bidding: {
        id: this.$route.params.productId,
        currentPrice: '',
        endTime: '',
        product: { name: '', images: [] }
      },
      selectedPrice: []
    }
  }
}
</script>

<style></style>
