const {
    getTracks,
    getTracksById,
    createTracks,
    deleteTracksById,
    updateTracksById
} = require('../services/tracks.services')

// GET ALL TRACKS
const getTracksController = async (req, res) => {
    try {
        const tracks = await getTracks()
        res.json(tracks)
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Failed to fetch tracks' })
    }
}

// GET TRACKS BY ID
const getTracksByIdController = async (req, res) => {
    const { id } = req.params

    const tracks = await getTracksById(id)
    if (tracks) {
        res.json(tracks)
    } else {
        res.status(404).json({ message: 'Tracks not found' })
    }
}

// CREATE A NEW TRACK
const createTracksController = async (req, res) => {
    try {
        const newTrack = await createTracks(req.body)

        if (!newTrack) {
            return res.status(400).json({ message: 'Tracks not created' })
        }

        res.status(201).json(newTrack)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

//DELETE TRACKS BY ID
const deleteTracksByIdController = async (req, res) => {
    const { id } = req.params
    const deletedTrack = await deleteTracksById(id)
    if (deletedTrack) {
        res.status(200).json({ message: 'Track is now deleted' })
    } else {
        res.status(404).json({ message: 'Track not found' })
    }
}

//UPDATE TRACKS
const updateTracksByIdController = async (req, res) => {
    const { id } = req.params
    const { title } = req.body
    const { artist } = req.body
    const { duration_seconds } = req.body
    try {
        const updatedTracks = await updateTracksById(
            id,
            title,
            artist,
            duration_seconds
        )

        if (!updatedTracks) {
            return res.status(400).json({ message: 'Track is unchanged' })
        }

        res.status(201).json(updatedTracks)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    getTracksController,
    getTracksByIdController,
    createTracksController,
    deleteTracksByIdController,
    updateTracksByIdController
}
