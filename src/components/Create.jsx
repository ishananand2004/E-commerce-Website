import React, { useContext, useState } from 'react'
import { userContext } from '../utils/Context';
import {nanoid} from "nanoid";
const Create = () => {
    const[products,setProducts]= useContext(userContext);
    const[image,setimage]=useState("");
    const[title,settitle]=useState("");
    const[category,setcategory]=useState("");
    const[price,setprice]=useState("");
    const[description,setdescription]=useState("");

    let handleSubmit=(e)=>{
        e.preventDefault();
        if(title.trim().length<5 || image.trim().length < 5 || category.trim().length<5 || price.trim().length<5 ||description.trim().length<5){
            alert("All fields must be filled out");
            return;
        } 

        // now pure form ka data likha hua hai product me 
       let product ={
        // nanoid is used to use a normal id and it is used through npm i nanoid package
        id:nanoid(),
        title,
        price,
        description,
        category,
        image,
       }
      setProducts([...products,product]);
    }
  return (
    <form onSubmit={handleSubmit} className="w-screen bg-zinc-100 screen p-[5%] flex flex-col justify-center items-center">
        <h1 className='text-3xl font-bold mb-2 text-rose-300'>Add Product</h1>
       <hr className='w-full'/>

        <input onChange={(e)=>setimage(e.target.value)} value={image} type="URL" placeholder='Image Link' className='w-1/2 bg-zinc-300 text-1xl p-3 rounded-md mt-3 mb-3 border-none' />
        <input onChange={(e)=>settitle(e.target.value)} value={title} type="text" placeholder="title" className='w-1/2 bg-zinc-300 text-1xl p-3 rounded-md mt-3 mb-3' />


        <div className='w-1/2 flex justify-between'>
        <input onChange={(e)=>setcategory(e.target.value)} value={category} type="text" placeholder="category" className='w-[48%] bg-zinc-300 text-1xl p-3 rounded-md mt-3 mb-3 border-none' />
        <input onChange={(e)=>setprice(e.target.value)} value={price}  placeholder="price" className='w-[48%] bg-zinc-300 text-1xl p-3 rounded-md mt-3 mb-3 border-none' />
        </div>
        
        <textarea onChange={(e)=>setdescription(e.target.value)} value={description} className='w-1/2 bg-zinc-300 text-1xl p-3 rounded-md mt-3 mb-3' rows="10" placeholder='Enter the product description here....'></textarea>


        <div className='w-1/2'>
        <button type="submit" className="px-5 py-2 border rounded-md border-blue-200 text-blue-300" >Add product</button>
        
        </div>
    </form>
  )
}

export default Create;