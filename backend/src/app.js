import express from "express"
import reservasRouter from "./routes/reservas.routes.js"

const app = express()
app.use(express.json())

app.use("/reservas", reservasRouter)

app.use((req, res) => {
	res.status(404).json({ message: "Ruta no encontrada" })
})

export default app
