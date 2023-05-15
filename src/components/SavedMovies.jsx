import React, { useState, useEffect } from "react"
import { UserAuth } from "../context/AuthContext"
import { db } from "../firebase"
import { updateDoc, doc, onSnapshot } from "firebase/firestore"
import { IMG_URL_W500 } from "../utils/constants"
import { truncateString } from "../utils/helper"
import { MdChevronLeft, MdChevronRight } from "react-icons/md"
import { AiOutlineClose } from "react-icons/ai"

const SavedMovies = () => {
  const [movies, setMovies] = useState([])
  const { user } = UserAuth()

  const slideLeft = () => {
    var slider = document.getElementById("slider")
    slider.scrollLeft = slider.scrollLeft - 500
  }

  const slideRight = () => {
    var slider = document.getElementById("slider")
    slider.scrollLeft = slider.scrollLeft + 500
  }

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), doc => {
      setMovies(doc.data()?.savedMovies)
    })
  }, [user?.email])

  const movieRef = doc(db, "users", `${user?.email}`)
  const deleteShow = async passedId => {
    try {
      const result = movies.filter(item => item.id !== passedId)
      await updateDoc(movieRef, {
        savedMovies: result
      })
      // console.log("clice")
    } catch (error) {
      console.log("[SavedMovies.jsx] Error: ", error.message)
    }
  }

  return (
    <div className="">
      <h2 className="text-white font-bold md:text-xl p-4">My Shows</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft onClick={slideLeft} size={40} className="bg-white opacity-50 hover:opacity-100 rounded-full cursor-pointer z-10 absolute left-3 hidden group-hover:block" />

        <div id={"slider"} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
          {movies?.map((item, index) => (
            <div key={index} className="w-[160px] sm:[200px] md-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
              <img className="w-full h-auto block" src={IMG_URL_W500 + item?.img} alt={item?.title} />
              <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
                <p className="whitespace-normal break-words text-xs md:text-sm font-bold h-full flex justify-center items-center p-3 text-center">{truncateString(item?.title, 180)}</p>
                <p onClick={() => deleteShow(item.id)} className="absolute top-4 right-0 text-gray-300 ">
                  <AiOutlineClose />
                </p>
              </div>
            </div>
          ))}
        </div>

        <MdChevronRight onClick={slideRight} size={40} className="bg-white opacity-50 hover:opacity-100 rounded-full cursor-pointer z-10 absolute right-3 hidden group-hover:block" />
      </div>
    </div>
  )
}

export default SavedMovies
