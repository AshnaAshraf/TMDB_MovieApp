import axios from 'axios';

const API_KEY = 'YOUR_TMDB_API_KEY'; // Replace with your real API key
const BASE_URL = 'https://api.themoviedb.org/3';

const tmdb = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export default tmdb;
