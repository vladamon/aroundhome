import { DateTime } from 'luxon'

const parseISODate = (dateISO) => DateTime.fromISO(dateISO).toLocaleString(DateTime.DATETIME_SHORT)

const parseDateOnly = (dateISO) => DateTime.fromISO(dateISO).toLocaleString(DateTime.DATE_SHORT)

const getSlotOnly = (start, end) => {
  const startSlot = start.split(',')[1].trim()
  const endSlot = end.split(',')[1].trim()

  return `${startSlot}-${endSlot}`
}

const parseTimeSlot = ({ start_time, end_time }) => {
  const humanReadableStart = parseISODate(start_time)
  const humanReadableEnd = parseISODate(end_time)
  const dateOnly = parseDateOnly(start_time)
  const slot = getSlotOnly(humanReadableStart, humanReadableEnd)

  return {
    start_time: humanReadableStart,
    end_time: humanReadableEnd,
    date: dateOnly,
    slot: slot,
    start_time_iso: start_time,
    end_time_iso: end_time
  }
}

export const doSlotsOverlap = (selectedSlotData, slotStart, slotEnd) => {
  const start = DateTime.fromISO(slotStart).toSeconds()
  const end = DateTime.fromISO(slotEnd).toSeconds()

  const selectedStart = DateTime.fromISO(selectedSlotData.start).toSeconds()
  const selectedEnd = DateTime.fromISO(selectedSlotData.end).toSeconds()

  return start < selectedEnd && end > selectedStart
}

export const parseCompanyData = (companies) => {
  const parsedArr = companies.map((company) => {
    return {
      ...company,
      time_slots: company.time_slots.map(slot => parseTimeSlot(slot))
    }
  })

  const result = parsedArr.map(cmp => {
    return {
      ...cmp,
      groupedTimeSlots: cmp.time_slots.reduce((acc, item) => {
        const { date } = item

        if (!acc[date]) {
          acc[date] = []
        }

        acc[date].push(item)

        return acc
      }, {})
    }
  })

  return result
}
