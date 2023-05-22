import axios from 'axios'

export const api = axios.create({
  // Use local ip address
  baseURL: 'http://192.168.1.6:3333',
})
