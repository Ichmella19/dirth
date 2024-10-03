import {motion, AnimatePresence } from 'framer-motion';
import React from 'react'

export const ResponsiveMenu = ({open}) => {
  return  <AnimatePresence mode='wait'>
    {
        open && (
          <motion.div
            initial={{ opacity: 0 , y:-100}}
            animate={{ opacity: 1 ,y:0}}
            exit={{ opacity: 0 ,y:-100}}
            transition={{ duration: 0.3 }}
            className="absolute top-20 left-0 w-full h-screen z-20"
          >
          <div className='text-xl  font-semibold uppercase bg-primary text-white bg-lime-700 justify-center  py-12 m-6 rounded-3xl'>
            <ul className='flex flex-col justify-center items-center gap-10 '>
                <li>HOME</li>
                <li>ABOUT US</li>
                <li>SERVICES </li>
                <li>CONTACT US</li> 
            </ul>
          </div>
          
          </motion.div>
           )
    }
    </AnimatePresence>

};
export default ResponsiveMenu;