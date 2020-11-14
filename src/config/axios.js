import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://hacktiv-store.herokuapp.com'
})

export default instance
