import React, { useContext, useEffect, useState } from 'react'
import Nav from './Nav';
import { Link, useLocation } from 'react-router-dom';
import { userContext } from '../utils/Context';
import Loading from './Loading';
// import axios from 'axios';
import axios from '../utils/Axios';
const Home = () => {
  let [products,setProducts]=useContext(userContext);
  // console.log(products);
  // url se data nikalta hai useLocation() function se
  let {search}=useLocation();

  // uss data ko string me convert karta hai decodeURIComponent;
  let category=decodeURIComponent(search.split("=")[1])
  // console.log(category);


  const [filterproduct, setfilterproduct] = useState(null);
  // console.log(filterproduct);


  let  getsingleProductsCategory= async()=>{
    try{
    let {data}=await axios.get(`/products/category/${category}`);
    setfilterproduct(data);
    console.log(data);
   
    }
    catch(err){
      console.log(err);
    }
  }
  useEffect(()=>{
    if(filterproduct===null || category==="undefined") setfilterproduct(products);
    if(category !="undefined")  getsingleProductsCategory();
  },[category,products])

  return products ? (
    <>
    <Nav/>
    <div className='w-[85%] h-full p-10 pt-[5%] flex flex-wrap overflow-x-hidden oveflow-y-auto'>
        {filterproduct && filterproduct.map((item,index)=>(
          <Link to={`/details/${item.id}`} key={index} className='cursor-pointer  rounded-md mr-3 mb-2 border p-5 shadow w-[18%] h-[30vh] flex flex-col justify-center items-center'>
          <div className="hover:scale-110 hover:translate-x-[5%] hover:translate-y-[5%] w-full h-[80%] bg-contain bg-no-repeat bg-center mb-2" style={{
              backgroundImage:`url(${item.image})`,
              // "url()",
            }}  
          ></div>
          <h1 className='hover:text-blue-300'>{products.title}</h1>
        </Link>
        ))}
        
      </div>
      </>
  ) :(
    <Loading />
  )
}

export default Home