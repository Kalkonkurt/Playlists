--@block
CREATE TABLE playlists(
    playlist_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR (150) NOT NULL,
    description VARCHAR(255),
    genre VARCHAR(50) NOT NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    is_public BOOLEAN NOT NULL DEFAULT true
) --@block
INSERT INTO playlists (name, description, genre, created_at, is_public)
VALUES (
        'Late Night Coding',
        'Chill beats and lo-fi tracks for focused coding sessions',
        'Lo-Fi',
        '2025-01-05 22:15:00',
        true
    );
(
    'Gym Motivation',
    'High-energy tracks to push through tough workouts',
    'Electronic',
    '2025-01-07 18:30:00',
    true
),
(
    'Sunday Coffee',
    'Calm and cozy music for slow Sunday mornings',
    'Acoustic',
    '2025-01-10 09:45:00',
    false
),
(
    'Road Trip Vibes',
    'Songs for long drives and open roads',
    'Indie',
    '2025-01-15 14:20:00',
    true
),
(
    'Throwback Hits',
    'Classic hits from the 90s and early 2000s',
    'Pop',
    '2025-01-18 20:00:00',
    true
),
(
    'Deep Focus',
    'Minimal and instrumental tracks for maximum concentration',
    'Ambient',
    '2025-01-20 23:10:00',
    false
);
--@block
CREATE TABLE tracks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    playlist_id INT NOT NULL,
    title VARCHAR(100) NOT NULL,
    artist VARCHAR(100) NOT NULL,
    duration_seconds INT,
    FOREIGN KEY (playlist_id) REFERENCES playlists(playlist_id)
);
--@block
INSERT INTO tracks (playlist_id, title, artist, duration_seconds)
VALUES (1, 'Midnight Loop', 'Lo-Fi Collective', 182),
    (1, 'Neon Syntax', 'Codewave', 210),
    (1, 'Quiet Terminal', 'Soft Signals', 195),
    (2, 'Push Harder', 'Iron Pulse', 205),
    (2, 'No Limits', 'Volt Runner', 198),
    (2, 'Final Rep', 'Adrenaline Mode', 221),
    (3, 'Morning Light', 'Acoustic Bloom', 234),
    (3, 'Warm Mug', 'Sunday Strings', 216),
    (4, 'Open Highway', 'Indie Roam', 248),
    (4, 'Miles Ahead', 'The Wayfarers', 262);
--@block
SELECT playlists.playlist_id,
    playlists.name AS playlist_name,
    tracks.title,
    tracks.artist,
    tracks.duration_seconds
FROM playlists
    JOIN tracks ON playlists.playlist_id = tracks.playlist_id;
--@block
SELECT playlists.name,
    JSON_ARRAYAGG(tracks.title) AS tracks
FROM playlists
    JOIN tracks ON playlists.playlist_id = tracks.playlist_id
WHERE playlists.name = 'Gym Motivation'
GROUP BY playlists.playlist_id,
    playlists.name;
