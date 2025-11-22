import { HttpError } from "./errorHandler.js"

export function validate(schema) {
	return async (req, res, next) => {
		const result = await schema.safeParseAsync(req.body)

		if (!result.success) {
			throw new HttpError(400, "datos no válidos")
		}

		next()
	}
}
