import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import khamsaLogo from './images/KhamsaLogo.png'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)

// Ensure favicon uses the bundled Khamsacraft logo in both dev and production
const ensureFavicon = () => {
  const existing = document.querySelector('link[rel="icon"]')
  const link = existing || document.createElement('link')
  link.setAttribute('rel', 'icon')
  link.setAttribute('href', khamsaLogo)
  if (!existing) document.head.appendChild(link)
}

ensureFavicon()
