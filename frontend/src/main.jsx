import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import connexion from "./services/connexion";

import App from "./App";
import InfosPratiques from "./pages/InfosPratiques/InfosPratiques";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: () => {
      return connexion
        .get("/movies")
        .then((response) => response.data)
        .catch((err) => console.error(err));
    },
  },
  {
    path: "/infos-pratiques",
    element: <InfosPratiques />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
