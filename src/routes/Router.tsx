import { lazy } from "react"
import { createBrowserRouter } from "react-router-dom"
import GlobalRouteConfig from "./GlobalRouteConfig"

const NotFound = lazy(() => import("../pages/error/404"))
const Home = lazy(() => import("../pages/Home"))
const Write = lazy(() => import("../pages/Write"))
const Detail = lazy(() => import("../pages/Detail"))

function Router() {
  return createBrowserRouter([
    {
      path: "/",
      element: <GlobalRouteConfig />,
      children: [
        { path: "*", element: <NotFound /> },

        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/write",
          element: <Write />,
        },
        {
          path: "/todo/:todoId",
          element: <Detail />,
        },
      ],
    },
  ])
}

export default Router
