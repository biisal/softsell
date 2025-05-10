import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Providers } from './components/providers.tsx'
import ChatBot from './components/chatbot.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers defaultTheme='dark' storageKey='vite-ui-theme'>

      <App />
      <ChatBot />
    </Providers>
  </StrictMode>,
)
