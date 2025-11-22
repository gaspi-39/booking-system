import express from "express"
import cors from "cors"
import reservasRouter from "./routes/reservas.routes.js"
import { errorHandler } from "./middlewares/errorHandler.js"
import { logRequestLatency } from "./middlewares/logLatency.js"

const app = express()
app.use(logRequestLatency)
app.use(express.json())
app.use(cors())

app.use("/reservas", reservasRouter)

app.use(errorHandler)

export default app
