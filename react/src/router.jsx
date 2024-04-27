import { createBrowserRouter } from "react-router-dom";
import NotFoundError from "./pages/NotFound/NotFound";
import GeneralError from "./pages/GeneralError/GeneralError";

const router = createBrowserRouter(
  [
    // Main routes
    {
      path: "/",
      lazy: async () => {
        const App = await import("@/App");
        return { Component: App.default };
      },
      errorElement: <GeneralError />,
      children: [
        {
          index: true,
          lazy: async () => ({
            Component: (await import("@/pages/Dashboard")).default,
          }),
        },
        {
          path: "explore",
          lazy: async () => ({
            Component: (await import("@/pages/Explore/Explore")).default,
          }),
        },
        {
          path: "/resources/:type",
          lazy: async () => ({
            Component: (await import("@/pages/Resources/Resources")).default,
          }),
        },
        {
          path: "/resource/:id",
          lazy: async () => ({
            Component: (await import("@/pages/ResourceDetail/ResourceDetail"))
              .default,
          }),
        },
        {
          path: "/tracks",
          lazy: async () => ({
            Component: (await import("@/pages/Tracks/Tracks")).default,
          }),
        },
        {
          path: "/tracks/add",
          lazy: async () => ({
            Component: (await import("@/pages/Tracks/AddTrack")).default,
          }),
        },
        {
          path: "/tracks/edit/:id",
          lazy: async () => ({
            Component: (await import("@/pages/Tracks/EditTrack")).default,
          }),
        },
        {
          path: "/settings",
          lazy: async () => ({
            Component: (await import("@/pages/Settings/Settings")).default,
          }),
        },
      ],
    },

    // Error routes
    { path: "/404", Component: NotFoundError },

    // Fallback 404 route
    { path: "*", Component: NotFoundError },
  ],
  { basename: import.meta.env.VITE_BASE }
);

export default router;
