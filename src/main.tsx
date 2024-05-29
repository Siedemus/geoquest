import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./globals.css";
import AuthProvider from "./components/AuthProvider.tsx";
import Navigation from "./components/Navigation.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <Navigation />
      <App />
    </AuthProvider>
  </React.StrictMode>
);
