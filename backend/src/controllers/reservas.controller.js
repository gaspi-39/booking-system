import ReservasService from "../services/reservas.service.js"
import { HttpError } from "../middlewares/errorHandler.js"
const ReservasController = {
	async getReservas(req, res) {
		const reservas = await ReservasService.findAll()
		if (!reservas) {
			throw new HttpError(404, "Sin reservas")
		}
		res.json(reservas)
	},
	async getReservasById(req, res) {
		const { id } = req.params
		const reserva = await ReservasService.findById(id)
		if (!reserva) {
			throw new HttpError(404, "Reserva no encontrada")
		}
		res.json(reserva)
	},
	async createReserva(req, res) {
		const result = await ReservasService.create(req.body)
		if (result.affectedRows != 1) {
			console.log(result)

			throw new HttpError(500, "Algo salio mal")
		}
		res.json({ ok: true })
	},
	async deleteReserva(req, res) {
		const { id } = req.params
		const reserva = await ReservasService.findById(id)
		if (!reserva) {
			throw new HttpError(404, "Reserva no encontrada")
		}

		const result = await ReservasService.delete(Number(id))
		if (result.affectedRows != 1) {
			console.log(result)
			throw new HttpError(500, "Algo salio mal")
		}
		res.json({ ok: true })
	},
	async updateReserva(req, res) {
		const { id } = req.params

		const reserva = await ReservasService.findById(id)
		if (!reserva) {
			throw new HttpError(404, "Reserva no encontrada")
		}
		const result = await ReservasService.update(Number(id), req.body)
		if (result.affectedRows != 1) {
			console.log(result)
			throw new HttpError(500, "Algo salio mal")
		}
		res.json({ ok: true })
	},
}
export default ReservasController
