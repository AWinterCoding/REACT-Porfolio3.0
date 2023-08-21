import React from 'react';
import AboutMe from './components/pages/AboutMe';
import Portfolio from './components/pages/Portfolio';
import Resume from './components/pages/Resume';
import Contact from './components/pages/Contact';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import projects from './components/fragments/Projects';


function App() {
  return (
    <div>
      {/* Okay so this is the routing that tells the page what element to render */}
    <BrowserRouter basename={window.location.pathname || ""}>
  <Routes>
    <Route path= "/" index element={<AboutMe></AboutMe>}></Route>
    <Route path='/aboutme' element={<AboutMe></AboutMe>}></Route>
    <Route path='/portfolio'element={<Portfolio></Portfolio>}></Route>
    <Route path='/resume' element={<Resume></Resume>}></Route>
    <Route path='/contact'element={<Contact></Contact>}></Route>
  </Routes>
  </BrowserRouter>
  </div>
  );
}

export default App;
