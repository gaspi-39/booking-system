import { Router } from "express"
import ReservasController from "../controllers/reservas.controller.js"
import { validate } from "../middlewares/validate.schema.js"
import { reservaSchema } from "../schemas/reserva.schema.js"

const router = Router()

router.get("/", ReservasController.getReservas)
router.get("/:id", ReservasController.getReservasById)
router.post("/", validate(reservaSchema), ReservasController.createReserva)
router.delete("/:id", ReservasController.deleteReserva)
router.put("/:id", validate(reservaSchema), ReservasController.updateReserva)
export default router
