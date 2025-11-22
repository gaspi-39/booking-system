// middlewares/errorHandler.js
export function errorHandler(err, req, res, next) {
	console.error("catched:", err)

	const status = err.status || 500
	const message = err.message || "Error interno del servidor"

	res.status(status).json({
		error: true,
		message,
	})
}

export class HttpError extends Error {
	constructor(status, message) {
		super(message)
		this.status = status
	}
}
//esta clase obtiene las propiedades de Error,  usa la clave "message" con super() y le da un mensaje
//personalizado, express los deja caer al error handler
