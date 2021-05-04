import React from 'react';
import firebase from '../utils/firebase';
import './remote-song.scss';

function RemoteSong(props: any) {
  const { video } = props;
  const { thumbnails } = video.thumbnail;
  const [{ text: videoTitle }] = video.title.runs;

  function onAddSong() {
    firebase
      .firestore()
      .collection('rooms')
      .doc('kcuRCauZPqfaoLCLcjDP')
      .collection('songs')
      .add(video);
  }

  return (
    <div className="remote-song">
      <section className="remote-song-header">{videoTitle}</section>
      <section className="remote-song-body">
        <img
          className="remote-song-image"
          src={thumbnails[thumbnails.length - 1].url}
          alt={videoTitle}
        />
        <div className="remote-song-actions">
          <button
            className="btn btn-secondary"
            onClick={() => onAddSong()}>
            添加
          </button>
          <button className="btn btn-secondary">置顶</button>
        </div>
      </section>
    </div>
  );
}

export default RemoteSong;
