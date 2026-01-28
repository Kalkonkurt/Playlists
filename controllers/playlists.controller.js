const { getPlaylists } = require('../services/playlists.services')

const getPlaylistsController = async (req, res) => {
    const playlists = await getPlaylists()
    res.json(playlists)
}

// const getPlaylistsByIdController = async (rq, res) => {
//     const playlistId = parseInt(req.params.id, 10)
//     const playlists = {}
// }

module.exports = {
    getPlaylistsController
    // getPlaylistsByIdController
}
