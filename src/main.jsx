import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Pages
import ConclusionPage from './ConclusionPage.jsx'
import Example from './ExamplePage.jsx'
import HowToUse from './HowToUsePage.jsx'
import Outro from './OutroPage.jsx'
import Welcome from './WelcomePage.jsx'
import WhatIsRouter from './WhatIsRouterPage.jsx'
import NotFoundPage from './NotFoundPage.jsx'

const router = createBrowserRouter([
  {path: '/', element: <App />},
  {path: '/welcome', element: <Welcome />},
  {path: '/what-is-router', element: <WhatIsRouter />},
  {path: '/how-to-use', element: <HowToUse />},
  {path: '/example', element: <Example />},
  {path: '/conclusion', element: <ConclusionPage />},
  {path: '/outro', element: <Outro />},
  {path: '*', element: <NotFoundPage />},
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)