import axios from './Axios';
import React, { createContext, useEffect, useState } from 'react'
export let userContext=createContext();
const Context = (props) => {
    let [products,setProducts]=useState(null);
    let getProduct = async()=>{
        try{
            let {data}=await axios("/products");
            setProducts(data); 
            // console.log(data);
        }
        catch(err){
            console.log(err);
        }
    }
    

    console.log(products);
    useEffect(()=>{
        getProduct();
    },[])

  return (
    <userContext.Provider value={[products,setProducts]}>
        {props.children}
    </userContext.Provider>
  )
}

export default Context;