import { User } from "firebase/auth";
import { LatLng } from "leaflet";

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

export interface IGameContext {
  selectedPosition: LatLng | null;
  setSelectedPosition: React.Dispatch<React.SetStateAction<LatLng | null>>;
  initialPosition: {
    lat: number;
    lng: number;
  };
  setInitialPosition: React.Dispatch<
    React.SetStateAction<{
      lat: number;
      lng: number;
    }>
  >;
  showScore: boolean;
  setShowScore: React.Dispatch<React.SetStateAction<boolean>>;
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  date: number;
  setDate: React.Dispatch<React.SetStateAction<number>>;
}

export type ErrorComponentProps = { errorMessage: string };

export interface IAuthContext {
  user: User | null;
  pending: boolean;
}

export type UseGetLastScoreReturn = [
  score: string | null,
  globalRank: number | null,
  totalScores: number | null,
  isPending: boolean,
  error: string | null
];
