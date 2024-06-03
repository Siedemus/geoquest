import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./globals.css";
import AuthProvider from "./components/AuthProvider.tsx";
import Navigation from "./components/Navigation.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RouteError from "./components/RouteError.tsx";
import Game from "./components/game/Game.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <RouteError />,
  },
  {
    path: "/play",
    element: <Game />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <Navigation />
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
