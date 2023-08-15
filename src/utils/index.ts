export function getDateDifference(date: Date): string {
	const dateDifference = Date.now() - date.getTime()

	const dayDiff = dateDifference / 1000 / 3600 / 24
	const minutesDiff = new Date(dateDifference).getMinutes()
	const hoursDiff = new Date(dateDifference).getHours()

	if (dayDiff >= 1) {
		return `${date.toLocaleDateString()}`
	} else if (hoursDiff > 0) {
		return `${hoursDiff} h ago`
	} else {
		return `${minutesDiff} min ago`
	}
}
export function clipText(text: string, maxLength: number = 50) {
	// Adds ... at the of the text if text has characters' length greather than `maxLength`
	return `${text.substring(0, maxLength)}${'.'.repeat(Math.max(Math.min(text.length - maxLength, 3), 0))}`
}
