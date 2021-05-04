import React, { useCallback, useState } from 'react';
import { Route, Link } from "react-router-dom";
import './remote-search.scss';
import axios from 'axios';
import { MOCK_SEARCH_RESULT } from './mock-data';
import RemoteSong from './remote-song';

function RemoteSearch() {
  const [query, setQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<any[]>(MOCK_SEARCH_RESULT);
  const onSearch = useCallback(async () => {
    if (query) {
      const { data } = await axios.get(`http://localhost:8080/ktv/search`, {
        params: { query }
      });
      setSearchResults(data);
    }
  }, [query]);

  return <>
    <header className="remote-search-header">
      <Link to="/remote" className="btn btn-light">返回</Link>
      <Link to="/playing" className="btn btn-primary">
        正在播放 <span className="badge">4</span>
      </Link>
    </header>
    <div className="container">
      <div className="input-group remote-search-box">
        <input
          type="text"
          className="form-control"
          placeholder="Search song"
          value={query}
          onChange={(event: any) => setQuery(event.target.value)}
        />
        <button
          className="btn btn-outline-success"
          type="button"
          onClick={onSearch}
        >Search</button>
      </div>

      <section>
        {searchResults.map(video => <RemoteSong video={video}/>)}
      </section>
    </div>
  </>
}

export default RemoteSearch;
