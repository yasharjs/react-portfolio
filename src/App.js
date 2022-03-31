import React, {useState} from 'react'

import Header from './components/Header'
import About from './components/About'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'
import Footer from './components/Footer'


function App() {

  const [categories] = useState(["About","Portfolio","Contact","Resume"])
  const [currentCategory, setCurrentCategory] = useState(categories[0])
 

  return (
    <div className="h-screen flex flex-col">

      <Header
        categories = {categories}
        currentCategory = {currentCategory}
        setCurrentCategory = {setCurrentCategory}
      />
      <main>
        {currentCategory === 'About' && <About></About>}
        {currentCategory === 'Contact' && <Contact></Contact>}
        {currentCategory === 'Portfolio' && <Portfolio></Portfolio>}
        {currentCategory === 'Resume' && <Resume></Resume>}
      </main>

      <Footer></Footer>
   
    
    
    </div>
  );
}

export default App;
