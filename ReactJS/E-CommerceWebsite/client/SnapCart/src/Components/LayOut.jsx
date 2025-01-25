import ImageCarousel from "./ImageCarousel"
import ProductList from "./ProductList/ProductList"



const LayOut = () => {
  return (
    <>
      <div className="flex flex-col gap-20 px-4 md:px-20 py-40">
        <ImageCarousel />
        <ProductList />
      </div>
    </>
  )
}

export default LayOut
