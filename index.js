const express = require('express')
const app = express()
require('dotenv').config()

const port = process.env.PORT

const playlistsRoutes = require('./routes/playlists.routes')

app.use(express.json())

app.use('/api/playlists', playlistsRoutes)

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`)
})
