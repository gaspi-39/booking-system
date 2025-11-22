export function logRequestLatency(req, res, next) {
	const start = process.hrtime()

	res.on("finish", () => {
		const duration = process.hrtime(start)

		const durationInMs = duration[0] * 1000 + duration[1] / 1000000

		const method = req.method
		const url = req.originalUrl
		const ip = req.ip || req.connection.remoteAddress

		const statusCode = res.statusCode

		console.log(
			`[API LOG] ${ip} - ${method} ${url} - Status: ${statusCode} - Latency: ${durationInMs.toFixed(
				3
			)}ms`
		)
	})

	next()
}
