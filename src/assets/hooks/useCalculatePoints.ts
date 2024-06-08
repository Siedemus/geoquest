const useCalculatePoints = (distanceInKm: number) => {
  const maxPoints = 1000;
  const maxDistance = 150;

  if (distanceInKm > maxDistance) {
    return "0000";
  } else {
    const points = maxPoints * (1 - distanceInKm / maxDistance);
    return Math.round(points);
  }
};

export default useCalculatePoints;
