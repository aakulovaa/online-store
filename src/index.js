import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ShowLogIn from './components/auth/ShowLogIn';
import ShowRegister from './components/auth/ShowRegister';
import AuthDetails from './components/auth/AuthDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <ShowLogIn/>,
  },
  {
    path: "/register",
    element: <ShowRegister/>,
  },
  {
    path: "/user",
    element: <AuthDetails/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

