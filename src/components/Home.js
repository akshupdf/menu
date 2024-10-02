
import dish from "../images/dish1.png"
import egg from "../images/dish6.png"
import egg1 from "../images/egg1.png"


const Home = () => {
    return (
      <div className=" bg-gray-100">
 <div className="flex lg:text-[22vh] sm:text-4xl justify-center font-lora lg:leading-6 ">
        <h1 className="lg:mt-[15vh] sm:mt-[10vh]">SIMPLE </h1><img src={dish} alt="dish" className="lg:w-[30vh] sm:w-[20vh] lg:h-[35vh] " /> <h1 className="lg:mt-[15vh] sm:mt-[10vh]">  AND</h1>
      </div>
<div className="flex sm:text-4xl  lg:text-[22vh] justify-center font-lora lg:leading-6 mt-4">
        <h1>TASTY RECIPES</h1>
      </div>
      <div className="w-[90%] mx-auto mt-20 sm:flex-col lg:flex-row flex">
      <div className="lg:w-[35%] ">
      <img src={egg} alt="" className="h-[50vh]" />
      </div>
      <div className="lg:w-[50%] ">
      <div className="flex mb-4">
      <h1 className="mt-10 text-3xl">01 </h1>
      <div className="w-[18vh] mx-auto p-8 text-center rounded-full h-[18vh] bg-black text-white">
      <p>Explore Dishes</p>
      </div>
      
      </div>
      <div className="w-[100.2%] lg:pr-[22vh] border-t border-r border-black pt-6">
        <p>A restaurant is a business that prepares and serves food and drinks to customers. Meals are generally served and eaten on the premises</p>
      </div>
</div>
<div className="lg:w-[25%] ">

<div className="border-b border-l border-black pb-4 mt-[7.5vh]">
<div class="flex  items-center justify-center ">
  <div class="inline-flex -space-x-4 overflow-hidden rounded-lg">
    <img class="h-10 w-10 rounded-full border-2 border-white" src="https://tailkits.com/_ipx/s_100x100/yucel-faruk-sahan.jpg" alt="Avatar 1" />
    <img class="h-10 w-10 rounded-full border-2 border-white" src="https://tailkits.com/_ipx/s_100x100/yucel-faruk-sahan.jpg" alt="Avatar 2" />
    <img class="h-10 w-10 rounded-full border-2 border-white" src="https://tailkits.com/_ipx/s_100x100/yucel-faruk-sahan.jpg" alt="Avatar 3" />
    <span class="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-blue-100 text-sm font-medium">+3</span>
  </div>
</div>
<p className="ml-16">25k Well Reviews </p>
</div>
<div>
<img src={egg1} alt="" className="h-[25vh] mx-auto" />
</div>
</div>
      </div>
      </div>
     
    );
  }
  
  export default Home;
  