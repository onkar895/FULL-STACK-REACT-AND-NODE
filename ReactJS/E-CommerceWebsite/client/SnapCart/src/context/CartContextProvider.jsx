/* eslint-disable react/prop-types */
import { useState } from "react"
import CartContext from "./CartContext"

const CartContextProvider = ({ children }) => {

  const [cart, setCart] = useState([])

  const addToCart = (item) => {
    setCart((prev) => [...prev, item])
  }

  const context = {
    cart: cart,
    cartLength: cart.length,
    addToCart: addToCart,
  }

  return (
    <CartContext.Provider value={{ context, cart, cartLength: cart.length, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider


