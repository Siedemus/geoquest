import { useEffect, useRef } from "react";

const StreetView = ({
  locations,
}: {
  locations: { lat: number; lng: number }[];
}) => {
  const containerRef = useRef(null);
  const getRandomLocation = () => {
    return locations[Math.floor(Math.random() * locations.length)];
  };

  useEffect(() => {
    if (containerRef.current) {
      new window.google.maps.StreetViewPanorama(containerRef.current, {
        position: getRandomLocation(),
        pov: { heading: 165, pitch: 0 },
        zoom: 1,
        disableDefaultUI: true,
        showRoadLabels: false,
        linksControl: false,
        addressControl: false,
        enableCloseButton: false,
        disableDoubleClickZoom: true,
      });
    }
  }, []);

  return <div className="w-full h-full" ref={containerRef}></div>;
};

export default StreetView;
