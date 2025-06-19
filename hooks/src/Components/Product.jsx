import React from "react";
import Productitem from "./Productitem";

function Product(props){
    return(
        <div className="products">
            {
                props?.products?.map((item,index)=>{
                    return(
                        <ProductItem key={index}{...item}/>
                    )
                })
            }
        </div>
    )
}
export default Product;