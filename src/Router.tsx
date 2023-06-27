import { RouterProvider, createHashRouter } from 'react-router-dom';
import { DefaultLayout } from './layouts/DefaultLayout';
import { Home, homeLoader } from './pages/Home';
import { Post, postLoader } from './pages/Post';

export function Router() {
  const router = createHashRouter([
    {
      path: `/`,
      element: <DefaultLayout />,
      children: [
        {
          index: true,
          element: <Home />,
          loader: homeLoader
        },
        {
          path: `post/:id`,
          element: <Post />,
          loader: postLoader
        },
        {
          path: '*',
          element: <h1>Rota inválida</h1>
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

