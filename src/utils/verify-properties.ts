
export const verifyProperties = (
	inputs: string[],
	fieldsToHave: string[]) => {

	let missingFields = [];
	fieldsToHave.forEach(field => {
		if (!inputs.includes(field)) {
			missingFields.push(field)
		}
	})

	if (missingFields.length > 0) {
		const error = 'provide the missing ' + missingFields.toString() + ' fields'
		return error
		// return sendResponse(res, StatusCode.BAD_REQUEST, error)
	} else return null


}