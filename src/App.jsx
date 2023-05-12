import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { AuthContextProvider } from "./context/AuthContext"

const appConfig = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  }
])

function App() {
  return (
    <AuthContextProvider>
      <Navbar />
      <RouterProvider router={appConfig} />
    </AuthContextProvider>
  )
}

export default App
