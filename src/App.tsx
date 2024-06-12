import { Commet } from "react-loading-indicators";
import { useAuthContext } from "./components/AuthProvider";
import Footer from "./components/home/Footer";
import Hero from "./components/home/Hero";
import Leaderboard from "./components/home/Leaderboard";
import Tutorial from "./components/home/Tutorial";

const App = () => {
  const auth = useAuthContext();

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
          <Leaderboard />
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
