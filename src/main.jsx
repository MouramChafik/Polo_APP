import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ElementDesktopPatients } from './components/ElementDesktopPatients'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ElementDesktopPatients />
  </StrictMode>,
)
