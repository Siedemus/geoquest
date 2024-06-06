import { LatLng } from "leaflet";

export interface ILeaderboard {
  rank: number;
  name: string;
  score: number;
  location: string;
}

export interface IPositionState {
  selectedPosition: LatLng | null;
  setSelectedPosition: React.Dispatch<React.SetStateAction<LatLng | null>>;
}
