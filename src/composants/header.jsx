import React from 'react'
import { navbar } from '../mockData/data'


import { MdMenu } from "react-icons/md";
import ResponsiveMenu from './ResponsiveMenu';
const header = () => {
    const [open, setOpen] = React.useState(false);
  return (
   <nav className=''>
    <div className=" flex  items-center py-8 bg-gray-200 ">
       
     <div className='hidden md:block ml-[55%]'>
         <ul className='flex  gap-6 text-lime-600 text-xl cursor-pointer hover:text-lime-800 justify-end hover:scale-95 transition-all duration-300'>
         
          {
            navbar.map(item => 
              <li key={item.id}>
                <a href={item.link} className='inline-block py-1 px-3 hover:text-primary font-semibold '>{item.title}</a>
              </li>
            )

  
          }
         </ul>
        </div>
        <img src="/assets/recyclage/shape1.png" alt="" className=' absolute w-[10%] -right-[0%] hidden md:flex mt-[15%]'/>
         
        <div className='md:hidden flex ' onClick={() => 
           setOpen(!open)}>
         <MdMenu className='text-5xl '/>
         <img src="/assets/learning/gauche.png" alt="" className='md:hidden w-14 ml-20'/>
        </div>
    </div>
    <ResponsiveMenu open={open}/>
    <section className='bg-gray-200'>
    <div className='w-[34%]  h-1 bg-lime-600 hidden md:flex ml-[56%] '></div>
    </section>
  
    
   </nav>
   

  )
}

export default header