const express = require('express')
const router = express.Router()

const tracksController = require('../controllers/tracks.controller')

router.post('/', tracksController.createTracksController)
router.get('/', tracksController.getTracksController)

// Dynamic routes
router.put('/:id', tracksController.updateTracksByIdController)
router.delete('/:id', tracksController.deleteTracksByIdController)
router.get('/:id', tracksController.getTracksByIdController)
module.exports = router
