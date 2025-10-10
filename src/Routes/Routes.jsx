import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Apps from "../pages/Apps/Apps";
import My_Installation from "../pages/My Installation/My_Installation";
import App_not_Found from "../pages/App not Found/App_not_Found";
import App_Details from "../pages/Apps Details/App_Details";
import AppList from "../pages/Apps/AppList";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        Component: Home,
        loader: async () => {
          const res = await fetch("/apps.json");
          const data = await res.json();
          return data.slice(0, 8);
        },
      },

      {
        path: "/apps",
        Component: Apps,
        errorElement:<App_not_Found></App_not_Found>,
        children: [
          {
            index: true,
            Component: AppList,
            loader: async () => {
              const res = await fetch("/apps.json");
              const data = await res.json();
              return data;
            },
          },
          {
            path: ":id",
            Component: App_Details,
            loader: async ({ params }) => {
              const res = await fetch("/apps.json");
              const data = await res.json();
              const app = data.find((item) => item.id === Number(params.id));
              return app;
            },
          }  
        ],
      },

      {
        path: "/my_installation",
        Component: My_Installation,
        loader: async () => {
          const res = await fetch("/apps.json");
          const data = await res.json();
          return data;
        },
      },
    ],
  },
]);
