import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../firebase/config";
import { useEffect, useState } from "react";
import { UseGetLastScoreReturn } from "../assets/resources/types";

export const useGetLastScore = (uid: string): UseGetLastScoreReturn => {
  const [lastScore, setLastScore] = useState<string | null>(null);
  const [globalRank, setGlobalRank] = useState<number | null>(null);
  const [totalScores, setTotalScores] = useState<number | null>(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const fetchLastScore = async () => {
      try {
        const q = query(collection(db, "scores"), orderBy("date", "desc"));
        setIsPending(true);
        const snapshot = await getDocs(q);
        const docs = snapshot.docs.map((doc) => doc.data());
        const lastScore = docs.find((doc) => doc.userUid === uid)!;   
        const globalRank = docs
          .sort((doc1, doc2) => doc1.score - doc2.score)
          .findIndex((doc) => doc.userUid === uid)!;
        docs.map((doc) => {
          if (doc.userUid === uid) {
            setTotalScores((prev) => prev + doc.score);
          }
        });
        setGlobalRank(globalRank + 1);
        setLastScore(lastScore.score);
      } catch (e: any) {
        setError(e.message || "Sorry but we cant get your last score.");
      } finally {
        setIsPending(false);
      }
    };

    fetchLastScore();
  }, [uid]);

  return [lastScore, globalRank, totalScores, isPending, error];
};
