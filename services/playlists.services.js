const connectionMySQL = require('../connection')
// FIND ALL
const getPlaylists = async () => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM playlists'
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
const getPlaylistsById = async (playlist_id) => {
    return new Promise((resolve, reject) => {
        let sql = 'SELECT * FROM playlists WHERE playlist_id=?'
        connectionMySQL.query(sql, [playlist_id], (err, rows) => {
            if (err) reject(err)
            else resolve(rows)
        })
    })
}

// CREATE
const createPlaylists = async (playlistData) => {
    return new Promise((resolve, reject) => {
        let sql =
            'INSERT INTO playlists (name, description, genre, created_at, is_public) VALUES (?,?,?,?,?)'
        connectionMySQL.query(
            sql,
            [
                playlistData.name,
                playlistData.description,
                playlistData.genre,
                playlistData.created_at,
                playlistData.is_public
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
const deletePlaylistsById = async (playlist_id) => {
    return new Promise((resolve, reject) => {
        let sql = 'DELETE FROM playlists WHERE playlist_id=?'
        connectionMySQL.query(sql, [playlist_id], (err, rows) => {
            if (err) {
                reject(err)
            } else {
                resolve(rows)
            }
        })
    })
}

// UPDATE
const updatePlaylistsById = async (
    playlist_id,
    name,
    description,
    genre,
    created_at,
    is_public
) => {
    return new Promise((resolve, reject) => {
        let sql =
            'UPDATE playlists SET name=?, description=?, genre=?, created_at=?, is_public=? WHERE playlist_id=?'
        connectionMySQL.query(
            sql,
            [name, description, genre, created_at, is_public, playlist_id],
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

// STATISTIC
const countPublicPlaylists = async () => {
    return new Promise((resolve, reject) => {
        const sql =
            'SELECT COUNT(*) AS publicPlaylists FROM playlists WHERE is_public = TRUE'
        connectionMySQL.query(sql, (err, rows) => {
            if (err) {
                reject(err)
            } else {
                resolve(rows[0])
            }
        })
    })
}

module.exports = {
    getPlaylists,
    getPlaylistsById,
    createPlaylists,
    deletePlaylistsById,
    updatePlaylistsById,
    countPublicPlaylists
}
