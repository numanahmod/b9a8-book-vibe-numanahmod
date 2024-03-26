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
        element: <ListedBooks></ListedBooks>
      },
      {
        path: "/PagesToRead",
        element: <PagesToRead></PagesToRead>
        
      },
     

    ]
  },
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
