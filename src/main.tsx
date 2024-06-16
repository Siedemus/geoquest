import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/home/App.tsx";
import "./globals.css";
import AuthProvider from "./context/AuthProvider.tsx";
import Navigation from "./components/Navigation.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Game from "./pages/game/Game.tsx";
import { Toaster } from "sonner";
import { LoadScript } from "@react-google-maps/api";
import { Commet } from "react-loading-indicators";
import GameContextProvider from "./context/GameContext.tsx";
import ErrorComponent from "./components/ErrorComponent.tsx";

const errorMessage =
  "The page you were looking for doesn't exist. Please check the URL or try navigating back to the home page.";

const loadScriptProps = {
  preventGoogleFontsLoading: true,
  loadingElement: (
    <div className="mx-auto my-80 w-max">
      <Commet color="lightBlue" size="medium" />
    </div>
  ),
  googleMapsApiKey: `${import.meta.env.VITE_GOOGLE_API_KEY}&loading=async`,
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorComponent errorMessage={errorMessage} />,
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
