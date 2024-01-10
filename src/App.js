import React from 'react';
import { useEffect, useState } from 'react';
import { baseUrl, fetchApi } from './utils/FetchApi';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Buy from './pages/Buy'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Rent from './pages/Rent';
import Loader from './components/Loader';


function App() {
  // useEffect(() => {

  //   fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=30`)
  //   .then((data) => setPropertyForSale(data.hits))

  //   fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=30`)
  //   .then((data) => setPropertyForRent(data.hits))
  // }, []);

  return (
    <>
    <Loader/>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/buy' element={<Buy purpose={'for-sale'}/>}/>
      <Route path='/rent' element={<Rent purpose={'for-rent'}/>}/>
    </Routes>
    </>
  );
}

export default App;
