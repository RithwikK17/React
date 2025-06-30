import React, { createContext, useState} from 'react'

export const ProductContext = createContext()


function ProductProvider(props) {
    const [produts,setProducts] = useState([])

  return (
    <ProductContext.Provider value={{produts}}>
         {
            props.children
         }
    </ProductContext.Provider>
  )
}

export default ProductProvider
