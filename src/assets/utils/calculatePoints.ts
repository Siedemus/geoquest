const calculatePoints = (distanceInKm: number) => {
  const maxPoints = 1000;
  const maxDistance = 150;

  if (distanceInKm > maxDistance) {
    return 0;
  } else {
    const points = maxPoints * (1 - distanceInKm / maxDistance);
    return Math.round(points);
  }
};

export default calculatePoints;
