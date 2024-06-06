import './App.scss';

import Main from "./pages/Main/Main";
import Authorization from "./pages/Authorization/Authorization"

import './reset.css';
import Registration from "./pages/Registration/Registration";
import AboutUs from './pages/AboutUs/AboutUs';
import Events from './pages/Events/Events';
import Account from './pages/Account/Account';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Main />} />
                        <Route path="/about" element={<AboutUs />} />
                        <Route path="/events" element={<Events />} />
                        <Route path="/authorization" element={<Authorization />} />
                        <Route path="/registration" element={<Registration />} />
                        <Route path="/account" element={<Account />} />
                    </Route>
                </Routes>
            </Router>
        </Provider>
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
                    <li>
                        <Link to="/events">Events</Link>
                    </li>
                    <li>
                        <Link to="/authorization">Authorization</Link>
                    </li>
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

// function Main() {
//     return (
//         <Main/>
//     );
// }
//
// function AboutUs() {
//     return (
//         <AboutUs/>
//     );
// }

// function Dashboard() {
//     return (
//         <div>
//             <h2>Dashboard</h2>
//         </div>
//     );
// }

// function NoMatch() {
//     return (
//         <div>
//             <h2>Nothing to see here!</h2>
//             <p>
//                 <Link to="/">Go to the home page</Link>
//             </p>
//         </div>
//     );
// }
export default App;