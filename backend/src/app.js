import express from "express"
import cors from "cors"
import reservasRouter from "./routes/reservas.routes.js"
import { errorHandler } from "./middlewares/errorHandler.js"

const app = express()
app.use(express.json())

app.use("/reservas", reservasRouter)
app.use(cors())

app.use(errorHandler)

export default app
