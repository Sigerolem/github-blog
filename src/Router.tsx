import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home';
import { DefaultLayout } from './layouts/DefaultLayout';

export function Router() {
  const base = import.meta.env.BASE_URL

  const router = createBrowserRouter([
    {
      path: base,
      element: <DefaultLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

