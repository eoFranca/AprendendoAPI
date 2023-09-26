import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYzQ0NWNiYTJiNjMyZDc2YWUyODNkYzc5NDNlMjA5YiIsInN1YiI6IjY1MGRkYWQ4MjljNjI2MDExZDI4ZDcxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XaYCfNDT1vOlWnCIcHQwib2_eX0Tg8eAL-mmWGyOLnE`
  }
})

export default api
