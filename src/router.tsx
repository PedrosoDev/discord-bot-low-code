import HomePage from '@src/pages/home'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        path: '',
        element: <HomePage />,
      },
    ],
  },
])
