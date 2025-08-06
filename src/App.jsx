import { BrowserRouter, Routes,Route } from "react-router-dom"
import Footer from "./components/footer"
import Navbar from "./components/Navbar"
import Login from "./components/Login"
import Feed from "./components/Feed"
import Body from "./Body"
import { Provider } from "react-redux"
import { appstore } from "./Utils/appstore"
function App() {
  return (
    <>
<Provider store={appstore}>
    <BrowserRouter basename="/">
    <Routes>
    <Route path="/" element={<Body/>}>
    <Route path="/login"element={<Login/>} />
    <Route path="/Feed"element={<Feed/>} />
    </Route>
    </Routes>
    </BrowserRouter>
</Provider>
    </>
  )
}

export default App
