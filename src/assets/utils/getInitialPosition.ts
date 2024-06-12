import { locations } from "../resources/locations";

const getInitialPosition = () => {
  return locations[Math.floor(locations.length * Math.random())];
};

export default getInitialPosition;
