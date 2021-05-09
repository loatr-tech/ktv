import React, { useCallback, useContext, useState } from 'react';
import { Link } from "react-router-dom";
import './remote-search.scss';
import axios from 'axios';
import RemoteSong from './remote-song';
import { RoomContext } from '../_context/room.context';

function RemoteSearch() {
  const { songs, roomId } = useContext(RoomContext);
  const [query, setQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const onSearch = useCallback(async (e: any) => {
    e.preventDefault();
    if (query) {
      const { data } = await axios.get(
        `https://loatr-tech-api.herokuapp.com/ktv/search`,
        {
          params: { query },
        }
      );
      setSearchResults(data);
    }
  }, [query]);

  return (
    <>
      <header className="remote-search-header">
        <Link to={`/remote/${roomId}`} className="btn btn-light">
          返回
        </Link>
        <Link to={`/remote/${roomId}/playing`} className="btn btn-primary">
          正在播放 <span className="badge">{songs.length}</span>
        </Link>
      </header>
      <form className="container" onSubmit={onSearch}>
        <div className="input-group remote-search-box">
          <input
            type="text"
            className="form-control"
            placeholder="Search song"
            value={query}
            onChange={(event: any) => setQuery(event.target.value)}
          />
          <button
            className="btn btn-outline-secondary"
            id="remote-search-input"
            type="button"
            onClick={onSearch}
          >
            Search
          </button>
        </div>

        <section>
          {searchResults.map((video) => (
            <RemoteSong video={video} key={video.videoId} />
          ))}
        </section>
      </form>
    </>
  );
}

export default RemoteSearch;
