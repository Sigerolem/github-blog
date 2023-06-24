import { RouterProvider, createHashRouter } from 'react-router-dom';
import { Home, homeLoader } from './pages/Home';
import { DefaultLayout } from './layouts/DefaultLayout';
import { Post, postLoader } from './pages/Post';

export function Router() {
  const base = import.meta.env.BASE_URL

  const router = createHashRouter([
    {
      path: base,
      element: <DefaultLayout />,
      children: [
        {
          index: true,
          element: <Home />,
          loader: homeLoader
        },
        {
          path: `${base}/post/:id`,
          element: <Post />,
          loader: postLoader
        },
        {
          path: `${base}/*`,
          element: <h1>Erro, rota errada</h1>
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

