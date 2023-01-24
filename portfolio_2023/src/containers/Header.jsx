import React from 'react';
import { motion } from "framer-motion";
import { variants , item } from "../staggerAntimation"

function Header() {
  return (
    <motion.div 
      variants={variants}
      initial="hidden"
      animate="show"
      className='h-screen flex justify-center md:items-between items-center mx-6 -mt-8'>
        <motion.div variants={item} className='flex flex-col w-full md:items-center justify-center gap-40 sm:flex-row'>
          <div className='mb-10 md:mb-0 sm:order-3 md:w-[42%]'>
            <img className='w-full h-full' src='../src/assets/hero_device.svg' />
          </div>
          <div className='order-1 w-full max-w-fit justify-self-start'>
            <div className='text-4xl md:text-6xl font-bold mb-6'>
              <h1>Hi!</h1>
              <h1>My Name is</h1>
              <h1>Tharathip</h1>
            </div>
            <motion.div variants={item} className='text-2xl md:text-4xl'>
              <h2>I'm a <span className='block font-bold text-transparent bg-clip-text bg-gradient-to-br from-orange-500 via-pink-500 to-purple-900'>Front-End Developer</span></h2>
            </motion.div>
          </div>
        </motion.div>
        
    </motion.div>
  )
}

export default Header