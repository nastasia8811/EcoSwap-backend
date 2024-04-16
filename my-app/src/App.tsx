import './App.scss';
import {selectorToken} from "./selectors";
import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import Footer from "./components/footer/Footer";

import './reset.css';
import {useSelector} from "react-redux";


const App = () =>{
    const authToken = useSelector(selectorToken);
  return (
      <div className="app-wrapper">
        <Header  authToken={authToken}/>
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