import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './Pages/homepage/Homepage'
import Shoppage from './Pages/Shoppage/Shoppage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" caseSensitive={false} element={<Homepage />} />
        <Route path="/Shoppage" caseSensitive={false} element={<Shoppage />} />
      </Routes>
    </Router>
  );
}

export default App;
