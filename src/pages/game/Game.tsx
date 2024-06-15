import { useContext } from "react";
import { GameContext } from "../../context/GameContext";
import ScoreContainer from "./ScoreContainer";
import StreetViewContainer from "./StreetViewContainer";
import PlaceSelector from "./PlaceSelector";
import ErrorComponent from "../../components/ErrorComponent";

const Game = () => {
  const gameContext = useContext(GameContext);
  const googleMapsApiErrorMessage =
    "There was an issue loading the Google Maps. Please try again later.";

  return gameContext !== undefined ? (
    gameContext.showScore ? (
      <ScoreContainer />
    ) : (
      <>
        <StreetViewContainer />
        <PlaceSelector />
      </>
    )
  ) : (
    <ErrorComponent errorMessage={googleMapsApiErrorMessage} />
  );
};

export default Game;
