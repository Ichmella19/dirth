import React from 'react'

const head = () => {
  return (
   <section className='bg-gray-200  justify-center md:flex flex-wrap '>
    <div className='md:mt-10'>
    <div className='flex-wrap md:text-7xl text-3xl  font-bold  ml-7 text-lime-600 tracking-normal cursor-pointer hover:text-lime-500 hover:scale-95 transition-all duration-300'>
    <p>LET'S GET</p>
    <p className='flex '>TO THE <p className='md:ml-3 ml-1 text-white  hover:text-lime-500 cursor-pointer '>DIRTY</p></p>
    <p className=''>BUSINESS.</p>
    </div>
    <div className='  p-7 font-medium md:text-xl text-lg'>
        <p>PH waste management got everything you need when</p>
        <p>it comes to disposing of your waste easily.We ofter</p>
        <p>releable recycling and waste peak-up of your doorsteap.</p>
        <p>Simply schedule on our website today!!</p>
        <button className='md:p-5 p-3 bg-lime-600   rounded-xl cursor-pointer shadow-2xl hover:bg-lime-800 mt-4 hover:scale-95 transition-all duration-300'>
                <p className='text-white font-medium md:text-2xl text-lg'>LEARN MORE </p>
            </button>
    </div>
    
    </div>
   <div className='p-5 '>
   <img src="/assets/accueil/image/photo.png" alt="" className='md:w-[70%] md:ml-[10%] cursor-pointer hover:scale-95 transition-all duration-300'/>
   </div>
   </section>
  )
}

export default head