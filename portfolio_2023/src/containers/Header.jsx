import React from 'react';
import { motion } from "framer-motion";
import { variants , item } from "../staggerAntimation"

function Header() {
  return (
    <motion.div 
      variants={variants}
      initial="hidden"
      animate="show"
      className='h-screen box-border flex justify-center items-center mx-6 flex-col'>
        <motion.div variants={item} className='w-5/6'>
          <div  className='w-full mb-10'>
            <img className='w-full' src='../src/assets/hero_device.svg' />
          </div>
          <div className='self-start text-4xl font-bold mb-6'>
            <h1>Hi!</h1>
            <h1>My Name is Tharathip</h1>
          </div>
        </motion.div>
        <motion.div variants={item} className='self-start ml-8 text-2xl'>
          <h2>I'm a <span className='block font-bold text-transparent bg-clip-text bg-gradient-to-br from-orange-500 via-pink-500 to-purple-900'>Front-End Developer</span></h2>
        </motion.div>
        
    </motion.div>
  )
}

export default Header