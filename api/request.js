import axios from 'axios'

const request = axios.create({
  baseURL: 'http://159.65.204.28:17071',
  headers: { Accept: "application/json"},

})

export default request