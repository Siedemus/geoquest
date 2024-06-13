import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useEffect, useState } from "react";
import { UseGetRankReturn } from "../resources/types";

const useGetRank = (userUid: string, date: number): UseGetRankReturn => {
  const [rank, setRank] = useState(0);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const getRank = async () => {
      try {
        setIsPending(true);
        const q = query(
          collection(db, "scores"),
          where("userUid", "==", userUid),
          orderBy("score", "desc")
        );

        const snapshot = await getDocs(q);

        const rank = snapshot.docs.findIndex((doc) => {
          const data = doc.data();
          return data.userUid === userUid && data.date === date;
        });

        setRank(rank + 1);
      } catch (e: any) {
        setError(e.message || "Something went wrong.");
      } finally {
        setIsPending(false);
      }
    };

    getRank();
  }, []);

  return [rank, isPending, error];
};

export default useGetRank;
