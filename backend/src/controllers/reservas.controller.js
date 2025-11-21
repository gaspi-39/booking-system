import ReservasService from "../services/reservas.service.js"
import { HttpError } from "../middlewares/errorHandler.js"
const ReservasController = {
	async getReservas(req, res) {
		const reservas = await ReservasService.findAll()
		res.json(reservas)
	},
	async getReservasById(req, res) {
		const { id } = Number(req.params)
		if (!id || id < 0) {
			throw new HttpError(400, "ID requerido")
		}
		const reservas = await ReservasService.findById(id)
		res.json(reservas)
	},
	async crearReserva() {},
}
export default ReservasController
