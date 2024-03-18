import i18n from '../config/i18n'

export function formatDateTime(dateTimeString: string) {
  const t = i18n.t.bind(i18n)

  const dateTime = new Date(dateTimeString)

  const day = dateTime.getDate()
  const month = ('0' + (dateTime.getMonth() + 1)).slice(-2)
  const hours = dateTime.getHours()
  const minutes = ('0' + dateTime.getMinutes()).slice(-2)

  const formattedText = `${t(
    'utils.formatDatetime.departure',
  )} ${day}/${month} ${t('utils.formatDatetime.at')} ${hours}:${minutes}h`

  return formattedText
}
