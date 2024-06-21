import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './routes/Home';
import reportWebVitals from './reportWebVitals';
import  { createGlobalStyle } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Preparatorios from './routes/Preparatorios'



const GlobolStyle = createGlobalStyle`
  body {
  margin: 0;
  color: white;
  font-family: Georgia, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
   background: rgb(2,84,75);
  background: linear-gradient(90deg, rgba(2,84,75,1) 0%, rgba(1,150,118,1) 95%, rgba(3,162,121,1) 99%); 
}

 li {
      list-style: none;
  }`

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <GlobolStyle />
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/preparatorios' element={<Preparatorios />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
