import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


// CONFIG REACT-BOOTSTRAP
import ReactBootstrap from 'react-bootstrap';
import "../node_modules/bootstrap/dist/css/bootstrap.css"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
      <App />

  </React.StrictMode>
);