const express = require('express')
const router = express.Router()

const {
    getPlaylistsController
} = require('../controllers/playlists.controller')

router.get('/', getPlaylistsController)

module.exports = router
