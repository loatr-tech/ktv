import React from 'react';
import './remote-song.scss';

function RemoteSong(props: any) {
  const { video } = props;
  const { thumbnails } = video.thumbnail;
  const [{ text: videoTitle }] = video.title.runs;
  return (
    <div className="remote-song">
      <section>
        {videoTitle}
      </section>
      <section className="remote-song-body">
        <img
          className="remote-song-image"
          src={thumbnails[thumbnails.length - 1].url}
        />
        <div className="remote-song-actions">
          <button className="btn btn-secondary">添加</button>
          <button className="btn btn-secondary">置顶</button>
        </div>
      </section>
    </div>
  );
}

export default RemoteSong;
