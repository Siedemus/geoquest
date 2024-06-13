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
    <LoadScript
      preventGoogleFontsLoading={true}
      loadingElement={
        <div className="mx-auto my-80 w-max">
          <Commet color="lightBlue" size="medium" />
        </div>
      }
      googleMapsApiKey="AIzaSyAcKzJ9-X_B0NVUMM1t1lxbmJ2_O9VUib4&loading=async"
    >
      <AuthProvider>
        <Navigation />
        <RouterProvider router={router} />
        <Toaster richColors />
      </AuthProvider>
    </LoadScript>
  </React.StrictMode>
);
