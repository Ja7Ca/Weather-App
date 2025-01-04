const CONDITIONS = ['Sunny', 'Cloudy', 'Rainy', 'Partly Cloudy']

export const generateWeatherData = (currentHour) => {
  const data = []

  // Generate only 7 items: 3 before, current, and 3 after
  for (let i = -3; i <= 3; i++) {
    const hour = (currentHour + i + 24) % 24
    const temp = Math.round(20 + Math.random() * 10)
    const condition = CONDITIONS[Math.floor(Math.random() * CONDITIONS.length)]
    data.push({ hour, temp, condition })
  }

  return data.sort((a, b) => a.hour - b.hour)
}
