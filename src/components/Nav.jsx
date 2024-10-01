import React, { useContext } from 'react'
import { userContext } from '../utils/Context';
import { Link } from 'react-router-dom';

const Nav = () => {
  let [products]=useContext(userContext);

  // ye nav bar pe alag alag element aaye issliye bnaye gya hai

  // start from here :
  let distinct_product= products &&products.reduce((acc,cv)=>[...acc,cv.category],[]);
    distinct_product=[...new Set(distinct_product)];

    // set giev a uniquen product and ... operator convert set into array;
  // console.log(distinct_product);

  // ye pe katam hota hai



  // now alag alag color mile navbar pe issliye ye code hai
  let color = ()=>{
    return `rgba(${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},0.4)`;
  }
  // console.log(color());
  
   return (
    <>
    <nav className='w-[15%] h-full bg-zinc-100 flex flex-col items-center pt-5'>
    <Link to="/create" className="px-5 py-2 border rounded-md border-blue-200 text-blue-300">Add product</Link>
    <hr className='w-[80%] my-3'/>
    <h1 className='text-2xl w-[80%] mb-3 font-base'>Category Filter</h1>
    <div className='w-[80%]'>

      {distinct_product.map((items,index)=>(

        <Link key={index} to={`/?catogery=${items}`} className='mb-3 flex items-center justifu-center'>
        <span  className='w-[15px] mr-2 h-[15px] bg-blue-100 rounded-full'></span>
        {/* <span className='w-[15px] h-[15px] bg-red-200 rounded-full mr-2'></span> */}
        {items}
        </Link>
      ))}


      

    </div>


  </nav>
  </>
  )
}

export default Nav