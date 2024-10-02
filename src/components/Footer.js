import React from 'react'

export default function Footer() {
  return (
    <div>
        <div className="lg:flex sm:text-4xl lg:text-[8vh] justify-center font-lora leading-6 mt-4">
        <h1>LETS CONNECT WITH US</h1>
      </div>
      <div className='lg:items-center sm:flex-col lg:flex-row text-xl mb-10 justify-center flex w-[80%] mt-10 mx-auto'>
    <div className='lg:w-[30%] lg:p-10 sm:p-4'>
    <h1 className='text-4xl mb-4 '>ifood</h1>
    <p>A restaurant is a business that prepares and serves food</p>
    </div>
    <div className='lg:w-[20%] lg:p-10 sm:p-4'>
<p className='m-2'>About Us</p>
<p  className='m-2'>Dishes</p>
<p  className='m-2'>Contact</p>
</div>
<div className='lg:w-[25%] lg:p-10 sm:p-4'>
<p  className='m-2'>Compare Prices</p>
<p  className='m-2'>Resources</p>
<p  className='m-2'>Health & Safety</p>
</div>
<div className='lg:w-[25%] lg:p-10 sm:p-4'>
<p className='m-2'>Terms of service</p>
<p className='m-2'>Privacy & Policy</p>
<p className='m-2'>Request Beta</p>
</div>
<div className='lg:w-[20%] lg:p-10 sm:p-4'>
<p className='m-2'>Facebook</p>
<p className='m-2'>Instagram</p>
<p className='m-2'>Youtube</p>
</div>
      </div>
    </div>
  )
}
