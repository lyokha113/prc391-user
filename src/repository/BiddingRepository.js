import Repository from '@/repository/Repository'

const resource = '/bid'

export default {
  getAllBidding() {
    return Repository.get(`${resource}`)
  },
  getBidding(id) {
    return Repository.get(`${resource}/${id}`)
  },
  bid(id, price) {
    const data = { bidId: id, price: price }
    return Repository.post(`${resource}`, data)
  }
}
