const { getPlaylists } = require('../services/playlists.services')

const getPlaylistsController = async (req, res) => {
    const playlists = await getPlaylists()
    res.json(playlists)
}

module.exports = {
    getPlaylistsController
}

module.exports = { getPlaylistsController }
