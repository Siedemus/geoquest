import { LatLng } from "leaflet";

const calculateDistanceInKm = (
  selectedPosition: LatLng,
  initialPosition: { lat: number; lng: number }
) => {
  const R = 6371;
  const dLat = deg2rad(selectedPosition.lat - initialPosition.lat);
  const dLng = deg2rad(selectedPosition.lng - initialPosition.lng);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(initialPosition.lat)) *
      Math.cos(deg2rad(selectedPosition.lat)) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;
  return Math.floor(distance);
};

const deg2rad = (deg: number) => {
  return deg * (Math.PI / 180);
};

export default calculateDistanceInKm;
