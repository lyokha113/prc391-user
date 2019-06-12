<template>
  <v-container>
    <v-breadcrumbs :items="itemBreadCrumbs" class="black--text">
      <template v-slot:divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
    <v-layout column v-if="bidding != null">
      <v-flex xs12 mb-3>
        <v-layout row>
          <v-flex xs4>
            <v-carousel :height="350" hide-delimiters>
              <v-carousel-item
                v-for="(item,i) in bidding.product.images"
                :key="i"
                :src="item.image"
              ></v-carousel-item>
            </v-carousel>
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
  mounted() {
    let method = 'GET'
    let url = this.$store.state.api.getBiddingDetail + this.bidding.id
    this.callAxios(method, url).then(result => {
      // this.product = result.data.data
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
      bidding: {
        id: this.$route.params.productId,
        currentPrice: '',
        endTime: '',
        product: { name: '', images: [{ image: '' }] }
      },
      selectedPrice: []
    }
  }
}
</script>

<style scoped>
.theme--dark.v-btn {
  color: black;
}
</style>
