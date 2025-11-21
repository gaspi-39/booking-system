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
}

export default ReservasService
