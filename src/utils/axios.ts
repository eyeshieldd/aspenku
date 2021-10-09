import axios from 'axios'

const internal = axios.create({
  baseURL: 'https://apis-dev.aspenku.com/api/v1/product',
  withCredentials: false,
  headers: {
    Authorization: 'Basic QXNwZW5rdTpBc3Blbmt1',
  },
})

internal.interceptors.request.use((config) => {
  return config
})

export default internal
