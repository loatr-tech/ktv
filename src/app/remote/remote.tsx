import React, { useCallback, useState } from 'react';
import { Route, Link } from "react-router-dom";
import './remote.scss';
import axios from 'axios';
import { MOCK_SEARCH_RESULT } from './mock-data';

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
