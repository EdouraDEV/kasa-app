import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ReactDOM from 'react-dom';
import './style/variables.scss';
import HelloWorldAPropos from './pages/A-propos/APropos';
import HelloWorldError from './pages/Error/Error';
import HelloWorldFicheLogement from './pages/Fiche-logement/FicheLogement';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/APropos" element={<HelloWorldAPropos />} />
        <Route path="/FicheLogement" element={<HelloWorldFicheLogement />} />
        <Route path="*" element={<HelloWorldError />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

