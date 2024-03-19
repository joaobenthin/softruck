export function getWaypoints(
  mapViewDirectionsData: { latitude: number; longitude: number }[],
) {
  return mapViewDirectionsData.length > 25
    ? mapViewDirectionsData.slice(1, 25)
    : mapViewDirectionsData.slice(1, -1)
}
