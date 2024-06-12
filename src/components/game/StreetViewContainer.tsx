import { GoogleMap } from "@react-google-maps/api";
import { useEffect, useState } from "react";
import StreetView from "./StreetView";

const StreetViewContainer = ({
  initialPosition,
}: {
  initialPosition: { lat: number; lng: number };
}) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <GoogleMap
      mapContainerStyle={{
        width: "100%",
        height: screenWidth >= 768 ? "70vh" : "60vh",
      }}
      center={{ lat: 0, lng: 0 }}
      zoom={10}
    >
      <StreetView initialPosition={initialPosition} />
    </GoogleMap>
  );
};

export default StreetViewContainer;