const express = require('express')
const router = express.Router()

const playlistsController = require('../controllers/playlists.controller')

router.post('/', playlistsController.createPlaylistsController)
router.get('/', playlistsController.getPlaylistsController)
router.get(
    '/public-playlists',
    playlistsController.countPublicPlaylistsController
)
router.get('/:name', playlistsController.getPlaylistTracksController)

// Dynamic routes last
router.put('/:playlist_id', playlistsController.updatePlaylistsByIdController)
router.delete('/:id', playlistsController.deletePlaylistByIdController)
router.get('/:id', playlistsController.getPlaylistsByIdController)
module.exports = router
