import { MapContainer, TileLayer } from "react-leaflet";
import MoveableMarker from "./MoveableMarker";
import GuessButton from "./GuessButton";
import { useContext } from "react";
import { GameContext } from "../../context/GameContext";

const PlaceSelector = () => {
  const { selectedPosition, setSelectedPosition } = useContext(GameContext)!;

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
        <MoveableMarker
          selectedPosition={selectedPosition}
          setSelectedPosition={setSelectedPosition}
        />
      </MapContainer>
      <GuessButton />
    </div>
  );
};

export default PlaceSelector;
