import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Fragments/Navbar.jsx'
import Footer from './components/Fragments/Footer.jsx'
import Homepage from './pages/home.jsx'
import ErrorPage from './pages/error.jsx'
import './index.css'
import DetailPage from './pages/detail.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/ecommerce-shop.co/" element={<Homepage />} />
        <Route path="/ecommerce-shop.co/detail" element={<DetailPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
)
