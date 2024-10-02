import React, { useState } from 'react'

export default function Navbar() {

  const [show, setShow] = useState(false)

  const handleShow = () => {
    setShow((prev) => !prev)
  }


  return (
<div>

<li className='w-[10%] sm:flex lg:hidden' onClick={handleShow}>Menu</li>

{
  show  && <div className='absolute bg-white p-8 z-2'>
    <ul>
    <li className='text-4xl '>ifood</li>
    <li>Health & Safety</li>
    <li className='w-[20%]'>Offers</li>
            <li className='w-[20%]'>Services</li>
            <li className='w-[10%]'>Menu</li>
    </ul>
    </div>
}

<div className='w-[100%] lg:flex sm:hidden  pt-8 bg-gray-100'>
        <ul className='w-[50%] ml-[10vh] justify-between flex'>
            <li className='w-[30%]'>One of our specialities is our hearty breakfast</li>
            <li>Health & Safety</li>
            <li className='text-4xl mt-[-10px]'>ifood</li>
            
        </ul>

        <ul className='w-[40%] justify-end  flex'>
        <li className='w-[20%]'>Offers</li>
            <li className='w-[20%]'>Services</li>
            <li className='w-[10%]'>Menu</li>
        </ul>
    </div>
</div>

  
  )
}
