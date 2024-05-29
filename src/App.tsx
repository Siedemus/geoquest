import { Commet } from "react-loading-indicators";
import { useAuthContext } from "./components/AuthProvider";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Leaderboard from "./components/Leaderboard";
import Tutorial from "./components/Tutorial";

const App = () => {
  const auth = useAuthContext();
  const tempLeaders = [
    { rank: 1, name: "PLAPLAPLAPLA", score: 100, location: "New York" },
    { rank: 2, name: "Player 2", score: 90, location: "Los Angeles" },
    { rank: 3, name: "Player 3", score: 80, location: "Chicago" },
    { rank: 4, name: "Player 3", score: 80, location: "Chicago" },
    { rank: 5, name: "Player 3", score: 80, location: "Chicago" },
  ];

  return (
    <>
      {auth?.pending ? (
        <div className="mx-auto my-80 w-max">
          <Commet color="lightBlue" size="medium" />
        </div>
      ) : (
        <>
          <Hero />
          <Tutorial />
          <Leaderboard leadersList={tempLeaders} />
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
