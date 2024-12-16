import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { RegistrationProvider} from './context/RegistrationContext';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RegistrationProvider>
      <App />
    </RegistrationProvider>
  </StrictMode>,
)
