import axios from 'axios'

const baseURL = window.appConfig?.baseUrl || 'http://localhost:3000'

const api = axios.create({
  baseURL,
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error)
    return Promise.reject(error)
  },
)

export default api
