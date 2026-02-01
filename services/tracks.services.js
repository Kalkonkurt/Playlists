const connectionMySQL = require('../connection')
// FIND ALL
const getTracks = async () => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM tracks'
        connectionMySQL.query(sql, (err, rows) => {
            if (err) {
                reject(err)
            } else {
                resolve(rows)
            }
        })
    })
}
// Find by ID
const getTracksById = async (id) => {
    return new Promise((resolve, reject) => {
        let sql = 'SELECT * FROM tracks WHERE id=?'
        connectionMySQL.query(sql, [id], (err, rows) => {
            if (err) reject(err)
            else resolve(rows)
        })
    })
}

// CREATE
const createTracks = async (tracksData) => {
    return new Promise((resolve, reject) => {
        let sql =
            'INSERT INTO tracks (playlist_id, title, artist, duration_seconds) VALUES (?,?,?,?)'
        connectionMySQL.query(
            sql,
            [
                tracksData.playlist_id,
                tracksData.title,
                tracksData.artist,
                tracksData.duration_seconds
            ],
            (err, result) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(result.insertId)
                }
            }
        )
    })
}
// DELETE
const deleteTracksById = async (id) => {
    return new Promise((resolve, reject) => {
        let sql = 'DELETE FROM tracks WHERE id=?'
        connectionMySQL.query(sql, [id], (err, rows) => {
            if (err) {
                reject(err)
            } else {
                resolve(rows)
            }
        })
    })
}

// UPDATE
const updateTracksById = async (id, title, artist, duration_seconds) => {
    return new Promise((resolve, reject) => {
        let sql =
            'UPDATE tracks SET id=?, title=?, artist=?, duration_seconds=?'
        connectionMySQL.query(
            sql,
            [id, title, artist, duration_seconds],
            (err, result) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(result)
                }
            }
        )
    })
}

// JOIN show playlists name with tracks title

module.exports = {
    getTracks,
    getTracksById,
    createTracks,
    deleteTracksById,
    updateTracksById
}
