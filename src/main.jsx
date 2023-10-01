import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import Navbar from './components/navbar.jsx'
import Footer from './components/footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
    <Navbar/>
    <App />
    <Footer />
  </BrowserRouter>
</React.StrictMode>,
)
