import { MapContainer, TileLayer } from "react-leaflet";
import MoveableMarker from "./MoveableMarker";
import { IPositionState } from "../../assets/resources/interfaces";
import GuessButton from "./GuessButton";

const PlaceSelector = ({
  positionState,
  handleAGuess,
}: {
  positionState: IPositionState;
  handleAGuess: () => void;
}) => {
  return (
    <div className="w-full h-[40vh] md:h-[30vh] relative">
      <MapContainer
        center={{ lat: 0, lng: 0 }}
        zoom={3}
        className="w-full h-full -z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MoveableMarker positionState={positionState} />
      </MapContainer>
      <GuessButton handleAGuess={handleAGuess} />
    </div>
  );
};

export default PlaceSelector;
