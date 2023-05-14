import { Link, useNavigate } from "react-router-dom"
import { UserAuth } from "../context/AuthContext"

const Navbar = () => {
  const { user, logOut } = UserAuth()
  // console.log("[Navbar.js] user= " + user)
  // console.log("[Navbar.js] user.email= " + user?.email)
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await logOut()
      navigate("/")
    } catch (error) {
      console.log("Firebase Error [Navbar.js]: ", error)
      alert("Firebase Error [Navbar.js]: ", error)
    }
  }
  return (
    <nav className="flex justify-between items-center p-4 z-[100] absolute w-full ">
      <Link to="/">
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer uppercase">Netflix</h1>
      </Link>

      {user?.email ? (
        <div>
          <Link to="/account">
            <button className=" text-white pr-4">Account</button>
          </Link>
          <Link>
            <button onClick={handleLogout} className="text-white bg-red-600 px-6 py-2">
              Logout
            </button>
          </Link>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className=" text-white pr-4">Sign In</button>
          </Link>
          <Link to="/signup">
            <button className="text-white bg-red-600 px-6 py-2">Sign Up</button>
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar
