import React from 'react';
import About from './About';
import './App.css';
import Nav from './Nav';
import Shop from './Shop';
import {BrowserRouter as Router, Routes,  Route} from 'react-router-dom';

function App() {
  return (
    <Router>
       <div className="App">
          <Nav/>
          <Routes>
            <Route path='/' exact element={<About/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/shop' element={<Shop/>}/>
          </Routes>    
       </div>
    </Router>
    
  );
}

export default App;
