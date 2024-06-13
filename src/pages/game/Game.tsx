import PlaceSelector from "./PlaceSelector";
import StreetViewContainer from "./StreetViewContainer";
import ScoreContainer from "./ScoreContainer";
import useCreateNewScoreDoc from "../../hooks/useCreateNewScoreDoc";
import { useAuthContext } from "../../context/AuthProvider";
import { LatLng } from "leaflet";
import { toast } from "sonner";
import { useState } from "react";
import getInitialPosition from "../../utils/getInitialPosition";
import calculateDistanceInKm from "../../utils/calculateDistanceInKm";
import calculatePoints from "../../utils/calculatePoints";

const Game = () => {
  const [selectedPosition, setSelectedPosition] = useState<null | LatLng>(null);
  const [initialPosition, setInitialPosition] = useState(() =>
    getInitialPosition()
  );
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [date, setDate] = useState(0);
  const [createNewScoreDoc, isPending, error] = useCreateNewScoreDoc();
  const auth = useAuthContext();
  console.log(initialPosition);

  const handleAGuess = async () => {
    if (selectedPosition) {
      const distanceInKm = calculateDistanceInKm(
        selectedPosition,
        initialPosition
      );
      const points = calculatePoints(distanceInKm);

      setScore(points);

      if (points !== 0) {
        const initialDate = Date.now();
        setDate(initialDate);
        createNewScoreDoc(
          points,
          auth?.user?.uid!,
          auth?.user?.displayName,
          selectedPosition,
          initialDate
        );
      }

      setShowScore(true);
    } else {
      toast.error("You need to make a guess on the map.");
    }
  };

  return showScore ? (
    <ScoreContainer
      score={score}
      date={date}
      setShowScore={setShowScore}
      setInitialPosition={setInitialPosition}
    />
  ) : (
    <>
      <StreetViewContainer initialPosition={initialPosition} />
      <PlaceSelector
        selectedPosition={selectedPosition}
        setSelectedPosition={setSelectedPosition}
        handleAGuess={handleAGuess}
      />
    </>
  );
};

export default Game;
