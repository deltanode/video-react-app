const key = import.meta.env.VITE_API_KEY

const requests = {
  apiRequestPopularMovies: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  apiRequestTopRatedMovies: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  apiRequestTrendingMovies: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
  apiRequestHorrorMovies: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1&include_adult=false`,
  apiRequestUpcomingMovies: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`
}

export default requests
