import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import './App.css'
import Dashboard from './pages/Dashboard'
import StatusChecker from './pages/StatusChecker'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route index element={<Dashboard/>} />
          <Route path='status' element={<StatusChecker/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
