import { useState } from "react"
import { IMG_URL_W500 } from "../utils/constants"
import { FaHeart, FaRegHeart } from "react-icons/fa"
import { truncateString } from "../utils/helper"

const Movie = ({ item }) => {
  const [like, setLike] = useState(false)
  return (
    <div className="w-[160px] sm:[200px] md-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
      <img className="w-full h-auto block" src={IMG_URL_W500 + item?.backdrop_path} alt={item?.title} />
      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
        <p className="whitespace-normal break-words text-xs md:text-sm font-bold h-full flex justify-center items-center p-3 text-center">{truncateString(item?.title, 180)}</p>
        <p>{like ? <FaHeart className="absolute top-4 left-4 text-gray-300" /> : <FaRegHeart className="absolute top-4 left-4 text-gray-300" />}</p>
      </div>
    </div>
  )
}

export default Movie
