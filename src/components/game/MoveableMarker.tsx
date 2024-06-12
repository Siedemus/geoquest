import { Marker, useMapEvents } from "react-leaflet";
import { IPositionState } from "../../assets/resources/interfaces";

const MoveableMarker = ({
  positionState,
}: {
  positionState: IPositionState;
}) => {
  useMapEvents({
    click: (e) => {
      positionState.setSelectedPosition(e.latlng);
    },
  });

  return (
    positionState.selectedPosition && (
      <Marker position={positionState.selectedPosition} />
    )
  );
};

export default MoveableMarker;
