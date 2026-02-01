const connectionMySQL = require('../connection')

// FIND ALL TRACKS
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

// FIND TRACKS BY ID
const getTracksById = async (id) => {
    return new Promise((resolve, reject) => {
        let sql = 'SELECT * FROM tracks WHERE id=?'
        connectionMySQL.query(sql, [id], (err, rows) => {
            if (err) reject(err)
            else resolve(rows)
        })
    })
}

// CREATE A NEW TRACK
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

// DELETE A TRACK BY ID
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

// UPDATE A TRACK
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

module.exports = {
    getTracks,
    getTracksById,
    createTracks,
    deleteTracksById,
    updateTracksById
}
