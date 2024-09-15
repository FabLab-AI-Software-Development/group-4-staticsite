import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route}from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import App from './App';
import Home from './pages/home';
import About from './pages/about';
import Services from './pages/services';
import Events from './pages/events';
import Gallery from './pages/gallery';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/services" element={<Services />} />
        <Route path='/events' element={<Events />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
