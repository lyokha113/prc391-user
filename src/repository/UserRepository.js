import Repository from './Repository'

const resource = ''
export default {
  login(username, password) {
    const user = {
      email: username,
      password: password
    }
    return Repository.post(`${resource}/login`, user)
  }
}
