import React from 'react'

const About = () => {
  return (
    <div id='about' className='min-h-screen mx-6 scroll-mt-8 mb-10'>
      <h1 className='text-5xl mb-6 font-bold text-transparent bg-clip-text bg-gradient-to-br from-orange-500 via-pink-500 to-purple-900'>Who Am I?</h1>
      <div className='font-light text-sm flex flex-col items-center'>
        <p className='mb-4'>Hi! My name is Tharathip Tamwiset. 
          When I use a product, I always consider its process, and web development is the most intriguing to me.
          My interest in web development began in 2010, when I was in sixth grade and attempted to create a website using Dreamweaver. 
          I had no idea I was laying the groundwork for web development.
        </p>
        <p className='mb-4'>
          Fast forward to the present. 
          I completed the Scrimba Front-End Career Path, which provided me with a solid foundation for Front-End Development. 
          Now I'm at Skooldio, where I'm sharing my programming skills
          and helping others up-skill and re-skill, 
          and I'm looking for a job as a Front-End Developer.
        </p>
        <p className='mb-4'>
          Here are a few technologies and programming languages with which I've recently worked and learned:
        </p>
        <div className='w-3/5 flex justify-between mb-8'>
          <ul className='list-disc'>
            <li>JavaScript (ES6+)</li>
            <li>Python</li>
          </ul>
          <ul className='list-disc'>
            <li>Node</li>
            <li>React</li>
          </ul>
        </div>
        <div className='w-4/6'>
            <img className='w-full' src='../src/assets/profile_pic_mobile.png' />
          </div>
      </div>
    </div>
  )
}

export default About