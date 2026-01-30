const connectionMySQL = require('../connection')

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

const getPlaylistsById = async (playlist_id) => {
    return new Promise((resolve, reject) => {
        let sql = 'SELECT * FROM playlists WHERE playlist_id=?'
        connectionMySQL.query(sql, [playlist_id], (err, rows) => {
            if (err) reject(err)
            else resolve(rows)
        })
    })
}

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

module.exports = {
    getPlaylists,
    getPlaylistsById,
    createPlaylists
}
