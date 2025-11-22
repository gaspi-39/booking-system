import { Router } from "express"
import ReservasController from "../controllers/reservas.controller.js"
import { validate, validateId } from "../middlewares/validate.schema.js"
import { idSchema, reservaSchema } from "../schemas/reserva.schema.js"

const router = Router()

router.get("/", ReservasController.getReservas)
router.get("/:id", validateId(idSchema), ReservasController.getReservasById)
router.post("/", validate(reservaSchema), ReservasController.createReserva)
router.delete("/:id", validateId(idSchema), ReservasController.deleteReserva)
router.put(
	"/:id",
	validateId(idSchema),
	validate(reservaSchema),
	ReservasController.updateReserva
)
export default router
