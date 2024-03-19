import i18n from '../config/i18n'

export function formatDistance(distanceInMeters: number) {
  const t = i18n.t.bind(i18n)

  if (distanceInMeters < 1000) {
    return distanceInMeters + ` ${t('utils.formatDistance.meters')}`
  } else {
    const distanceInKilometers = (distanceInMeters / 1000).toFixed(1)
    return distanceInKilometers + ` ${t('utils.formatDistance.km')}`
  }
}
