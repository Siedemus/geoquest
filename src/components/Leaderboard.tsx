import { ILeaderboard } from "../assets/resources/interfaces";

const Leaderboard = ({ leadersList }: { leadersList: ILeaderboard[] }) => {
  return (
    <section className="w-full h-full py-12 px-12">
      <h2 className="font-extrabold text-4xl text-center md:text-left mb-12 md:text-6xl font-libreFranklin">
        Leaderboard
      </h2>
      <div className="bg-salt p-4 md:p-10 md:mx-6 rounded-md overflow-x-auto">
        <table className="w-full">
          <tr className="border-b border-noise">
            <td className="text-xl font-bold p-4">Rank</td>
            <td className="text-xl font-bold p-4">Player</td>
            <td className="text-xl font-bold p-4">Score</td>
            <td className="text-xl font-bold p-4">Location</td>
          </tr>
          {leadersList.map((leader, i) => (
            <tr
              key={i}
              className="border-b border-noise last:border-none hover:bg-gray-700 duration-700"
            >
              <td className="p-4">{leader.rank}</td>
              <td className="p-4">{leader.name}</td>
              <td className="p-4">{leader.score}</td>
              <td className="p-4">{leader.location}</td>
            </tr>
          ))}
        </table>
      </div>
    </section>
  );
};

export default Leaderboard;
