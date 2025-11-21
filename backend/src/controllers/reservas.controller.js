import { findAll } from "../services/reservas.service.js"

export async function getReservas(req, res) {
	const reservas = await findAll()
	res.send(reservas)
}
