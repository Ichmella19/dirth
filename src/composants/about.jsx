import React from 'react'

const about = () => {
  return (
    <section className='bg-lime-600 cursor-pointer justify-center flex-wrap'>
        <div className='text-white w-[6%] '>
            <img src="../public/assets/learning/gauche.png" alt="" />
        </div>
        <div className=' flex-wrap text-center p-8 '>
            <p className='text-center md:text-3xl text-xl text-white font-semibold '>WASTE MANAGEMENT</p>
            <p  className='text-center md:text-6xl text-3xl font-semibold text-white  tracking-normal cursor-pointer hover:text-lime-200 hover:scale-95 transition-all duration-400'>ABOUT US</p>
            <p className='text-center font-medium md:text-xl text-lg mt-5 text-white'>Excess Waste? Let Us handle all the work , and turnes waste to energy. A</p>
            <p className='text-center font-medium md:text-xl text-lg  text-white'>Sustainable solution that repurpose wastes and creates a long-terme solution </p>
            <p className='text-center font-medium md:text-xl text-lg  text-white'>for you and your business. Moderns solutions designed for you.</p>
            <button className='p-4 bg-white rounded-lg cursor-pointer hover:bg-lime-100 mt-4 hover:scale-95 transition-all duration-300'>
                <p className='text-lime-600 font-medium'>Learn More</p>
            </button>
            <img src="../public/assets/learning/gauche.png" alt="" className='w-[6%] left-[10%]'/>
        </div>
       
    </section>
  )
}

export default about