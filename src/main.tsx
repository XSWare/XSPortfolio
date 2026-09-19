import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './global.css'
import Home from './Home.tsx'
import About from './About.tsx'
import Contact from './Contact.tsx'
import OrderBook from './OrderBook.tsx'
import { LINK_ORDERBOOK, LINK_FILE_TRANSFER } from './Constants.tsx'
import FileTransferDownload from './FileTransfer.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: LINK_ORDERBOOK,
    element: <OrderBook />,
  },
  {
    path: LINK_FILE_TRANSFER,
    element: <FileTransferDownload />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
