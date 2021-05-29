import React from 'react'
import './style.scss'
function Song({ song }) {
  return (
    <div className="song">
      <div className="song__image">
        <img src={song.thumbnaiUrl} alt="" />
      </div>
      <p className="song__name"> {song.name}</p>
    </div>
  )
}

Song.propTypes = {}

export default Song
