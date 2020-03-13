import React from 'react';
import './App.css';
import Header from './componets/Header'
import Navbar from './componets/Navbar'
import About from './componets/About'
import Work from './componets/Work'
import Contact from './componets/Contact'
import SkillSet from './componets/SkillSet'
import Container from 'react-bootstrap/Container';
function App() {
  return (
<Container>
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
      <div className='skillset'>
        <SkillSet />
      </div>
      <div className='contact'>
        <Contact />
      </div>
    
    </div>
    </Container>
    
  );
}

export default App;
