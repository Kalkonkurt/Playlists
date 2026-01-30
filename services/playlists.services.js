const connectionMySQL = require('../connection')

const getPlaylists = async () => {
    return new Promise((resolve, reject) => {
        let sql = 'SELECT * FROM playlists'
        connectionMySQL.query(sql, (err, rows) => {
            if (err) reject(err)
            else resolve(rows)
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

module.exports = {
    getPlaylists,
    getPlaylistsById
}
