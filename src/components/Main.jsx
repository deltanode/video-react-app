import { useEffect, useState } from "react"
import axios from "axios"
import request from "../utils/requests"
import { IMG_URL } from "../utils/constants"
import { truncateString } from "../utils/helper"

const Main = () => {
  const [movies, setMovies] = useState([])
  // Picking a random movie from all the movies
  const movie = movies[Math.floor(Math.random() * movies.length)]
  console.log(movie)

  useEffect(() => {
    // fetch(request.apiRequestPopularMovies)
    //   .then(response => response.json())
    //   .then(data => setMovies(data))
    axios.get(request.apiRequestPopularMovies).then(response => {
      setMovies(response.data.results)
    })
  }, [])

  return (
    <section className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black" />
        <img className="w-full h-full object-cover" src={IMG_URL + movie?.backdrop_path} alt={"movie.title"} />
      </div>

      <div className="absolute w-full top-[20%] p-4 md:p-8">
        <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
        <div className="my-4">
          <button className="bg-slate-300 text-black py-2 px-5 border border-gray-300">Play</button>
          <button className="text-white py-2 px-5 ml-4 border border-gray-300">Watch Later</button>
        </div>
        <p className="text-gray-400 text-sm">Released: {movie?.release_date}</p>
        <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">{truncateString(movie?.overview, 150)}</p>
      </div>
    </section>
  )
}

export default Main
