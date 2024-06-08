import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { LatLng } from "leaflet";

const useCreateNewScoreDoc = (
  score: number,
  userUid: string,
  name: string,
  selectedLocation: LatLng
) => {
  const formattedLocation = `${selectedLocation.lat}, ${selectedLocation.lng}`;

  setDoc(doc(db, "scores", Date.now() + userUid), {
    score,
    userUid,
    name,
    location: formattedLocation,
  });
  console.log("cos");
};

export default useCreateNewScoreDoc;
