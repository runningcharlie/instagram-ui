import type { RouteObject } from "react-router-dom";
import Home from "./pages/home";
import Following from "./pages/following";
import NotFound from "./pages/notFound";

/**
 * 1. pages建立好。pages目录用于放页面级别的组件。
 * 2. 写好router config
 * 3. 引入BrowserRouter
 * 4. 在App.tsx使用useRouters初始化路由
 *  */ 

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
    children: [],
  },
  {
    path: "/following",
    element: <Following />,
    children: [],
  },
  {
    path: "*",
    element: <NotFound />,
    children: [],
  },
];

export default routes;
