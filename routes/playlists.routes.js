const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    const playlists = [
        {
            id: 1,
            name: 'Late Night Coding',
            description:
                'Chill beats and lo-fi tracks for focused coding sessions',
            genre: 'Lo-Fi',
            created_at: '2025-01-05 22:15:00'
        }
    ]
    res.json(playlists)
})
module.exports = router
