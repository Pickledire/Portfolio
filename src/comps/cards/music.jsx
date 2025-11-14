import React from 'react'
import './music.css'

// Default playlist: Spotify's "lofi beats". Replace with your own playlist ID.
const DEFAULT_SPOTIFY_PLAYLIST_ID = '5JqfYwWJyi6JlcsoFVJHdp' // fallback; replace freely

const Music = ({ playlistId = DEFAULT_SPOTIFY_PLAYLIST_ID }) => {
    const src = `https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=0`
    return (
        <div className='music-container'>
            <div className='spotify-embed-wrapper'>
                <iframe
                    title="Spotify Playlist"
                    src={src}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    )
}

export default Music;