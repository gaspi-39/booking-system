import { HttpError } from "./errorHandler.js"

export function validate(schema) {
	return async (req, res, next) => {
		const result = await schema.safeParseAsync(req.body)

		if (!result.success) {
			throw new HttpError(400, "Datos no válidos")
		}

		next()
	}
}
export function validateId(schema) {
	return async (req, res, next) => {
		const { id } = req.params
		const result = await schema.safeParseAsync(Number(id))
		if (!result.success) {
			throw new HttpError(400, "ID no válida")
		}

		next()
	}
}
