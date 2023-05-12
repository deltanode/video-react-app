import axios from "axios"
import React, { useEffect, useState } from "react"
import Movie from "./Movie"
import { MdChevronLeft, MdChevronRight } from "react-icons/md"

const Row = ({ title, fetchURL, rowId }) => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    axios(fetchURL).then(response => {
      setMovies(response.data.results).catch(err => alert("Axios Error: " + err.message))
    })
  }, [fetchURL])

  const slideLeft = () => {
    var slider = document.getElementById("slider" + rowId)
    slider.scrollLeft = slider.scrollLeft - 500
  }

  const slideRight = () => {
    var slider = document.getElementById("slider" + rowId)
    slider.scrollLeft = slider.scrollLeft + 500
  }

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft onClick={slideLeft} size={40} className="bg-white opacity-50 hover:opacity-100 rounded-full cursor-pointer z-10 absolute left-3 hidden group-hover:block" />

        <div id={"slider" + rowId} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
          {movies.map((item, index) => (
            <Movie ket={index} item={item} />
          ))}
        </div>

        <MdChevronRight onClick={slideRight} size={40} className="bg-white opacity-50 hover:opacity-100 rounded-full cursor-pointer z-10 absolute right-3 hidden group-hover:block" />
      </div>
    </>
  )
}

export default Row
