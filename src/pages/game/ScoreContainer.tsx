import { useAuthContext } from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import { ThreeDot } from "react-loading-indicators";
import useGetRank from "../../hooks/useGetRank";
import getInitialPosition from "../../utils/getInitialPosition";
import { useContext } from "react";
import { GameContext } from "../../context/GameContext";

const ScoreContainer = () => {
  const { date, setInitialPosition, setShowScore, score } =
    useContext(GameContext)!;
  const auth = useAuthContext();
  const [rank, isPending, error] = useGetRank(auth?.user?.uid!, date);
  const navigate = useNavigate();

  const handlePlayAgain = () => {
    setInitialPosition(() => getInitialPosition());
    setShowScore(false);
  };

  return (
    <main className="mt-[10vh] semi-md:mt-[25vh] flex justify-center items-center flex-col">
      <article className="flex bg-salt p-5 rounded-lg flex-col semi-md:flex-row gap-3">
        <section className="bg-cosmic p-3 flex justify-center items-center flex-col gap-4 rounded-md w-80">
          <img
            src={auth?.user?.photoURL!}
            className="rounded-full border-2 border-cloudy p-1"
          />
          <p className="break-words font-extrabold text-lg font-libreFranklin bg-pastelRainbow text-transparent bg-clip-text animate-pastel">
            {auth?.user?.displayName}
          </p>
        </section>
        <section className="flex flex-col justify-between">
          <article className="bg-cosmic p-3 rounded-md h-1/2 mb-3">
            <h3 className="text-noise text-lg">score</h3>
            <p className="text-5xl">{score !== 0 ? score : "0000"}</p>
          </article>
          <article className="bg-cosmic p-3 rounded-md h-1/2">
            <h3 className="text-noise text-lg">rank</h3>
            {score !== 0 ? (
              error === null ? (
                isPending ? (
                  <ThreeDot color={"#FFFFFF"} size="small" />
                ) : (
                  <p className="text-5xl">{rank}</p>
                )
              ) : (
                <p className="text-5xl">ERROR. 404</p>
              )
            ) : (
              <p className="text-5xl">No rank</p>
            )}
          </article>
        </section>
        <section className="flex justify-center bg-cosmic items-center w-80 semi-md:w-96 h-96 rounded-md">
          emtyp
        </section>
      </article>
      <article className="flex gap-3 my-5 bg-salt p-3 rounded-md">
        <button
          onClick={handlePlayAgain}
          className="bg-pastelRainbowButton text-noise px-4 py-2 rounded-md text-lg font-bold bg-left bg-buttonZoom hover:bg-right duration-[1.5s] flex gap-2 items-center"
        >
          Play Again
        </button>
        <button
          onClick={() => navigate("/")}
          className="bg-pastelRainbowButton text-noise px-4 py-2 rounded-md text-lg font-bold bg-left bg-buttonZoom hover:bg-right duration-[1.5s] flex gap-2 items-center"
        >
          Home
        </button>
        <button
          onClick={() => navigate("/dashboard")}
          className="bg-pastelRainbowButton text-noise px-4 py-2 rounded-md text-lg font-bold bg-left bg-buttonZoom hover:bg-right duration-[1.5s] flex gap-2 items-center"
        >
          Dashboard
        </button>
      </article>
    </main>
  );
};

export default ScoreContainer;
