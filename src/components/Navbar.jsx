import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 z-[100] absolute w-full ">
      <Link to="/">
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer uppercase">Netflix</h1>
      </Link>
      <div className="">
        <Link to="/login">
          <button className=" text-white pr-4">Sign In</button>
        </Link>
        <Link to="/signup">
          <button className="text-white bg-red-600 px-6 py-2">Sign Up</button>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
