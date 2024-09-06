import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
],
  {
    basename: "/example-vite-recipe/",
  },
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<React.StrictMode>
<RouterProvider router={router} />
</React.StrictMode>
);
