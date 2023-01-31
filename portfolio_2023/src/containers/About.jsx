import React from 'react'

const About = () => {
  return (
    <div id='about' className='flex flex-col mx-6 mb-20 scroll-mt-20'>
      <h1 className='text-5xl mb-3 md:mb-8 font-bold text-transparent bg-clip-text bg-gradient-to-br from-orange-500 via-pink-500 to-purple-900'>Who Am I?</h1>
      <div className='font-light text-sm md:text-base flex flex-col items-center flex justify-center md:flex-row md:gap-14'>
        <div className='md:w-[49%] flex flex-col gap-4 items-center'>
          <p className='mb-4 md:m-0'>Hi! My name is Tharathip Tamwiset. 
            When I use a product, I always consider its process, and web development is the most intriguing to me.
            My interest in web development began in 2010, when I was in sixth grade and attempted to create a website using Dreamweaver. 
            I had no idea I was laying the groundwork for web development.
          </p>
          <p className='mb-4 md:m-0'>
            Fast forward to the present. 
            I completed the Scrimba Front-End Career Path, which provided me with a solid foundation for Front-End Development. 
            Now I'm at Skooldio, where I'm sharing my programming skills
            and helping others up-skill and re-skill, 
            and I'm looking for a job as a Front-End Developer.
          </p>
          <p className='mb-4 md:m-0'>
            Here are a few technologies and programming languages with which I've recently worked and learned:
          </p>
          <div className='flex justify-between mb-8 md:m-0 md:w-1/2 gap-8'>
            <ul className='list-disc'>
              <li>JavaScript (ES6+)</li>
              <li>Python</li>
            </ul>
            <ul className='list-disc'>
              <li>Node</li>
              <li>React</li>
            </ul>
          </div>
        </div>
        <div className='group w-full md:w-[30%] flex justify-center'>
          <div className='relative w-4/6 md:w-auto'>
            <img className='relative z-10' src='../src/assets/propic2.png' />
            <div className="absolute -inset-1 bg-gradient-to-br from-orange-500 via-pink-500 to-purple-90 opacity-50 rounded-[50px] blur group-hover:opacity-100 transition duration-500 group-hover:duration-100"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About