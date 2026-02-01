const {
    getPlaylists,
    getPlaylistsById,
    createPlaylists,
    deletePlaylistsById,
    updatePlaylistsById,
    countPublicPlaylists
} = require('../services/playlists.services')
// GET ALL
const getPlaylistsController = async (req, res) => {
    try {
        const playlists = await getPlaylists()
        res.json(playlists)
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Failed to fetch playlists' })
    }
}
// GET BY ID

const getPlaylistsByIdController = async (req, res) => {
    const { id } = req.params

    const playlists = await getPlaylistsById(id)
    if (playlists) {
        res.json(playlists)
    } else {
        res.status(404).json({ message: 'playlists not found' })
    }
}
// CREATE
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
//DELETE
const deletePlaylistByIdController = async (req, res) => {
    const { id } = req.params
    const deletedPlaylist = await deletePlaylistsById(id)
    if (deletedPlaylist) {
        res.status(200).json({ message: 'Playlist is now deleted' })
    } else {
        res.status(404).json({ message: 'Playlist not found' })
    }
}
//UPDATE
const updatePlaylistsByIdController = async (req, res) => {
    const { playlist_id } = req.params
    const { name } = req.body
    const { description } = req.body
    const { genre } = req.body
    const { created_at } = req.body
    const { is_public } = req.body
    try {
        const updatedPlaylist = await updatePlaylistsById(
            playlist_id,
            name,
            description,
            genre,
            created_at,
            is_public
        )

        if (!updatedPlaylist) {
            return res.status(400).json({ message: 'Playlist unchanged' })
        }

        res.status(201).json(updatedPlaylist)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
// STATISTIC

const countPublicPlaylistsController = async (req, res) => {
    try {
        const stats = await countPublicPlaylists()
        res.json(stats)
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Failed to fetch playlists' })
    }
}

module.exports = {
    getPlaylistsController,
    getPlaylistsByIdController,
    createPlaylistsController,
    deletePlaylistByIdController,
    updatePlaylistsByIdController,
    countPublicPlaylistsController
}
