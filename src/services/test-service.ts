import api from '../config/axios'

export async function getTest() {
  return (await api.get('/test')).data
}
