import pool from "../db/pool.js"

export async function findAll() {
	try {
		const sql = "SELECT * FROM reservas;"
		const [rows] = await pool.execute(sql)
		return rows
	} catch (err) {
		console.error("Error al buscar reservas:", err)
		throw new Error("No se pudieron obtener las reservas")
	}
}
