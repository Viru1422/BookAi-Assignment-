import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Feature from './components/Feature';
import Howit from './components/Howit';
import Roadmap from './components/Roadmap';
import Books from './components/Books';
import User from './components/User';
import Price from './components/Price';
import Image from './components/Image';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <section id="home">
              
              <section id='features'>
              <Feature />
              </section>
              
            </section>
            <section id="howitworks">
              <Howit />
            </section>
            <Books />
            
            <section id="roadmap">
              <Roadmap />
            </section>
            <User />
          </>
        } />
        <Route path="/price" element={<Price />} />
      </Routes>
    </Router>
  );
}

export default App;
