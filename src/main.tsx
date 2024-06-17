import React from "react";
import ReactDOM from "react-dom/client";
import "./globals.css";
import AuthProvider from "./context/AuthProvider.tsx";
import Navigation from "./components/Navigation.tsx";
import { Toaster } from "sonner";
import { LoadScript } from "@react-google-maps/api";
import { Commet } from "react-loading-indicators";
import App from "./App.tsx";

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
        <App />
        <Toaster richColors />
      </AuthProvider>
    </LoadScript>
  </React.StrictMode>
);
