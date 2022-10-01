import React, {useState} from 'react';
import './App.css'
import RestaurantCard from './components/RestaurantCard';
import ReviewCard from './components/ReviewCard';
function App() {
  return (
    <div>
      <RestaurantCard name = "Jeff's Jelly Beans" location = "199 De Naur Drive"/>
      <ReviewCard email = "chandra@ucla.edu" overallRating="4.5" paragraph = "don't ever remove the kimchi jelly bean" dishnamelist = "kimchi jelly bean"/>
    </div>
  );
}

export default App;
