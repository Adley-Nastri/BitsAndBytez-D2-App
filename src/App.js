import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes, Navigate, } from 'react-router-dom';



import Home from './pages';
import About from './pages/about';
import Services from './pages/services';
import Support from './pages/support';
import UserGuide from './pages/user-guide';
import Signin from './pages/signin';
import BungieCB from './pages/bungie-api-callback';
import CurrentBungieNetUser from './pages/currentBungieNetUser';
import NotFound from './pages/not-found';
function App() {




  return (


    <Router basename={process.env.PUBLIC_URL}>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/support' element={<Support />} />
        <Route path='/user-guide' element={<UserGuide />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/bungie-user' element={<CurrentBungieNetUser />} />
        <Route path='/bungie-api-callback' element={<BungieCB />} />
        <Route path='*' element={<NotFound />} />
      </Routes>



    </Router>
  );
}

export default App;
