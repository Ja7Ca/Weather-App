export const formatHour = (hour) => {
  return `${hour}:00`
}

export const getCurrentHour = () => {
  return new Date().getHours()
}
