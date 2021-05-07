import React, { useContext } from 'react';
import { RoomContext } from '../_context/room.context';
import './room-banner.scss';

function RoomBanner() {
  const { songs } = useContext(RoomContext);

  return (
    <div className="room-banner-container">
      <div className="room-banner">
        {songs.length ? (
          <>
            <span>
              <b>正在播放:</b> {songs[0].title.runs[0].text}
            </span>
            <span>
              <b>下一首:</b> {songs.length > 1 ? songs[1].title.runs[0].text : '没有了，快点歌'}
            </span>
          </>
        ) : (
          <span>没有歌曲啦，快点点歌</span>
        )}
      </div>
    </div>
  );
}

export default RoomBanner;
