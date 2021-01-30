import axios from 'axios'

const request = axios.create({
  baseURL: 'http://localhost:17071',
  headers: { Accept: "application/json"},

})

export default request