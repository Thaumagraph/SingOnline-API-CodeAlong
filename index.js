import express from 'express'
const app = express()
const port = 3000

app.listen(port, () => {
	console.log(
		`webserver is running now on http://localhost:${port}`);
	})