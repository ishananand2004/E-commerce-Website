import axios from '../utils/Axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Loading from './Loading';

const Details = () => {
  let [product,setproduct]=useState(null);
  let {id}=useParams();
  // console.log(id);


  // let getsingleProducts=async ()=>{
  //   try{
  //     let {data}=await axios.get(`/products/${id}`);
  //     setproduct(data);
  //   console.log(data);
  //   }
  //   catch(err){
  //     console.log(err);
  //   }
  // }
  let getsingleProducts=()=>{
    axios.get(`/products/${id}`).then(response=>{
      setproduct(response.data);
    }).catch(err=>{
      console.log(err);
    })
  }

  useEffect(()=>{
    getsingleProducts();
  
  },[]);
  return product ? (
    <div className='w-[70%] h-full flex justify-center items-center gap-10 m-auto py-[10%] px-[5%]'>
        <img className="object-fit w-[35%] shadow-zinc-400 h-[100%] rounded-md h-[70%]" src={`${product.image}`} alt="" />
        <div className='w-[30vw] h-[40vh]'>
            <h1 className='text-4xl mb-3'>{product.title}</h1>
            <h3 className='text-blue-400 mb-3'>{product.category}</h3>
            <h2 className='text-red-300 mb-3'>$ {product.price}</h2>
            <p className='font-semibold mb-5'>
            {product.description}
            </p>
            <Link className='mr-3 px-5 py-2 border rounded-md border-blue-200 text-blue-300'>Edit</Link>
            <Link className='px-5 py-2 border rounded-md border-red-200 text-red-300'>Delete</Link>

        </div>
    </div>
  ) : (
    <Loading />
  )
//   h-782px w-547px
}

export default Details