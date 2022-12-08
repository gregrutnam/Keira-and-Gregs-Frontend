import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App/App';
import ErrorPage from './Components/ErrorPage/Error';
import PageNotFound from './Components/ErrorPage/PageNotFound';
import Login from './Components/Login';
import MakePlaylist from './Components/MakePlaylist';
import AddSongs from './Components/AddSongs';
import Playlist from './Components/Playlist';
import About from './Components/About';
import LoggedIn from './Components/LoggedIn';
import Homepage from './Components/Homepage';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        element: <Homepage/>
      },
      {
        path: "login",
        element: <Login/>,
      },
      {
        path: "callback",
        element: <LoggedIn/>
      },
      {
        path: "make-playlist",
        element: <MakePlaylist/>,
      },
      {
        path: "add-songs",
        element: <AddSongs/>
      },
      {
        path: "playlist",
        element: <Playlist/>
      },
      {
        path: "about",
        element: <About/>
      },
      {
        path: "*",
        element: <PageNotFound/>
      }
    ]
  }
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
