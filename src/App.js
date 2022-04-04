import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import StarShipsList from './components/StarshipsList';
import './App.css';



function App() {
  return (
    <div className="App">
      <Header />
      <StarShipsList />
    </div>
  );
}

export default App;
