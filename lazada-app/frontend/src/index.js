import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { AuthProvider } from './context/AuthContext'

// CONFIG REACT-BOOTSTRAP
import ReactBootstrap from 'react-bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
const authData = JSON.parse(localStorage.getItem('authData')) || {}
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <AuthProvider initialAuthData={authData}>
    <App />
  </AuthProvider>
)
