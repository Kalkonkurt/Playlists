const express = require('express')
const router = express.Router()

// const {
//     getPlaylistsController
// } = require('../controllers/playlists.controller')

const playlistsController = require('../controllers/playlists.controller')

router.get('/', playlistsController.getPlaylistsController)
router.get('/:id', playlistsController.getPlaylistsByIdController)

module.exports = router
