import { useContext } from "react";
import { GameContext } from "../../context/GameContext";
import calculateDistanceInKm from "../../utils/calculateDistanceInKm";
import calculatePoints from "../../utils/calculatePoints";
import useCreateNewScoreDoc from "../../hooks/useCreateNewScoreDoc";
import { useAuthContext } from "../../context/AuthProvider";
import { toast } from "sonner";

const GuessButton = () => {
  const { selectedPosition, initialPosition, setScore, setDate, setShowScore } =
    useContext(GameContext)!;
  const [createNewScoreDoc] = useCreateNewScoreDoc();
  const auth = useAuthContext();

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

  return (
    <button
      onClick={handleAGuess}
      className="bg-pastelRainbowButton text-noise px-4 py-2 rounded-md text-lg font-bold bg-left bg-buttonZoom hover:bg-right duration-[1.5s] flex gap-2 items-center absolute bottom-2 left-2 md:left-5 md:bottom-5 border border-noise"
    >
      Make a guess
    </button>
  );
};

export default GuessButton;
