const {
    getPlaylists,
    getPlaylistsById
} = require('../services/playlists.services')

const getPlaylistsController = async (req, res) => {
    try {
        const playlists = await getPlaylists()
        res.json(playlists)
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Failed to fetch playlists' })
    }
}

const getPlaylistsByIdController = async (req, res) => {
    const { id } = req.params

    const playlists = await getPlaylistsById(id)
    if (playlists) {
        res.json(playlists)
    } else {
        res.status(404).json({ message: 'playlists not found' })
    }
}

module.exports = {
    getPlaylistsController,
    getPlaylistsByIdController
}
