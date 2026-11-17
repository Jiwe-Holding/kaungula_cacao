import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from '@/components/Layout'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Product from '@/pages/Product'
import Contact from '@/pages/Contact'
import NotFound from '@/pages/NotFound'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/a-propos', element: <About /> },
      { path: '/notre-produit', element: <Product /> },
      { path: '/contact', element: <Contact /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
