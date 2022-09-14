import React from "react";
import {Routes, Route} from 'react-router-dom'
import Candies from './components/Candies'
import Nav from './components/Nav'
import Candy from './components/Candy'
import CandyPage from './components/CandyPage'

const Root = () => {
  return (
    <div>
      <nav >Goodie Bag</nav>
      <Nav/>
      <main>
        <h1 style={{color:'red'}}>Welcome to the Goodie Bag!!!</h1>
        <p>What a nice home page for your goodies!</p>
      </main>
      <Routes>
        <Route path={'/candies'} element={<Candies/>}/>
        <Route path={'/candies/:id'} element={<CandyPage/>}/>
      </Routes>   
    </div>

  );
};

export default Root;
