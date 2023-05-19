import React from 'react';
import './home.css';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import Featured from '../../components/featured/Featured';
import Property from '../../components/property/Property';
import Featprop from '../../components/featprop/Featprop'
import Maillist from '../../components/maillist/Maillist';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="homecontainer">
        <Featured/>
        <div className='hometitle'>
          <h1>Browse property by type</h1>
        </div>
        <Property/>
        <div className='hometitle'>
          <h1>Most Rated House</h1>
        </div>
        <Featprop/>
        <Maillist/>
      </div>
    </div>
  );
}

export default Home;