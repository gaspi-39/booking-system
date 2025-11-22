import pool from "../db/pool.js"
const ReservasService = {
	async findAll() {
		const sql = "SELECT * FROM reservas;"
		const [rows] = await pool.execute(sql)
		return rows || null
	},
	async findById(id) {
		const sql = "SELECT * FROM reservas WHERE id = ?"
		const [rows] = await pool.execute(sql, [id])
		return rows[0] || null
	},
	async create(reserva) {
		const sql = `INSERT INTO reservas (nombre, dni, fechaingreso, diasEstadia)
		VALUES (?, ?, ?, ?);
`
		const [result] = await pool.execute(sql, [
			reserva.nombre,
			reserva.dni,
			reserva.fechaIngreso,
			reserva.diasEstadia,
		])
		return result
	},
	async delete(id) {
		const sql = `DELETE FROM reservas
		WHERE id = ?;`
		const [result] = await pool.execute(sql, [id])
		return result
	},
	async update(id, reserva) {
		const sql = `
    	UPDATE reservas
    	SET nombre = ?, dni = ?, fechaIngreso = ?, diasEstadia = ?
    	WHERE id = ?`
		const [result] = await pool.execute(sql, [
			reserva.nombre,
			reserva.dni,
			reserva.fechaIngreso,
			reserva.diasEstadia,
			id,
		])
		return result
	},
}

export default ReservasService
