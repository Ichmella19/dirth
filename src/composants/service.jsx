import React from 'react'

const Service = () => {
  const blogs = [
    {
        id:1,
        description:"Environnemental Service that can help you with organizing and properly disposing your waste ",
       
        image:'/assets/service/plastic.png '

    },
    {
      id:2,
      description:"Environnemental Service that can help you with organizing and properly disposing your waste",
      
      image:'/assets/service/volunteers1.png '

  },
  {
    id:3,
    description:"Environnemental Service that can help you with organizing and properly disposing your waste",
    
    image:'/assets/service/volunteers2.png '

},
{
  id:4,
  description:"Environnemental Service that can help you with organizing and properly disposing your waste",

  image:'/assets/service/dechet.png '

},
{
  id:5,
  description:"Environnemental Service that can help you with organizing and properly disposing your waste",
 
  image:'/assets/service/image5.png '

},
{
  id:6,
  description:"Environnemental Service that can help you with organizing and properly disposing your waste",
  
  image:'/assets/service/image6.png '

},
 ]


  return (
 <section className='flex-wrap  bg-gray-200 p-16 md:p-0' >
 <div className='text-center md:text-6xl text-2xl font-semibold text-lime-500 italic tracking-normal cursor-pointer hover:text-lime-900 hover:scale-95 transition-all duration-300'>
    <h1 >OUR SERVICES </h1>
 </div>



              <div className='grid grid-cols-1  md:grid-cols-2 gap-2  md:ml-[16%] mt-10 '>
               {
                blogs.map(blog =>(
                  <div >
                    <div key={blog.id} className=" flex   ">
                  <div >
                  <img src={blog.image} alt="" className=" cursor-pointer hover:scale-95 transition-all duration-300"/>
                     <div >
                        <p className=" font-medium md:text-xl text-lg mt-5 justify-center">{blog.description}</p>
                    
                     
                     </div>
                  </div>
                    
                </div>
                 
                </div> 
                )

                )
               }
              
             
                
               
           </div>
          
 </section>
  )
}

export default Service