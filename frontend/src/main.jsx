import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter , RouterProvider} from 'react-router-dom'
import Login from './pages/Login.tsx'

const router = createBrowserRouter([
  {
    path : '/login/',
    element : <Login/>,
  },
  {
    path : '/',
    element : <App/>,
  }

])

createRoot(document.getElementById('root')).render(
    <RouterProvider router ={router} />
)
