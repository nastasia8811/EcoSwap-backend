// import * as ReactDOM from 'react-dom/client';
// import App from './App';
// import { BrowserRouter } from 'react-router-dom';
// import { Provider } from "react-redux";
// import store from './store';
import Events from "./pages/Events/Events";
import Account from "./pages/Account/Account";
import Main from "./pages/Main/Main";
import Authorization from "./pages/Authorization/Authorization"
//import Footer from "./components/footer/Footer";
import './reset.css';
import Registration from "./pages/Registration/Registration";
import AboutUs from './pages/AboutUs/AboutUs';
import Layout from './pages/Layout/Layout'
import { createBrowserRouter } from 'react-router-dom';

// const root = ReactDOM.createRoot(document.getElementById('root')as HTMLElement);
// root.render(
//       <Provider store={store}>
//         <BrowserRouter>
//             <App />
//         </BrowserRouter>
//     </Provider>
//
// );

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Main />,
            },
            {
                path: 'dashboard',
                element: <AboutUs />,
            },
            {
                path: 'dashboard',
                element: <Events/>,
            },
            {
                path: 'dashboard',
                element: <Account/>,
            },



            // {
            //     path: 'tests',
            //     element: <TestPage />,
            // },
            // {
            //     path: 'tests/:id',
            //     element: <ItemTestPage />,
            //
            //     children: [
            //         {
            //             index: true,
            //             element: <SelectionTest />,
            //         },
            //         {
            //             path: ':categoryId',
            //             element: <TestListPage />,
            //             loader: loaderTests,
            //         },
            //     ],
            // },
            // {
            //     path: 'dashboard',
            //     element: <Dashboard />,
            //     children: [
            //         {
            //             index: true,
            //             element: <UserInfo />,
            //         },
            //         {
            //             path: 'statistics',
            //             element: <TestResults />,
            //         },
            //     ],
            // },
        ],
    },
    {
        path: 'register',
        element: <Registration />,
    },
    {
        path: 'login',
        element: <Authorization />,
    },
]);

export default router;




