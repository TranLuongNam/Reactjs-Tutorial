import React from 'react'
import SongList from './components/SongList'

function SongFeature(props) {
  const songList = [
    {
      id: 1,
      name: 'Một góc Indie',
      thumbnaiUrl:
        'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/a/c/0/9/ac0920ab10c5f941e1c2e34532ff247c.jpg',
    },
    {
      id: 2,
      name: 'V-Indie Lofi',
      thumbnaiUrl:
        'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/3/7/0/a/370ab67170fab4c7c1d087dd08cec728.jpg',
    },
    {
      id: 3,
      name: 'Indie Rock & Road Trip',
      thumbnaiUrl:
        'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/6/9/4/a/694a49a19c7616a09d65640c2613b773.jpg',
    },
  ]
  return (
    <div style={{ marginLeft: 300 }}>
      <h2>Chill Cùng R&B</h2>
      <SongList songList={songList} />
    </div>
  )
}

SongFeature.propTypes = {}

export default SongFeature
