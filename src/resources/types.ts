import { LatLng } from "leaflet";

export interface IStreetViewProps {
  initialPosition: { lat: number; lng: number };
}

export interface IScoreContainerProps {
  score: number;
  date: number;
  setShowScore: React.Dispatch<React.SetStateAction<boolean>>;
  setInitialPosition: React.Dispatch<
    React.SetStateAction<{
      lat: number;
      lng: number;
    }>
  >;
}

export interface IPlaceSelectorProps {
  selectedPosition: LatLng | null;
  setSelectedPosition: React.Dispatch<React.SetStateAction<LatLng | null>>;
  handleAGuess: () => void;
}

export interface IMovableMarkerProps {
  selectedPosition: LatLng | null;
  setSelectedPosition: React.Dispatch<React.SetStateAction<LatLng | null>>;
}

export interface IGuessButtonProps {
  handleAGuess: () => void;
}

export type UseCreateNewScoreDocReturn = [
  (
    score: number,
    userUid: string,
    name: string | null | undefined,
    selectedPosition: LatLng,
    date: number
  ) => Promise<void>,
  boolean,
  string | null
];

export type UseGetBestScoresReturn = [
  bestScores: {
    rank: number;
    name: string;
    score: number;
    position: string;
  }[],
  isPending: boolean,
  error: null | string
];

export type UseGetRankReturn = [
  rank: number,
  isPending: boolean,
  error: null | string
];
