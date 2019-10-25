
import axios from 'axios'

const AUTH_TOKEN = '563492ad6f917000010000018915ddab29fc4efda0deed3924190c95'
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN

const baseUrl = 'https://api.pexels.com/v1'

async function logIn (username, password) {
  const response = await axios.post(`${baseUrl}/login`, { username, password })
  return response
}

async function search () {
  const response = await axios.get(`${baseUrl}/search?query=life`)
  return response
}

export default {
  logIn,
  search
}
