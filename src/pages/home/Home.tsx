import { Commet } from "react-loading-indicators";
import { useAuthContext } from "../../context/AuthProvider";
import Footer from "./Footer";
import Hero from "./Hero";
import Leaderboard from "./Leaderboard";
import Tutorial from "./Tutorial";

const Home = () => {
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

export default Home;
