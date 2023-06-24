import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home';
import { DefaultLayout } from './layouts/DefaultLayout';
import { Post } from './pages/Post';

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
        },
        {
          path: `${base}/post/:id`,
          element: <Post />
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

