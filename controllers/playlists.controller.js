const { getPlaylists } = require('../services/playlists.services')

const getPlaylistsController = async (req, res) => {
    try {
        const playlists = await getPlaylists()
        res.json(playlists)
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Failed to fetch playlists' })
    }
}

module.exports = {
    getPlaylistsController
}
