import React from "react";
import ReactDOM from "react-dom/client";
import PizzaPage from "./components/PizzaPage";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/pizza",
    element: <PizzaPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<React.StrictMode>
<RouterProvider router={router} />
</React.StrictMode>
);
