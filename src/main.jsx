import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import ListedBooks from './Pages/ListedBooks';
import PagesToRead from './Pages/PagesToRead';
import MainLayout from './layouts/MainLayout';
import Home from './Pages/Home';
import Book from './Pages/Book';
import Read from './Components/Read';
import Wishlist from './Components/Wishlist';
import OnlineClasses from './Pages/OnlineClasses';
import About from './Pages/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children:[
      {
        index: true,
        element: <Home/>,
        loader: () => fetch('/books.json')
      },
      {
        path: '/book/:Id',
        loader: () => fetch('/books.json'),
        element: <Book/>,
        
      },
      {
        path: "/ListedBooks",
        element: <ListedBooks></ListedBooks>,
        children: [
          {
            index:true,
            loader: () => fetch('/books.json'),
            element: <Read/>
          },
          {
            path: 'wishList',
            element: <Wishlist/>
          }
        ]
      },
      {
        path: "/PagesToRead",
        element: <PagesToRead></PagesToRead>
        
      },
      {
        path:"/OnlineClasses",
        element: <OnlineClasses/>
      },
      {
        path: "/About",
        element: <About/>
      }
     

    ]
  },
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
