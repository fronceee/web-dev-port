import React from 'react';
import { About, Contact, Experience, Footer, Header, Projects } from './containers';
import { Navbar } from './components'

function App() {

  return (
    <React.Fragment>
      <Navbar/>
        <main className='container mx-auto -mt-16 p-0 subpixel-antialiased'>
          <Header />
          <About />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
        </main>
    </React.Fragment>
      
  )
}

export default App
