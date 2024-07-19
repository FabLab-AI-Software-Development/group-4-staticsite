import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route}from "react-router-dom";
import './index.css';
import App from './App';
import Gallery from './pages/gallery';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        {/* <Route index element={<Home />} /> */}
      {/*   <Route path="/About" element={<About />} /> */}
        <Route path="/Gallery" element={<Gallery />} />
        {/* <Route path="/Services" element={<Services />} />
        <Route path="/travel" element={<travel />} />
        */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
