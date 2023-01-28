import React from 'react';
const iconSize = "w-12 h-12"

function Contact() {
  return (
    <div id="contact" className='min-h-fit mx-6 max-w-sm sm:max-w-full sm:h-[34em] scroll-mt-20'>
      <h1 className={`text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-orange-500 via-pink-500 to-purple-900`}>Contact Me</h1>
      <div className='h-[50%] flex flex-col justify-center items-center my-20'>
        <div className='mb-4 text-lg'>
          <p>My inbox is always open as I look for new opportunities.</p>
          <p>I'll get back to you as soon as I can!</p>
        </div>
        <div className='flex h-14 items-center justify-center'>
          <a  href='mailto:tharathip.tamwiset@gmail.com' target='_blank' className="max-w-full max-h-full flex items-center justify-center w-full h-full">
            <svg width="35" height="29" viewBox="0 0 35 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M31.1667 0.833252H3.83341C1.95425 0.833252 0.433831 2.37075 0.433831 4.24992L0.416748 24.7499C0.416748 26.6291 1.95425 28.1666 3.83341 28.1666H31.1667C33.0459 28.1666 34.5834 26.6291 34.5834 24.7499V4.24992C34.5834 2.37075 33.0459 0.833252 31.1667 0.833252ZM31.1667 7.66659L17.5001 16.2083L3.83341 7.66659V4.24992L17.5001 12.7916L31.1667 4.24992V7.66659Z" fill="#F3F3F3"/>
            </svg>
          </a>
          
          <a className="flex items-center justify-center w-full h-full mr-4 ml-2"  href='https://codesandbox.io/u/fronce' target='_blank'>
            <svg viewBox="0 0 600 600" fill="#" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd"  clipRule="evenodd" d="M150 150L449.832 150V450H150V150ZM419.168 180.682V419.318H180.665V180.682H419.168Z" fill="#FEFEFE"/>
            </svg>
          </a>

          <a href='https://github.com/fronceee' target='_blank'><img className='flex items-center justify-center w-full h-full' src='../src/assets/github-mark-white.svg' /></a>
        </div>
      </div>
    </div>
  )
}

export default Contact