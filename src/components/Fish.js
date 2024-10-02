import React from 'react'
import egg4 from "../images/fish.png"
import SliderComponent from './Slider'

const Arrow = () => {

    return(
<svg fill="#000000" className='w-10' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g data-name="Layer 2"> <g data-name="diagonal-arrow-right-up"> <rect width="4" height="4" transform="rotate(180 12 12)" opacity="0"></rect> <path d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1 1 1 0 0 0 1-1z"></path> </g> </g> </g></svg>
    )
}

export default function Fish() {
  return (
    <div className='mt-20 w-[100%] m-auto'>
          <div className='lg:text-[12vh] sm:text-4xl  flex justify-center font-lora pt-4'>
   VIEW ALL LATEST
    </div>
    <div className='w-[90%] m-auto flex sm:flex-col lg:flex-row mt-10'>
        <div className='lg:w-[35%]  m-auto text-xl'>
            <div>
                <p className='w-[75%] '>At ifood cafe,we strive to create a worm and welcoming</p>

                <p className='w-[90%] flex justify-between mt-10 pb-2 border-b border-black'> Indian <span className=' '><Arrow /></span> </p>
            </div>
            <div className='mt-10'>
                <p className='w-[75%] '>We also offer a wide range of kebab plates, including chicken</p>

                <p className='w-[90%] flex justify-between mt-10 pb-2 border-b border-black'> Asian <span className=' '><Arrow /></span> </p>
            </div>
              </div>
        <div className='w-[50%] ml-20 '>
    <img src={egg4} alt="" className="h-[50vh]  " />
    </div>
    <div className='lg:w-[35%]  m-auto text-xl'>
            <div>
                <p className='w-[75%] '>At ifood cafe,we strive to create a worm and welcoming</p>

                <p className='w-[90%] flex justify-between mt-10 pb-2 border-b border-black'> Japans <span className=' '><Arrow /></span> </p>
            </div>
            <div className='mt-10'>
                <p className='w-[75%] '>We also offer a wide range of kebab plates, including chicken</p>

                <p className='w-[90%] flex justify-between mt-10 pb-2 border-b border-black'> Chinese <span className=' '><Arrow /></span> </p>
            </div>
              </div>
        </div>
        <div className='w-[90%] mx-auto  pt-4 mt-20'>
  <h1 className='lg:text-[12vh] sm:text-4xl font-lora lg:text-center'> EXPLORE REAL TASTE</h1> 
   <p className='w-[60%] mx-auto lg:text-center text-xl mt-8'> We offer a variety of homemade pastries and sweets, including the almond-tapped semolina cakes called harissa and the indulgent kunafe with pistachios.</p>
    </div>
    <SliderComponent />
    </div>
  )
}
