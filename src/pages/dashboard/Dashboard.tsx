import { useNavigate } from "react-router-dom";
import { LogOut, useAuthContext } from "../../context/AuthProvider";
import { useGetLastScore } from "../../hooks/useGetDashboardData";

const Dashboard = () => {
  const auth = useAuthContext();
  const navigate = useNavigate();
  const [lastScore, globalRank, totalScores] =
    useGetLastScore(auth?.user?.uid!);

  const handleLogOut = () => {
    LogOut();
    navigate("/");
  };

  return auth ? (
    <main className="mt-[13vh] lg:mt-[25vh]">
      <article className="flex flex-col lg:flex-row items-center justify-center bg-salt mx-5 rounded-lg p-5 lg:gap-24 xl:mx-44">
        <section className="flex flex-col items-center">
          <img
            className="w-36 rounded-full border-4 p-1 mb-5"
            src={
              auth.user?.photoURL
                ? auth.user.photoURL
                : "src/assets/images/placeholderUser.jpg"
            }
          />
          <h2 className="text-2xl font-extrabold">
            {auth.user?.displayName ? auth.user.displayName : "Anonymous"}
          </h2>
          <p className="text-lg font-bold text-stone">{auth.user?.email}</p>
        </section>
        <section className="grid grid-cols-1 gap-5 py-8 w-full lg:w-[50%]">
          <article className="bg-cosmic w-full p-4 rounded-lg">
            <p className="text-2xl font-extrabold font-libreFranklin">
              Last Score
            </p>
            <p className="text-4xl font-bold p-1">
              {lastScore ? lastScore : "No score"}
            </p>
          </article>
          <article className="bg-cosmic w-full p-4 rounded-lg">
            <p className="text-2xl font-extrabold font-libreFranklin">
              Global Rank
            </p>
            <p className="text-4xl font-bold p-1">
              {globalRank ? globalRank : "No rank"}
            </p>
          </article>
          <article className="bg-cosmic w-full p-4 rounded-lg">
            <p className="text-2xl font-extrabold font-libreFranklin">
              Total Scores
            </p>
            <p className="text-4xl font-bold p-1">
              {totalScores ? totalScores : "No scores"}
            </p>
          </article>
        </section>
      </article>
      <article className="flex gap-3 my-2 justify-center p-3 rounded-md">
        <button
          onClick={() => navigate("/")}
          className="bg-pastelRainbowButton text-noise px-4 py-2 rounded-md text-lg font-bold bg-left bg-buttonZoom hover:bg-right duration-[1.5s] flex gap-2 items-center"
        >
          Home
        </button>
        <button
          onClick={handleLogOut}
          className="bg-pastelRainbowButton text-noise px-4 py-2 rounded-md text-lg font-bold bg-left bg-buttonZoom hover:bg-right duration-[1.5s] flex gap-2 items-center"
        >
          Log Out
        </button>
      </article>
    </main>
  ) : null;
};

export default Dashboard;
