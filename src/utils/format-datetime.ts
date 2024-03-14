export function formatDateTime(dateTimeString: string) {
  const dateTime = new Date(dateTimeString)

  const day = dateTime.getDate()
  const month = ('0' + (dateTime.getMonth() + 1)).slice(-2)
  const hours = dateTime.getHours()
  const minutes = ('0' + dateTime.getMinutes()).slice(-2)

  const formattedText = `Saída em ${day}/${month} às ${hours}:${minutes}h`

  return formattedText
}
