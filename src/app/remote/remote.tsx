import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import { RoomContext } from '../_context/room.context';
import './remote.scss';

function Remote() {
  const { songs, removeFirstSong } = useContext(RoomContext);
  const [btnDebounce, setBtnDebounce] = useState<boolean>(false);

  const skipSong = async () => {
    setBtnDebounce(true);
    await removeFirstSong();
    setTimeout(() => {
      setBtnDebounce(false);
    }, 300);
  }

  return (
    <div className="remote-container">
      <section className="remote-links">
        <Link to="/remote/playing" className="btn btn-lg btn-primary">
          正在播放 <span className="badge">{songs.length}</span>
        </Link>
        <Link to="/remote/search" className="btn btn-lg btn-warning">
          <i className="bi bi-music-note"></i> 点歌
        </Link>
      </section>

      <section className="remote-actions">
        <button
          className={`btn btn-lg btn-${
            songs.length < 2 ? 'outline-' : ''
          }secondary`}
          disabled={songs.length < 2 || btnDebounce}
          onClick={() => skipSong()}
        >
          <i className="bi bi-skip-forward"></i> 切歌
        </button>
        <button className="btn btn-lg btn-secondary" disabled={btnDebounce}>
          <i className="bi bi-play"></i>
        </button>
        <button className="btn btn-lg btn-secondary" disabled={btnDebounce}>
          <i className="bi bi-pause"></i>
        </button>
      </section>
    </div>
  );
}

export default Remote;
