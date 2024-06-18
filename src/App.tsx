import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorComponent from "./components/ErrorComponent";
import GameContextProvider from "./context/GameContext";
import Game from "./pages/game/Game";
import Home from "./pages/home/Home";
import Dashboard from "./pages/dashboard/Dashboard";

const errorMessage =
  "The page you were looking for doesn't exist. Please check the URL or try navigating back to the home page.";

const router = createBrowserRouter([
  {
    path: "/geoquest",
    element: <Home />,
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
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
