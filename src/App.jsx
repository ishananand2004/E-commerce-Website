import React from 'react'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import Home from './components/Home'
import Details from './components/Details'
import Create from './components/Create'


const App = () => {
  let {search,pathname}=useLocation();
  console.log(search);
  console.log(pathname);
  return (
    <>
    {(pathname!="/" || search.length>0) && (<Link to="/" className="text-white-400 px-3 py-1 bg-[#dadada] rounded-md  absolute top-[3%] left-[17%]">
    Home</Link>)
    }
    
    
    <div className='w-screen h-screen flex'>      
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<Create />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
    </div>
    </>
  )
}

export default App