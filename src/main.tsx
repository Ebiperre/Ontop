import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import AppContextProvider from './context/AppContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AppContextProvider>
  <React.StrictMode>
      <App />
  </React.StrictMode>
  </AppContextProvider>
)
