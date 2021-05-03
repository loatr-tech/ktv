import React, { useCallback, useState } from 'react';
import './remote.scss';
import axios from 'axios';
import { MOCK_SEARCH_RESULT } from './mock-data';
import RemoteSong from './remote-song';

function Remote() {
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

  return (
    <div className="container">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search song"
          value={query}
          onChange={(event: any) => setQuery(event.target.value)}
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={onSearch}
        >Search</button>
      </div>

      <section>
        {
          searchResults.map(video => {
            const { thumbnails } = video.thumbnail;
            return <RemoteSong video={video}/>;
          })
        }
      </section>
    </div>
  );
}

export default Remote;
