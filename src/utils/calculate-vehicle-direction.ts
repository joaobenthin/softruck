export function calculateVehicleDirection(
  initialLatitude: number,
  initialLongitude: number,
  finalLatitude: number,
  finalLongitude: number,
) {
  const dx = finalLongitude - initialLongitude
  const dy = finalLatitude - initialLatitude

  const angle = Math.atan2(dy, dx) * (180 / Math.PI)

  const adjustedAngle = angle < 0 ? 360 + angle : angle

  let direction = 0
  if (adjustedAngle >= 22.5 && adjustedAngle < 67.5) {
    direction = 3
  } else if (adjustedAngle >= 67.5 && adjustedAngle < 112.5) {
    direction = 4
  } else if (adjustedAngle >= 112.5 && adjustedAngle < 157.5) {
    direction = 5
  } else if (adjustedAngle >= 157.5 && adjustedAngle < 202.5) {
    direction = 6
  } else if (adjustedAngle >= 202.5 && adjustedAngle < 247.5) {
    direction = 7
  } else if (adjustedAngle >= 247.5 && adjustedAngle < 292.5) {
    direction = 0
  } else if (adjustedAngle >= 292.5 && adjustedAngle < 337.5) {
    direction = 1
  } else {
    direction = 2
  }

  return direction
}
