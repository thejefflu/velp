import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import './App.css'
import RestaurantDetails from "./RestaurantDetails.js"
import ReviewScreen from "./ReviewScreen.js"
function App() {
  return (
    
  <Router>
    <Routes>
      <Route path="/" element={<RestaurantDetails />} />
      <Route path="leaveReview" element={<ReviewScreen />} /> 
    </Routes>
  </Router>      
  );
}

export default App;
