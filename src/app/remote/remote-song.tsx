import React, { useContext, useState } from 'react';
import { RoomContext } from '../_context/room.context';
import './remote-song.scss';

function _addSongInFirebase(addSong: Function, songs: any[], video: any, onTop = false) {
  return new Promise((resolve) => {
    let position = 1000;
    if (songs.length > 0) {
      if (onTop && songs.length > 1) {
        position = songs[1].position - 1;
      } else {
        position = songs[songs.length - 1].position + 1000;
      }
    }
    addSong({ ...video, position }).then(() => {
      resolve(true);
    });
  });
}

function RemoteSong(props: any) {
  const { songs, addSong } = useContext(RoomContext);
  const [isAdded, setIsAdded] = useState(false);
  const { video } = props;
  const { thumbnails } = video.thumbnail;
  const [{ text: videoTitle }] = video.title.runs;

  function onAddSong() {
    _addSongInFirebase(addSong, songs, video).then(() => {
      setIsAdded(true);
    });
  }

  function onAddSongOnTop() {
    _addSongInFirebase(addSong, songs, video, true).then(() => {
      setIsAdded(true);
    });
  }

  return (
    <div className="remote-song">
      <section className="remote-song-header">{videoTitle}</section>
      <section className="remote-song-body">
        <div className="remote-song-image">
          <img src={thumbnails[thumbnails.length - 1].url} alt={videoTitle} />
        </div>
        <div className="remote-song-actions">
          {isAdded ? (
            <div className="remote-song-already-added text-success">
              <i className="bi bi-check2-circle"></i>
            </div>
          ) : (
            <>
              <button className="btn btn-secondary" onClick={() => onAddSong()}>
                添加
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => onAddSongOnTop()}
              >
                置顶
              </button>
            </>
          )}
        </div>
      </section>
    </div>
  );
}

export default RemoteSong;
