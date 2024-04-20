import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import Authorization from "./pages/Authorization/Authorization"
import Footer from "./components/footer/Footer";
import './reset.css';


const App = () =>{

  return (
      <div className="app-wrapper">
        <Header  />
        <div className="app-routes-wrapper">
          <Routes>
            <Route path="/" element={ <Main/> }/>
            <Route path="/authorization" element={ <Authorization/> }/>
          </Routes>
        </div>
        <Footer/>
      </div>
  );
};

export default App;