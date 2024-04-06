import React from 'react';
import { Routes, Route } from 'react-router-dom';
//import './App.css';
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import Footer from "./components/footer/Footer";


const App = () =>{
  return (
      <div className="app-wrapper">
        <Header/>
        <div className="app-routes-wrapper">
          <Routes>
            <Route path="/" element={ <Main/> }/>

          </Routes>
        </div>
        <Footer/>
      </div>
  );
};

export default App;