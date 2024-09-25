import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import { Home } from './views/Home.tsx'
import { Login } from './views/Login.tsx'
import { ErrorPage } from './views/Error.tsx'
import { ErrorBoundary } from 'react-error-boundary'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/login",
    element: <Login />,
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <ErrorBoundary fallback={<ErrorPage />} >
        <nav className='navbar'>
            <a href={`/contacts/1`}>Your Name</a>
            <a href={`/login`}>Login</a>
        </nav>
      <main>
          <RouterProvider router={router} fallbackElement={ <ErrorPage />}/>
      </main>
      </ErrorBoundary>
      {/* <App /> */}
  </StrictMode>,
)
