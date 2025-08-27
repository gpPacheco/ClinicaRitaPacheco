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

export function formatDate(dateLike: string | Date) {
  // Se for string no formato 'YYYY-MM-DD', parsear como data local (meia-noite local)
  if (typeof dateLike === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(dateLike)) {
    const d = parseLocalYYYYMMDD(dateLike)
    if (!d) return String(dateLike)
    const dd = String(d.getDate()).padStart(2, '0')
    const mm = String(d.getMonth() + 1).padStart(2, '0')
    const yyyy = d.getFullYear()
    return `${dd}-${mm}-${yyyy}`
  }

  const d = typeof dateLike === 'string' ? new Date(dateLike) : new Date(dateLike)
  if (Number.isNaN(d.getTime())) return String(dateLike)
  const dd = String(d.getDate()).padStart(2, '0')
  const mm = String(d.getMonth() + 1).padStart(2, '0')
  const yyyy = d.getFullYear()
  return `${dd}-${mm}-${yyyy}`
}

// Retorna string YYYY-MM-DD representando a data no horário local (sem conversão UTC)
export function toLocalYYYYMMDD(dateLike: string | Date) {
  const d = typeof dateLike === 'string' ? new Date(dateLike) : new Date(dateLike)
  if (Number.isNaN(d.getTime())) return String(dateLike)
  const dd = String(d.getDate()).padStart(2, '0')
  const mm = String(d.getMonth() + 1).padStart(2, '0')
  const yyyy = d.getFullYear()
  return `${yyyy}-${mm}-${dd}`
}

// Converte uma string 'YYYY-MM-DD' para um Date configurado no horário local (meia-noite local)
export function parseLocalYYYYMMDD(dateStr: string) {
  if (!dateStr || typeof dateStr !== 'string') return null
  const parts = dateStr.split('-').map(Number)
  if (parts.length !== 3) return null
  const [y, m, d] = parts
  if (!y || !m || !d) return null
  const dt = new Date(y, m - 1, d)
  dt.setHours(0, 0, 0, 0)
  return dt
}
