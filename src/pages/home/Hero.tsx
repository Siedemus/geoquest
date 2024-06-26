import { useNavigate } from "react-router-dom";
import { LogIn, LogOut, useAuthContext } from "../../context/AuthProvider";
import google from "../../assets/images/google.png";
import planet from "../../assets/images/planet.png";

const Hero = () => {
  const auth = useAuthContext();
  const navigate = useNavigate();

  return (
    <main className="flex flex-col items-center mt-24 md:mt-48 text-center p-2 pb-0 gap-6">
      <h2 className="bg-pastelRainbow text-transparent bg-clip-text font-extrabold text-5xl md:text-7xl max-w-7xl animate-pastel">
        Challenge Your World Knowledge and Discover New Places!
      </h2>
      <p className="text-stone text-xl max-w-[520px] text-sha">
        GeoQuest is an interactive geography-based game where players are
        challenged to identify locations around the world based on visual clues
        from images.
      </p>
      {!auth?.user ? (
        <button
          onClick={LogIn}
          className="bg-pastelRainbowButton text-noise px-4 py-2 rounded-md text-lg font-bold bg-left bg-buttonZoom hover:bg-right duration-[1.5s] flex gap-2 items-center"
        >
          Log In with <img src={google} className="w-6" alt="google logo" />
        </button>
      ) : (
        <div className="flex gap-5">
          <button
            onClick={() => navigate("/play")}
            className="bg-pastelRainbowButton text-noise px-8 py-2 rounded-md text-lg font-bold bg-left bg-buttonZoom hover:bg-right duration-[1.5s]"
          >
            Play
          </button>
          <button
            onClick={LogOut}
            className="bg-pastelRainbowButton text-noise px-8 py-2 rounded-md text-lg font-bold bg-left bg-buttonZoom hover:bg-right duration-[1.5s]"
          >
            Log Out
          </button>
        </div>
      )}
      <img className="w-full h-full" src={planet} alt="Planet image." />
    </main>
  );
};

export default Hero;
