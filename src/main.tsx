import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { ReactFlowProvider } from 'reactflow'
import './index.css'
import { router } from './router.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReactFlowProvider>
      <RouterProvider router={router} />
    </ReactFlowProvider>
  </React.StrictMode>,
)
