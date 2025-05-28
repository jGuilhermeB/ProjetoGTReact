import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'antd/dist/reset.css'
import App from './App.jsx'
import { Outlet } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <main className="bg-[#F9F8FE] flex-grow">
      <Outlet />
    </main>
  </StrictMode>,
)
