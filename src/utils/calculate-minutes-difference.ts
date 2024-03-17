export function calculateMinutesDifference(
  startDate: string,
  endDate: string,
): number {
  const start: Date = new Date(startDate)
  const end: Date = new Date(endDate)

  const differenceMs: number = Math.abs(end.getTime() - start.getTime())

  const differenceMin: number = Math.floor(differenceMs / (1000 * 60))

  return differenceMin
}
