/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import axios from 'axios'
import ProductCard from "./ProductCard"

const ProductList = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    // Fetch data from API
    const fetchProducts = async () => {
      try {
        const res = await axios.get('https://fakestoreapi.com/products')
        console.log(res)
        setProducts(res.data)
      } catch (error) {
        console.log(error.message)
      }
    }

    fetchProducts()
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {
        products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))
      }
    </div>
  )
}

export default ProductList
