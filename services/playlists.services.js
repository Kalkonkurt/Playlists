const connectionMYSQL = require('../connection')

const getPlaylists = async () => {
    return new Promise((resolve, reject) => {
        let sql = 'SELECT * FROM playlists'
        connectionMYSQL.query(sql, (err, rows) => {
            if (err) reject(err)
            else resolve(rows)
        })
    })
}

module.exports = {
    getPlaylists
}
