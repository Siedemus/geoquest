import { useEffect, useRef } from "react";

const StreetView = ({
  initialPosition,
}: {
  initialPosition: { lat: number; lng: number };
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      new window.google.maps.StreetViewPanorama(containerRef.current, {
        position: initialPosition,
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

  return <div ref={containerRef} className="w-full h-full"></div>;
};

export default StreetView;
