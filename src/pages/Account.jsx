import React from "react"
import SavedMovies from "../components/SavedMovies"

const Account = () => {
  return (
    <>
      <div className="w-full text-white">
        <img className="w-full h-[400px] object-cover" src="https://assets.nflxext.com/ffe/siteui/vlv3/70805ddd-f38c-4e25-94cd-b5015e444ee0/6e99205c-e34b-4dbe-ba45-b026023791bc/IN-en-20230508-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="/" />
      </div>
      <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]" />
      <div className="absolute top-[20%] p-4 md:p-8">
        <h1 className="text-white text-3xl md:text-5xl font-bold">My Shows</h1>
      </div>
      <SavedMovies />
    </>
  )
}

export default Account
