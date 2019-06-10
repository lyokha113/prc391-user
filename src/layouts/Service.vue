<template>
  <v-layout justify-center mt-4 wrap>
    <v-flex
      v-for="(item, index) in serviceList"
      :key="index"
      sm3
      xs6
      style="background-color: white"
      :style="{ borderRight: index != 3 ? '0.8px solid #f2f1f1' : '0' }"
    >
      <v-hover>
        <v-card
          slot-scope="{ hover }"
          flat
          :class="`elevation-${hover ? 12 : 2}`"
          class="service-item"
        >
          <v-layout justify-center>
            <v-flex xs3 mt-4>
              <v-img :src="item.img" contain></v-img>
            </v-flex>
          </v-layout>
          <v-flex mt-4 mx-4 pb-3>
            <p class="text-xs-center service-title mb-0">{{ item.title }}</p>
          </v-flex>
        </v-card>
      </v-hover>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      serviceList: [
        {
          title: 'DỊCH VỤ CHĂM SÓC KHÁCH HÀNG',
          img: require('@/assets/images/service01.png')
        },
        {
          title: 'HÌNH THỨC THANH TOÁN',
          img: require('@/assets/images/service02.png')
        },
        {
          title: 'CHÍNH SÁCH BẢO MẬT',
          img: require('@/assets/images/service03.png')
        },
        {
          title: 'ĐĂNG KÝ THÀNH VIÊN',
          img: require('@/assets/images/service04.png')
        }
      ],
      serviceTitleList: []
    }
  }
}
</script>

<style scoped>
.service-item {
  height: 100%;
}
.service-title {
  font-size: 12px;
  font-weight: 600;
}
.service-item:hover {
  cursor: pointer;
  z-index: 10;
}
.elevation-2 {
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2) !important;
}
</style>
