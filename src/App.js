import React from 'react';
import './App.css';
import Header from './componets/Header'
import Navbar from './componets/Navbar'
import About from './componets/About'
import Work from './componets/Work'
import Contact from './componets/Contact'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='App-header'> 
        <Header />
      </div>
    
      <div className='About'> 
        <About />
      </div>
      <div className='work'>
        <Work />
      </div>
      <div className='contact'>
        <Contact />
      </div>
    
    </div>
    
  );
}

export default App;
