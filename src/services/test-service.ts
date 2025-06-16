import axios from 'axios'
import { onMounted } from 'vue'

export async function getTest() {
  return (await axios.get('http://localhost:3000/test')).data
}
