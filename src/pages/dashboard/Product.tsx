import { useState } from "react"
import CategorySidebar from "../../components/product/CategorySidebar"
import { categories } from "../../mock_data"
import Products from "../../components/product/Products"
import ProductTopbar from "../../components/product/ProductTopbar"

const Product = () => {
  const [currentCategory, setCurrentCategory] = useState(categories[0].id || 1)
  console.log(currentCategory);

  return (
    <div className='w-full flex'>
      <div className='w-1/4'>
        <CategorySidebar currentCategory={currentCategory} categories={categories} setCurrentCategory={setCurrentCategory} />
      </div>
      <div className="w-3/4 p-1 flex flex-col">
        <div className="w-full">
          <ProductTopbar />
        </div>
        <div className="mt-4">
          <Products categoryId={currentCategory} />
        </div>
      </div>
    </div>
  )
}

export default Product