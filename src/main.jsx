import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

// Pages
import ConclusionPage from './ConclusionPage.jsx'
import Example from './ExamplePage.jsx'
import ExampleItems from './ExampleItemsPage.jsx'
import HowToUse from './HowToUsePage.jsx'
import Outro from './OutroPage.jsx'
import Welcome from './WelcomePage.jsx'
import WhatIsRouter from './WhatIsRouterPage.jsx'
import NotFoundPage from './NotFoundPage.jsx'
import HomePage from './App.jsx'

const router = createBrowserRouter([
  {path: '/', element: <HomePage />},
  {path: '/welcome', element: <Welcome />},
  {path: '/what-is-router', element: <WhatIsRouter />},
  {path: '/how-to-use', element: <HowToUse />},
  {path: '/example', element: <Example />},
  {path: '/example/:id', element: <ExampleItems />},
  {path: '/conclusion', element: <ConclusionPage />},
  {path: '/outro', element: <Outro />},
  {path: '*', element: <NotFoundPage />},
], {
  basename: "/react-router-tutorial-sebastian-koster"
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)