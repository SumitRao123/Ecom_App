import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useNavigate } from 'react-router'
import { Button } from "flowbite-react";
function App() {
  const navigate = useNavigate();
  const moveTopage = () => {
   
    navigate('/register')
  }
  return (
   
        <div className=' fixed flex flex-col items-center justify-center h-screen space-y-8  space-x-7'>
              <div className='text-5xl font-bold underline'>
                Welcome to JayVeer HardWare
              </div>
              <div className='flex space-x-5 justify-between '>
              <Button color="dark" onClick={()=> navigate("/register")}>Add Customer</Button>
              <Button color="dark" onClick={()=>navigate("/view")}>View Customer</Button>
              </div>
              
        </div>
    
  )
}

export default App
