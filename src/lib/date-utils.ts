export function isWeekend(date: Date) {
  const d = date.getDay()
  return d === 0 || d === 6
}

export function addBusinessDays(start: Date, days: number) {
  const d = new Date(start)
  let added = 0
  while (added < days) {
    d.setDate(d.getDate() + 1)
    if (!isWeekend(d)) added++
  }
  d.setHours(0, 0, 0, 0)
  return d
}

export function todayStart() {
  const t = new Date()
  t.setHours(0, 0, 0, 0)
  return t
}
