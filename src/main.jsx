import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from './pages/home.jsx'
import ErrorPage from './pages/error.jsx'
import './index.css'
import DetailPage from './pages/detail.jsx'
import App from './App.jsx'
import CategoryPage from './pages/category.jsx'
import CartPage from './pages/cart.jsx'

const router = createBrowserRouter([
  {
    path: "/ecommerce-shop.co/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/ecommerce-shop.co/",
        element: <Homepage />,
      },
      {
        path: "/ecommerce-shop.co/:id",
        element: <DetailPage />,
      },
      {
        path: "/ecommerce-shop.co/category",
        element: <CategoryPage />,
      },
      {
        path: "/ecommerce-shop.co/cart",
        element: <CartPage />,
      },
    ]
  },
  {path: "*", element: <ErrorPage />},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
