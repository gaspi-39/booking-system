import z from "zod"

export const reservaSchema = z.object({
	nombre: z.string().min(1),
	dni: z.string().min(7).max(10),
	fechaIngreso: z.string().refine((value) => {
		const fecha = new Date(value)
		const hoy = new Date()

		fecha.setHours(0, 0, 0, 0)
		hoy.setHours(0, 0, 0, 0)

		return fecha > hoy
	}),
	diasEstadia: z.number().int().min(1),
})
export const idSchema = z.number().int().min(1)
