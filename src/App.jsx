import { BrowserRouter, Routes,Route } from "react-router-dom"
import Footer from "./components/footer"
import Navbar from "./components/Navbar"
import Login from "./components/Login"
import Feed from "./components/Feed"
import Body from "./Body"
function App() {
  return (
    <>
  <BrowserRouter basename="/">
  <Routes>
    <Route path="/" element={<Body/>}>
    <Route path="/login"element={<Login/>} />
    <Route path="/Feed"element={<Feed/>} />
    </Route>
  </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
