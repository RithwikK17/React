import React, { useCallBack, useEffect } from "react";
import Product from "../Components/Product";
import Productitem from "../Components/Productitem";

const url = "https://dummyjson.com"

function Page10(){
    const[products,setProducts]= useState([])

    const getProducts = useCallBack(()=>{
        fetch(`${url}/products`)
        .then(res=>res.json())
        .then(res=>{
            console.log(`products= `,res)
            setProducts(res?.products)
        }).catch(err=> console.log(err.message))
    },[])

    useEffect(()=>{
        getProducts()
    },[])

    return(
        <div className="container">
            <h1>useCallBack hook</h1>
            <p>useCallBack is a react hook that lets you cache funtion definititon between re-renders</p>
        </div>
        <Product products= {products}/>
    )
}

export default Page10;