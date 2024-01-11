import React from 'react';
import { useEffect, useState } from 'react';
import { baseUrl, fetchApi } from './utils/FetchApi';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Buy from './pages/Buy'
import Navbar from './components/Navbar';
import Rent from './pages/Rent';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/buy' element={<Buy purpose={'for-sale'} />} />
        <Route path='/rent' element={<Rent purpose={'for-rent'} />} />
      </Routes>
    </>
  );
}

export default App;
