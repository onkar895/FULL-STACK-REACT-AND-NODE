import NavBar from "./Components/NavBar"
import { Route, Routes } from 'react-router-dom'
import Home from "./Pages/Home"
import Products from "./Pages/Products"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Cart from "./Pages/Cart"
import Wishlist from "./Pages/Wishlist"
import Profile from "./Pages/Profile"


const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  )
}

export default App
