<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 mb-3>
        <v-card-title>
          <h2>Trang chủ</h2>
        </v-card-title>
        <v-layout row>
          <v-flex xs3>
            <v-list class="pa-0">
              <v-list-tile
                v-for="item in menuTitle"
                :key="item.title"
                avatar
                style="height: 50px"
                @click
              >
                <v-list-tile-action>
                  <v-icon style="font-size: 16px">{{ item.icon }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title
                    style="font-size: 15px"
                    v-text="item.title"
                  ></v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-flex>
          <v-flex xs9>
            <Banner />
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs12>
        <ProductAgile :content="currentBid" />
      </v-flex>
    </v-layout>
    <Service />
  </v-container>
</template>
<script>
import Banner from '@/layouts/Banner'
import Service from '@/layouts/Service'
import ProductAgile from '@/components/ProductAgile'

export default {
  components: {
    Banner,
    ProductAgile,
    Service
  },
  data() {
    return {
      menuTitle: [
        {
          title: 'Điện thoại',
          icon: 'fa-mobile-alt'
        },
        {
          title: 'Laptop - Thiết bị IT',
          icon: 'fa-desktop'
        },
        {
          title: 'Thời trang',
          icon: 'fa-tshirt'
        },
        {
          title: 'Phương tiện đi lại',
          icon: 'fa-motorcycle'
        },
        {
          title: 'Trang sức làm đẹp',
          icon: 'fa-gem'
        },
        {
          title: 'Đồ trẻ em',
          icon: 'fa-baby-carriage'
        },
        {
          title: 'Sức khỏe thể thao',
          icon: 'fa-heartbeat'
        },
        {
          title: 'Đồ chơi',
          icon: 'fa-democrat'
        },
        {
          title: 'Đồ sưu tầm',
          icon: 'fa-images'
        },
        {
          title: 'Bất động sản',
          icon: 'fa-building'
        }
      ],
      currentBid: {
        name: 'Phiên đang đấu',
        listProduct: [
          {
            productId: 1,
            name: 'Điện thoại số 1'
          },
          {
            productId: 2,
            name: 'Điện thoại số 2'
          },
          {
            productId: 3,
            name: 'Điện thoại số 3'
          },
          {
            productId: 4,
            name: 'Điện thoại số 4'
          },
          {
            productId: 5,
            name: 'Điện thoại số 5'
          },
          {
            productId: 6,
            name: 'Điện thoại số 6'
          }
        ]
      }
    }
  }
}
</script>

<style></style>
