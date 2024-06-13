import { Marker, useMapEvents } from "react-leaflet";
import { IMovableMarkerProps } from "../../resources/types";

const MoveableMarker = ({
  selectedPosition,
  setSelectedPosition,
}: IMovableMarkerProps) => {
  useMapEvents({
    click: (e) => {
      setSelectedPosition(e.latlng);
    },
  });

  return selectedPosition && <Marker position={selectedPosition} />;
};

export default MoveableMarker;
