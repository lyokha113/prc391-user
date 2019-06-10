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
            <v-img :src="product.image" height="350"></v-img>
          </v-flex>
          <v-flex xs5 ml-4>
            <v-layout column>
              <v-flex>
                <h2>{{ product.name }}</h2>
              </v-flex>
              <v-flex>{{ product.timeExpired }}</v-flex>
              <v-flex>
                <v-select
                  :items="selectedPrice"
                  label="Chọn giá"
                  suffix="VNĐ"
                ></v-select>
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
        <BiddingHistory />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import BiddingHistory from '@/components/BiddingHistory'
export default {
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
      product: {
        id: this.$route.params.productId,
        image: require('@/assets/images/product.png'),
        name: 'Nón kết sơn logo da, mũ nón sơn',
        currentPrice: '19.000đ',
        timeExpired: '00 : 03 : 21'
      },
      selectedPrice: [
        '10.000',
        '15.000',
        '20.000',
        '25.000',
        '30.000',
        '35.000',
        '40.000',
        '45.000',
        '50.000',
        '55.000',
        '60.000',
        '65.000',
        '70.000',
        '75.000'
      ]
    }
  }
}
</script>

<style></style>
