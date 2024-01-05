import logo from './logo.svg';
import React from 'react';
import './App.css';
import Banner from './components/Banner';
import { Box, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { baseUrl, fetchApi } from './utils/FetchApi';
import Property from './components/Property';
import data from './utils/Data';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Buy from './pages/BuyProperty'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// {id: 1, title: 1},{id: 2, title: 22},{id: 3, title: 33},{id: 4, title: 4},{id: 5, title: 5},{id: 6, title: 6}


function App() {
  const [propertyForSale, setPropertyForSale] = useState(data.hits);
  const [propertyForRent, setPropertyForRent] = useState([]);
  // console.log(propertyForSale);

  // useEffect(() => {
  //   fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=5`)
  //   .then((data) => setPropertyForSale(data.hits))
  //   .then(console.log(propertyForSale))

  //   // fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=5`)
  //   // .then((data) => setPropertyForRent(data.hits))
  //   // .then(console.log(propertyForRent))
  // }, []);

  if (!propertyForSale) return <h1>Loading...</h1>;

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='buy/*' element={<Buy propertyForSale={propertyForSale}/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
