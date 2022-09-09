import axios from 'axios'


const baseUrl = "https://www.omdbapi.com/";
const apiKey = "79b2ee11";


function searchMovie(searchPhrase, page = 1) {
  return axios.get(`${baseUrl}?apiKey=${apiKey}&s=${searchPhrase}&page=${page}`)
}


function getSingleMovie(movieId) {
  return axios.get(`${baseUrl}?apiKey=${apiKey}&i=${movieId}`)
}

export { searchMovie, getSingleMovie };