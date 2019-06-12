import BiddingRepository from '@/repository/BiddingRepository'

const repositories = {
  bidding: BiddingRepository
}

export const RepositoryFactory = {
  get: name => repositories[name]
}
