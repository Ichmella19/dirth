import React from 'react'

const footer = () => {
  return (
   <section className='  flex-wrap bg-gray-200 justify-center'>
        <div className='md:flex gap-20 justify-center text-center  font-semibold text-lime-600 hover:text-lime-800 cursor-pointer hover:scale-95 transition-all duration-300 md:text-3xl text-lg  '>
            <p className='md:mt-5'>Our company</p>
            <p className='mt-5'>Ressources</p>
            <p className='mt-5'>Get in Touch</p>
            <p className='mt-5'>Legal</p>
        </div>
        <div className='border-b border-2 border-lime-600 hover:text-lime-800 cursor-pointer '></div>
        <section className="bg-gray-200 w-full min-h-80 relative flex flex-wrap justify-center mt-5 text-2xl">
         
          <div className="flex flex-col  px-20 mt-5 font-medium md:text-xl">
           
            <p className="mt-3 text-lime-600 ">What we Do</p>
            <p className="mt-2 text-lime-600">How We Can Help</p>
            <p className="mt-2 text-lime-600">Our Team</p>
            <p className="mt-2 text-lime-600">Press Release</p>
            <p className="mt-2 text-lime-600">Our Works</p>
          </div>
          <div className="flex flex-col ml-10 md px-20 mt-5 font-medium md:text-xl">
          
            <p className="mt-3 text-lime-600">Waste to energy</p>
            <p className="mt-2 text-lime-600">Home waste recycling</p>
            <p className="mt-2 text-lime-600">Business Solutions</p>
            <p className="mt-2 text-lime-600">Home Solutions</p>
           
          </div>
          <div className="flex flex-col mr-10 px-20 mt-5 font-medium md:text-xl">
           
            <p className="mt-3 text-lime-600">Careers</p>
            <p className="mt-2 text-lime-600">Plans Pricing</p>
            <p className="mt-2 text-lime-600">Patnerships</p>
            <p className="mt-2 text-lime-600">Social Media</p>
           
          </div>
         
        </section>
   </section>
    
  )
}

export default footer