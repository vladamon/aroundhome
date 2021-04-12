import { DateTime } from 'luxon'

export const parseDate = (dateISO) => {
  return DateTime.fromISO(dateISO)
}

export const parseSlotsData = (companies) => {
  const finalArr = {}

  const parsedArr = companies.map((company) => {
    return {
      ...company,
      time_slots: company.time_slots.map(({start_date, end_date}) => ({
        start_date: parseDate(start_date),
        end_date: parseDate(end_date)
      }))
    }
  })

  const result = parsedArr.reduce(item => {
    const startDate = DateTime.fromISO(item.start_date)
    const endDate = DateTime.fromISO(item.end_date)
    const day = startDate.day
    const month = startDate.month
    const year = startDate.year

    const formatted = `${day}/${month}/${year}`

    if (!finalArr[formatted]) {
      finalArr[formatted] = []
    }

    finalArr[formatted].push({
      start_date: startDate,
      end_date: endDate
    })

    return finalArr
  }, finalArr)

  return result
}