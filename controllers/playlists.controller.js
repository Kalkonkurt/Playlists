const {
    getPlaylists,
    getPlaylistsById,
    createPlaylists
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

const createPlaylistsController = async (req, res) => {
    try {
        const newPlaylist = await createPlaylists(req.body)

        if (!newPlaylist) {
            return res.status(400).json({ message: 'Playlist not created' })
        }

        res.status(201).json(newPlaylist)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    getPlaylistsController,
    getPlaylistsByIdController,
    createPlaylistsController
}
