import useGetBestScores from "../../hooks/useGetBestScores";
import { Commet } from "react-loading-indicators";

const Leaderboard = () => {
  const [bestScores, isPending, error] = useGetBestScores();

  return (
    <section className="w-full h-full py-12 px-12">
      <h2 className="font-extrabold text-4xl text-center md:text-left mb-12 md:text-6xl font-libreFranklin">
        Leaderboard
      </h2>
      <div className="bg-salt p-4 md:p-10 md:mx-6 rounded-md overflow-x-auto text-center">
        {isPending ? (
          <Commet color={"white"} size="large" />
        ) : (
          <table className="w-full">
            <thead>
              <tr className="border-b border-noise">
                <td className="text-xl font-bold p-4">Rank</td>
                <td className="text-xl font-bold p-4">Player</td>
                <td className="text-xl font-bold p-4">Score</td>
                <td className="text-xl font-bold p-4">Location</td>
              </tr>
            </thead>
            <tbody>
              {error === null ? (
                bestScores.length !== 0 ? (
                  bestScores.map((score) => (
                    <tr
                      key={score.rank}
                      className="border-b border-noise last:border-none hover:bg-gray-700 duration-700"
                    >
                      <td className="p-4">{score.rank}</td>
                      <td className="p-4">{score.name}</td>
                      <td className="p-4">{score.score}</td>
                      <td className="p-4">{score.position}</td>
                    </tr>
                  ))
                ) : (
                  <tr className="border-b border-noise last:border-none hover:bg-gray-700 duration-700">
                    <td className="p-4">No rank</td>
                    <td className="p-4">-</td>
                    <td className="p-4">-</td>
                    <td className="p-4">-</td>
                  </tr>
                )
              ) : (
                <tr className="border-b border-noise last:border-none hover:bg-gray-700 duration-700">
                  <td className="p-4">-1</td>
                  <td className="p-4">ERROR</td>
                  <td className="p-4">#404</td>
                  <td className="p-4">
                    We cant find any leader's right now, probably they are here:
                    -12.126317597931406, 96.8649910519608
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </section>
  );
};

export default Leaderboard;
