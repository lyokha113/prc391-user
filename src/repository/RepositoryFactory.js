import BiddingRepository from '@/repository/BiddingRepository'
import UserRepository from '@/repository/UserRepository'

const repositories = {
  bidding: BiddingRepository,
  user: UserRepository
}

export const RepositoryFactory = {
  get: name => repositories[name]
}
