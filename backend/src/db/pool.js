import mysql from "mysql2/promise"
import path from "path"
import dotenv from "dotenv"
import { fileURLToPath } from "url"
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_USER, DB_PORT } from "./config.js"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config({ path: path.join(__dirname, ".env.db") })

const pool = mysql.createPool({
	host: DB_HOST,
	port: DB_PORT,
	user: DB_USER,
	password: DB_PASSWORD,
	database: DB_NAME,
})
export default pool
