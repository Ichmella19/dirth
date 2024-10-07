import React from 'react'

const footer = () => {
  return (
   <section className='  flex-wrap bg-gray-200 justify-center'>
        <div className='md:flex gap-x-20 justify-center  font-semibold text-lime-600 hover:text-lime-800 cursor-pointer hover:scale-95 transition-all duration-300 md:text-2xl text-lg  '>
            <p className='md:mt-5'>Our company</p>
            <p className='mt-5'>Ressources</p>
            <p className='mt-5'>Get in Touch</p>
            <p className='mt-5'>Legal</p>
        </div>
        <div className='border-b border-2 border-lime-600 hover:text-lime-800 cursor-pointer '></div>
        <section className="bg-gray-200   relative md:flex justify-center gap-x-20 mt-5 font-medium">
         
          <div className="flex flex-col  ml-[3%] mt-5 ">
           
            <p className="mt-3 text-lime-600 ">What we Do</p>
            <p className="mt-2 text-lime-600">How We Can Help</p>
            <p className="mt-2 text-lime-600">Our Team</p>
            <p className="mt-2 text-lime-600">Press Release</p>
            <p className="mt-2 text-lime-600">Our Works</p>
          </div>
          <div className="flex flex-col   mt-5 ">
          
            <p className="mt-3 text-lime-600">Waste to energy</p>
            <p className="mt-2 text-lime-600">Home waste recycling</p>
            <p className="mt-2 text-lime-600">Business Solutions</p>
            <p className="mt-2 text-lime-600">Home Solutions</p>
           
          </div>
          <div className="flex flex-col mt-5 ">
           
            <p className="mt-3 text-lime-600">Careers</p>
            <p className="mt-2 text-lime-600">Plans Pricing</p>
            <p className="mt-2 text-lime-600">Patnerships</p>
            <p className="mt-2 text-lime-600">Social Media</p>
           
          </div>
          <div className="flex flex-col  ml-[1%] mt-5 ">
           
           <p className="mt-3 text-lime-600">Careers</p>
           <p className="mt-2 text-lime-600">Plans Pricing</p>
           <p className="mt-2 text-lime-600">Patnerships</p>
           <p className="mt-2 text-lime-600">Social Media</p>
          
         </div>
        </section>
        <div>
          <p className='text-xl text-lime-600 px-10 mt-10 font-medium'>COPYRIGHT 2021 PH WASTE MANAGEMENT ALL RIGHTS RESERVED.</p>
        </div>
   </section>
    
  )
}

export default footer