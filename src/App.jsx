import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import { RouterProvider, createBrowserRouter } from "react-router-dom"

const appConfig = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  }
])

function App() {
  return (
    <div>
      <Navbar />
      <RouterProvider router={appConfig} />
    </div>
  )
}

export default App
