import React from 'react';
import { Link } from "react-router-dom";
import './remote.scss';

function Remote() {
  return (
    <div className="remote-container">
      <section className="remote-links">
        <Link
          to="/playing"
          className="btn btn-lg btn-outline-secondary"
        >
          正在播放 <span className="badge">4</span>
        </Link>
        <Link
          to="/remote/search"
          className="btn btn-lg btn-outline-secondary"
        >
          点歌
        </Link>
      </section>

      <section className="remote-actions">
        <button className="btn btn-lg btn-outline-secondary">
          切歌
        </button>
      </section>
    </div>
  );
}

export default Remote;
