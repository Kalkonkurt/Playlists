const express = require('express')
const router = express.Router()

const playlistsController = require('../controllers/playlists.controller')

router.post('/', playlistsController.createPlaylistsController)
router.get('/', playlistsController.getPlaylistsController)
router.get('/:id', playlistsController.getPlaylistsByIdController)

module.exports = router
