import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Root from "./routes/root.jsx";
import About from "./pages/about/index.jsx";
import Visuals from "./pages/visuals/index.jsx";
import Store from "./pages/store/index.jsx";
import SingleProduct from "./pages/single-product/index.jsx";
import AppProvider from "./utils/context.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/collections",
        element: <Store />,
      },
      {
        path: "/collections/:productName",
        element: <SingleProduct />,
      },
      {
        path: "/visuals",
        element: <Visuals />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  </React.StrictMode>
);
