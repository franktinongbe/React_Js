import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import Defi1 from './components/Defi1.jsx'
// import Defi2 from './components/Defi2.jsx'
import Defi3 from './components/Def3/Defi3.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Defi3 /> 
  </StrictMode>,
)
