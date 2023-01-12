import React from 'react'

function Navbar() {
    const [isMenuClicked, setIsMenuClicked] = React.useState(false)
    const menuText = 'text-base'
    const textMobile = 'text-5xl'

  return (
    <nav className={`navbar transition-all fixed origin-top-left bg-white ${isMenuClicked ? `scale-y-95`: `h-16`} md:h-20 bg-opacity-10 flex justify-end p-0`}>
        <div className='max-w-screen-lg flex sm:basis-full px-6 sm:px-16'>
            <div className='w-full justify-between hidden sm:flex'>
                <a className={menuText} href="#">Home</a>
                <a className={menuText} href="#about">Who Am I</a>
                <a className={menuText} href="#experience">Work Experience</a>
                <a className={menuText} href="#projects">Projects</a>
                <a className={menuText} href="#contact">Contact Me</a>
            </div>
            <div className='flex flex-col items-end justify-start sm:hidden'>
                <button onClick={() => setIsMenuClicked(prev => !prev)} className={`btn bg-opacity-0 border-0 pr-1 pt-1 hover:bg-inherit focus:bg-inherit active:bg-inherit focus-visible:outline-0`}>
                    {isMenuClicked ? 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#ffffff" className="w-10 h-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        : 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#ffffff" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    }
                </button>
                <div className={`flex flex-col ${isMenuClicked ? `` : `hidden`}`}>
                    <a className={menuText + " " + textMobile} href="#">Home</a>
                    <a className={menuText + " " + textMobile} href="#about">Who Am I</a>
                    <a className={menuText + " " + textMobile} href="#experience">Work Experience</a>
                    <a className={menuText + " " + textMobile} href="#projects">Projects</a>
                    <a className={menuText + " " + textMobile} href="#contact">Contact Me</a>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar