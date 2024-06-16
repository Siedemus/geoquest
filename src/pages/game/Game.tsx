import { useContext } from "react";
import { GameContext } from "../../context/GameContext";
import ScoreContainer from "./ScoreContainer";
import StreetViewContainer from "./StreetViewContainer";
import PlaceSelector from "./PlaceSelector";
import ErrorComponent from "../../components/ErrorComponent";
import { useAuthContext } from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Game = () => {
  const gameContext = useContext(GameContext);
  const auth = useAuthContext();
  const navigate = useNavigate();
  const googleMapsApiErrorMessage =
    "There was an issue loading the Google Maps. Please try again later.";

  const handleNotAuthorizedUser = () => {
    navigate("/");
    toast.warning("You are not logged in.");
  };

  return auth?.user ? (
    gameContext !== undefined ? (
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
    )
  ) : (
    handleNotAuthorizedUser()
  );
};

export default Game;
