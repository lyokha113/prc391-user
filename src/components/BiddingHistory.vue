<template>
  <div>
    <v-card-title>
      <h3>Lịch sử đấu giá</h3>
    </v-card-title>
    <v-data-table
      :items="desserts"
      :headers="headers"
      class="elevation-1"
      hide-actions
    >
      <template v-slot:items="props">
        <td>{{ props.item.name }}</td>
        <td class="text-xs-center">{{ props.item.price }}</td>
        <td class="text-xs-center">{{ props.item.time }}</td>
        <td class="text-xs-center">{{ props.item.status }}</td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
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
        { text: 'Thời gian', value: 'time', sortable: false, align: 'center' },
        {
          text: 'Trạng thái',
          value: 'status',
          sortable: false,
          align: 'center'
        }
      ],
      desserts: [
        {
          name: 'Lê Minh Dui',
          price: 159,
          time: 6.0,
          status: 24
        },
        {
          name: 'Lê Minh Dui',
          price: 159,
          time: 6.0,
          status: 24
        },
        {
          name: 'Lê Minh Dui',
          price: 159,
          time: 6.0,
          status: 24
        },
        {
          name: 'Lê Minh Dui',
          price: 159,
          time: 6.0,
          status: 24
        },
        {
          name: 'Lê Minh Dui',
          price: 159,
          time: 6.0,
          status: 24
        }
      ]
    }
  }
}
</script>

<style></style>
