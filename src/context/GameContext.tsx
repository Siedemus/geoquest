import { LatLng } from "leaflet";
import { ReactNode, createContext, useState } from "react";
import getInitialPosition from "../assets/utils/getInitialPosition";
import { IGameContext } from "../assets/resources/types";

export const GameContext = createContext<undefined | IGameContext>(undefined);

const GameContextProvider = ({ children }: { children: ReactNode }) => {
  const [selectedPosition, setSelectedPosition] = useState<null | LatLng>(null);
  const [initialPosition, setInitialPosition] = useState(() =>
    getInitialPosition()
  );
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [date, setDate] = useState(0);

  return (
    <GameContext.Provider
      value={{
        selectedPosition,
        setSelectedPosition,
        initialPosition,
        setInitialPosition,
        showScore,
        setShowScore,
        score,
        setScore,
        date,
        setDate,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContextProvider;
