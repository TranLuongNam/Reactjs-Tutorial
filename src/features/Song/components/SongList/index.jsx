import React from 'react'
import Song from '../Song'
import './style.scss'

function SongList({ songList }) {
  return (
    <ul className="song-list">
      {songList.map((song) => (
        <li key={song.id}>
          <Song song={song} />
        </li>
      ))}
    </ul>
  )
}

SongList.propTypes = {}

export default SongList
