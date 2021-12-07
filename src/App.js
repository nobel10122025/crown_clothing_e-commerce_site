import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './Pages/homepage/Homepage'
import Shoppage from './Pages/Shoppage/Shoppage'
import Header from './Components/header/Header'
import SignInSignUpPage from './Pages/SignIn-SignUp-page/SignInSignUpPage';

function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" caseSensitive={false} element={<Homepage />} />
        <Route path="/Shop" caseSensitive={false} element={<Shoppage />} />
        <Route path="/Contact" caseSensitive={false} element={<SignInSignUpPage />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
