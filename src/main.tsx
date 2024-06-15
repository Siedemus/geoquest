import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/home/App.tsx";
import "./globals.css";
import AuthProvider from "./context/AuthProvider.tsx";
import Navigation from "./components/Navigation.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RouteError from "./components/RouteError.tsx";
import Game from "./pages/game/Game.tsx";
import { Toaster } from "sonner";
import { LoadScript } from "@react-google-maps/api";
import { Commet } from "react-loading-indicators";
import GameContextProvider from "./context/GameContext.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <RouteError />,
  },
  {
    path: "/play",
    element: (
      <GameContextProvider>
        <Game />
      </GameContextProvider>
    ),
  },
]);

const loadScriptProps = {
  preventGoogleFontsLoading: true,
  loadingElement: (
    <div className="mx-auto my-80 w-max">
      <Commet color="lightBlue" size="medium" />
    </div>
  ),
  googleMapsApiKey: `${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}&loading=async`,
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LoadScript {...loadScriptProps}>
      <AuthProvider>
        <Navigation />
        <RouterProvider router={router} />
        <Toaster richColors />
      </AuthProvider>
    </LoadScript>
  </React.StrictMode>
);
