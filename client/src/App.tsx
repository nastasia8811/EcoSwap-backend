import './App.scss';
import { Routes, Route,Link, Outlet } from 'react-router-dom';
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import Authorization from "./pages/Authorization/Authorization"
import Footer from "./components/footer/Footer";
import './reset.css';
import Registration from "./pages/Registration/Registration";
import AboutUs from './pages/AboutUs/AboutUs';
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

const App = () => {
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
              <Route path="/" element={<Layout />}/>
                  <Route index element={ <Main/> }/>
                  <Route path="/about" element={ <AboutUs/> }/>
                  <Route path="/events" element={ <Events/> }/>
                  <Route path="/authorization" element={ <Authorization/> }/>
                  <Route path="/registration" element={ <Registration/> }/>
                  <Route path="/account" element={ <Account/> }/>

          </Routes>
        </div>
        <Footer/>
      </div>
  );
};



function Layout() {
    return (
        <div>
            {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>

                    </li>
                    <li>
                        <Link to="/about">About us</Link>
                    </li>
                    {/*<li>*/}
                    {/*    <Link to="/dashboard">Dashboard</Link>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*    <Link to="/nothing-here">Nothing Here</Link>*/}
                    {/*</li>*/}
                </ul>
            </nav>

            <hr />

            {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
            <Outlet />
        </div>
);
}
export default App;