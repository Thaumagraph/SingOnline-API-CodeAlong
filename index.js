import express from 'express'
import dotenv from 'dotenv'
import { SongController } from './Controllers/song.controller.js'
const app = express()
const port = process.env.PORT
dotenv.config()

app.get('/', (req, res) => {
	res.send('Velkommen til min sangbog')
})

app.use(SongController)

app.listen(port, () => {
	console.log(`Webserver is running now on http://localhost:${port}`);
})