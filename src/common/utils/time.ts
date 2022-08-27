export function handleConvertTimeInSeconds(time: string) {
  const ONE_HOUR_IN_SECONDS = 3600
  const ONE_MINUTE_IN_SECONDS = 60
  const [hours, minutes, seconds] = time.split(':')

  const hoursInSeconds = Number(hours) * ONE_HOUR_IN_SECONDS
  const minutesInSeconds = Number(minutes) * ONE_MINUTE_IN_SECONDS
  return hoursInSeconds + minutesInSeconds + Number(seconds)
}