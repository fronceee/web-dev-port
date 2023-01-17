import React from 'react'

function Navbar() {
  const [isMenuClicked, setIsMenuClicked] = React.useState(false);
  const menuText = 'text-xs transition-colors hover:bg-black active:bg-black px-4 py-2 rounded-md';
  const textMobile = 'text-3xl transition-colors hover:bg-gradient-to-br from-orange-500 via-pink-500 to-purple-900 active:bg-black p-2 rounded-md';
  const [prevScrollPos, setPrevScrollPos] = React.useState(window.pageYOffset);
  const [navbarTop, setNavbarTop] = React.useState("0");

  React.useEffect(() => {
    function handleScroll() {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollPos> currentScrollPos) {
        setNavbarTop("0");
      } else {
        setNavbarTop("-20");
      }
      setPrevScrollPos(currentScrollPos);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);


  function setSidebarMenu() {
    setIsMenuClicked(prev => !prev)
  }
  
  React.useState(() => {

  },[])

  return (
    <nav className={`w-full h-20 sticky z-50 top-${navbarTop} m-0 p-0 bg-black bg-zinc-800 flex sm:justify-center items-center transition-all`}>
        <div className='container hidden sm:block'>
            <ul className='px-20 lg:px-52 w-full flex justify-between'>
                <li><a className={menuText} href="#">Home</a></li>
                <li><a className={menuText} href="#about">Who Am I</a></li>
                <li><a className={menuText} href="#experience">Work Experience</a></li>
                <li><a className={menuText} href="#projects">Projects</a></li>
                <li><a className={menuText} href="#contact">Contact Me</a></li>
            </ul>
        </div>
        <div className='container flex justify-end sm:hidden mr-6'>
          <button className='btn btn-ghost px-2' onClick={setSidebarMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
          {isMenuClicked ? 
          <div className='fixed w-full h-full'>
            <div className='fixed top-0 w-screen h-screen backdrop-blur'></div>
            <div className='fixed h-content top-0 right-0 w-5/6 h-screen bg-black flex flex-col pt-4'>
            <button onClick={setSidebarMenu} className='btn btn-ghost mt-2 mr-8 self-end'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <ul className='pt-10 pl-6'>
              <li className='mb-14'><a className={textMobile} onClick={setSidebarMenu} href="#">Home</a></li>
              <li className='mb-14'><a className={textMobile} onClick={setSidebarMenu} href="#about">Who Am I</a></li>
              <li className='mb-14'><a className={textMobile} onClick={setSidebarMenu} href="#experience">Work Experience</a></li>
              <li className='mb-14'><a className={textMobile} onClick={setSidebarMenu} href="#projects">Projects</a></li>
              <li className='mb-14'><a className={textMobile} onClick={setSidebarMenu} href="#contact">Contact Me</a></li>
            </ul>
          </div>
          </div>
          : ""
          }
        
        
    </nav>
  )
}

export default Navbar