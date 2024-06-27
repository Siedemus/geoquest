import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { LatLng } from "leaflet";
import { useState } from "react";
import { UseCreateNewScoreDocReturn } from "../assets/resources/types";

const useCreateNewScoreDoc = (): UseCreateNewScoreDocReturn => {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createNewScoreDoc = async (
    score: number,
    userUid: string,
    name: string | null | undefined,
    selectedPosition: LatLng,
    date: number
  ) => {
    try {
      setIsPending(true);
      const formattedPosition = `${selectedPosition.lat}, ${selectedPosition.lng}`;

      await setDoc(doc(db, "scores", date + userUid), {
        score,
        userUid,
        name: name ? name : "Anonymous",
        position: formattedPosition,
        date,
      });

      setIsPending(false);
    } catch (e: any) {
      setIsPending(false);
      setError(e.message || "Something went wrong during score submission.");
    }
  };

  return [createNewScoreDoc, isPending, error];
};

export default useCreateNewScoreDoc;
