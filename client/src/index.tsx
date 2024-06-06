import * as ReactDOM from 'react-dom/client';
// import App from './App';
// import { BrowserRouter } from 'react-router-dom';
// import { Provider } from "react-redux";
//  import store from './store';
import './reset.css';
import {
    createBrowserRouter,
    RouterProvider,
    // Route,
    // Link,
} from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import Main from "./pages/Main/Main";
import AboutUs from "./pages/AboutUs/AboutUs";
import Events from "./pages/Events/Events";
import Account from "./pages/Account/Account";
import Registration from "./pages/Registration/Registration";
import Authorization from "./pages/Authorization/Authorization";


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
                path: 'about',
                element: <AboutUs />,
            },
            {
                path: 'events',
                element: <Events/>,
            },
            {
                path: 'account',
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


const root = ReactDOM.createRoot(document.getElementById('root')as HTMLElement);
root.render(
    // <Provider store={store}>
<RouterProvider router={router} />
     // </Provider>

);

