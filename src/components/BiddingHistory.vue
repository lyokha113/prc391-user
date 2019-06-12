<template>
  <div>
    <v-card-title>
      <h3>Lịch sử đấu giá</h3>
    </v-card-title>
    <v-data-table
      :items="histories"
      :headers="headers"
      class="elevation-1"
      hide-actions
    >
      <template v-slot:items="props">
        <td>{{ props.item.accountName }}</td>
        <td class="text-xs-center">{{ props.item.price }}</td>
        <td class="text-xs-center">{{ props.item.time }}</td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { db } from '@/plugins/firebase'
export default {
  data() {
    return {
      headers: [
        {
          text: 'Họ và tên',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'Giá đấu', value: 'price', sortable: false, align: 'center' },
        { text: 'Thời gian', value: 'time', sortable: false, align: 'center' }
      ],
      histories: []
    }
  },
  firestore() {
    return {
      histories: db
        .collection('bidding')
        .where('biddingId', '==', this.$route.params.productId)
    }
  }
  // computed: {
  //   getHistories() {
  //     console.log(this.histories)
  //     this.histories.forEach(h => {
  //       const date = new Date(h.time.seconds * 1000).toLocaleString()
  //       h.time = date
  //     })

  //     return this.histories
  //   }
  // }
}
</script>

<style></style>
