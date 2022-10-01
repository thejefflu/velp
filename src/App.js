import React, {useState} from 'react';
import './App.css'
import RestaurantCard from './components/RestaurantCard';
function App() {
  return (
    <div>
      <RestaurantCard name = "Jeff's Jelly Beans" location = "199 De Naur Drive"/>
    </div>
  );
}

export default App;
