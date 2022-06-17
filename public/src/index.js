import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import Nostar from './Nostar'
import { BrowserRouter } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Nostar />
    </BrowserRouter>

  </React.StrictMode>
);


