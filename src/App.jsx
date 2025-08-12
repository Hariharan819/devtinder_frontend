import { BrowserRouter, Routes,Route } from "react-router-dom"
import Footer from "./components/footer"
import Navbar from "./components/Navbar"
import Login from "./components/Login"
import Feed from "./components/Feed"
import Body from "./components/Body"
import { Provider } from "react-redux"
import appstore from "./Utils/appstore"
import Profile from "./components/Profile"
import Connections from "./components/Connections"

function App() {
  return (
    <>
<Provider store={appstore}>
    <BrowserRouter basename="/">
    <Routes>
    <Route path="/" element={<Body/>}>
    <Route path="/"element={<Feed/>} /> 
    <Route path="/login"element={<Login/>} />
    <Route path="/profile"element={<Profile/>} />
    <Route path="/connections"element={<Connections/>} />
   
    </Route>
    </Routes>
    </BrowserRouter>
</Provider>
    </>
  )
}

export default App
