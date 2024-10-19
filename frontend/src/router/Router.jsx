import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Base from "./Base";
import React from "react";
import ErrorPage from "./pages/error/ErrorPage";

const HomePage = React.lazy(() => import("./pages/home/HomePage"));
const ArticlesPage = React.lazy(() => import("./pages/articles/ArticlesPage"));
const AuthorsPage = React.lazy(() => import("./pages/authors/AuthorsPage"));

const router = createBrowserRouter([{
  element: <Base />,
  errorElement: <ErrorPage />,
  children: [
    {
      element: <HomePage />,
      index: true
    },
    {
      element: <ArticlesPage />,
      path: '/articles'
    },
    {
      element: <AuthorsPage />,
      path: '/authors'
    },
  ]
}]);

export default () => {
  return (
    <RouterProvider router={router} />
  )
}