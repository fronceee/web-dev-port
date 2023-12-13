import React from 'react';
import { About, Contact, Experience, Footer, Header, Projects } from './containers';
import { Navbar } from './components'

function App() {

  return (
    <div>
      <Navbar/>
        <main className='container mx-auto p-0 subpixel-antialiased'>
          <Header />
          <About />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
        </main>
    </div>
      
  )
}

export default App
