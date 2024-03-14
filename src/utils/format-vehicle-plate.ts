export function formatLicensePlate(plate: string) {
  return plate.slice(0, 3) + '-' + plate.slice(3)
}
