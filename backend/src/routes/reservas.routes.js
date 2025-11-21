import { Router } from "express"
import ReservasController from "../controllers/reservas.controller.js"

const router = Router()

router.get("/", ReservasController.getReservas)
router.get("/:id", ReservasController.getReservasById)

export default router
