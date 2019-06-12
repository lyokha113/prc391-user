import axios from 'axios'

const baseDomain = 'http://localhost:5000'
const baseURL = `${baseDomain}`

export default axios.create({
  baseURL,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
    'Content-Type': 'application/json'
  }
})
