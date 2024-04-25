import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/layout/theme-provider.jsx";
import App from "./App.jsx";
import router from '@/router'
import "./index.css";

import accountService from "./services/accountService.js";
accountService.initializeDataStorage(); // load data for example

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
      <Toaster />
    </ThemeProvider>
  </React.StrictMode>
);
