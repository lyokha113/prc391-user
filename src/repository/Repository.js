import axios from 'axios'

const baseDomain = 'http://prc391.ml'
const baseURL = `${baseDomain}`

export default axios.create({
  baseURL,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
    'Content-Type': 'application/json',
    Authorization: localStorage.getItem('userToken')
  }
})
