import { useEffect, useRef } from "react";

const StreetView = ({
  locations,
}: {
  locations: { lat: number; lng: number }[];
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      new window.google.maps.StreetViewPanorama(containerRef.current, {
        position: locations[38],
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
