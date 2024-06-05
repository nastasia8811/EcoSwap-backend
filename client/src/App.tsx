import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import Authorization from "./pages/Authorization/Authorization"
import Footer from "./components/footer/Footer";
import './reset.css';
import Registration from "./pages/Registration/Registration";
//import Blog from './pages/Blog/Blog';
import Events from './pages/Events/Events';
import Account from './pages/Account/Account';
import {useSelector} from "react-redux";
import {selectorLoginToken} from "./selectors";
//import EventCreate from "./pages/EventCreate/EventCreate";
import { useEffect } from 'react';
import {actionToken} from "./reducers";
import {useDispatch} from "react-redux";
import {ThunkDispatch} from "redux-thunk";
import {Action} from "redux";

import {  getUserApi } from "./reducers";

const App = () =>{
    const dispatch = useDispatch<ThunkDispatch<any, any, Action>>();

    useEffect(() => {
        const token =  localStorage.getItem("token");
        if (token){
            dispatch(actionToken(token))
        }
    }, [])

   const authorizationToken = useSelector(selectorLoginToken);
    useEffect(() => {
        if (authorizationToken) {
            dispatch<object>(getUserApi());
        }
    }, [authorizationToken, dispatch]);


    return (
      <div className="app-wrapper">
        <Header  />
        <div className="app-routes-wrapper">
          <Routes>
            <Route path="/" element={ <Main/> }/>
            {/*<Route path="/blog" element={ <Blog/> }/>*/}
            <Route path="/events" element={ <Events/> }/>
            <Route path="/authorization" element={ <Authorization/> }/>
            <Route path="/registration" element={ <Registration/> }/>
            <Route path="/account" element={ <Account/> }/>
            {/*<Route path="/newEvent" element={ <EventCreate/> }/>*/}
          </Routes>
        </div>
        <Footer/>
      </div>
  );
};

export default App;