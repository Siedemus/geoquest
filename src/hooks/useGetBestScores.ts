import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { db } from "../firebase/config";
import { useEffect, useState } from "react";
import { UseGetBestScoresReturn } from "../assets/resources/types";

const useGetBestScores = (): UseGetBestScoresReturn => {
  const [bestScores, setBestScores] = useState<
    {
      rank: number;
      name: string;
      score: number;
      position: string;
    }[]
  >([]);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBestScores = async () => {
      try {
        const q = query(
          collection(db, "scores"),
          orderBy("score", "desc"),
          orderBy("date", "desc"),
          limit(5)
        );
        const snapshot = await getDocs(q);
        const scores = snapshot.docs.map((doc, i) => {
          const data = doc.data();
          return {
            rank: i + 1,
            name: data.name,
            score: data.score,
            position: data.position,
          };
        });
        setBestScores(scores);
      } catch (e: any) {
        setError(e.message || "Sorry but we cant get actual leaderboard.");
      } finally {
        setIsPending(false);
      }
    };

    fetchBestScores();
  }, []);

  return [bestScores, isPending, error];
};

export default useGetBestScores;
