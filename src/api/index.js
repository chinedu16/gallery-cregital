
import axios from 'axios'

const AUTH_TOKEN = '563492ad6f917000010000018915ddab29fc4efda0deed3924190c95'
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN

const baseUrl = 'https://api.pexels.com/v1'

async function logIn (username, password) {
  const response = await axios.post(`${baseUrl}/login`, { username, password })
  return response
}

async function search (search) {
  const response = await axios.get(`${baseUrl}/search?query=${search}&per_page=20&page=1`)
  return response
}

async function next (url) {
  const response = await axios.get(url)
  return response
}

async function prev (url) {
  const response = await axios.get(url)
  return response
}

export default {
  logIn,
  search,
  next,
  prev
}
