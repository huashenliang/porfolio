import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './componets/Header'
import Navbar from './componets/Navbar'
import About from './componets/About'
import Work from './componets/Work'

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
   
    
    </div>
    
  );
}

export default App;
