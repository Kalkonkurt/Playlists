const express = require('express')
const app = express()
require('dotenv').config()

const port = process.env.PORT

app.use(express.json())

const playlistsRoutes = require('./routes/playlists.routes')
const tracksRoutes = require('./routes/tracks.routes')

app.use('/api/playlists', playlistsRoutes)
app.use('/api/tracks', tracksRoutes)

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`)
})
