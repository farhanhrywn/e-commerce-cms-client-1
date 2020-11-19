import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://hacktiv-store.herokuapp.com'
  // baseURL: 'http://localhost:3000'
})

export default instance
