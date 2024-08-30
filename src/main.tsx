import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Task } from './types.ts'
import { initialTodos } from './mocks.ts'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App tasks={initialTodos} />
  </StrictMode>,
)
