import React from 'react';
const iconSize = "w-12 h-12"

function Contact() {
  return (
    <div id="contact" className='min-h-fit mx-6 max-w-sm scroll-mt-20'>
      <h1 className={`text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-orange-500 via-pink-500 to-purple-900`}>Contact Me</h1>
      <div className='h-[50%] flex flex-col justify-center items-center my-20'>
        <div className='mb-4 text-lg'>
          <p>My inbox is always open as I look for new opportunities.</p>
          <p>I'll get back to you as soon as I can!</p>
        </div>
        <div className='flex h-14 items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[80%] h-[80%]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>

          <svg viewBox="0 0 600 600" className="w-full h-full mx-3" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"  clip-rule="evenodd" d="M150 150L449.832 150V450H150V150ZM419.168 180.682V419.318H180.665V180.682H419.168Z" fill="#FEFEFE"/>
          </svg>

          <img className='w-[70%] h-[70%]' src='../src/assets/github-mark-white.svg' />
        </div>
      </div>
    </div>
  )
}

export default Contact