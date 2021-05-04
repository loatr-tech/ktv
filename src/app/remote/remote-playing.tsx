import React, { useContext } from 'react';
import firebase from '../utils/firebase';
import { Link } from 'react-router-dom';
import { RoomContext } from '../_context/room.context';
import './remote-playing.scss';

function RemotePlaying() {
  const { songs } = useContext(RoomContext);

  const onMoveToTheTop = (song: any) => {
    firebase
      .firestore()
      .collection('rooms')
      .doc('kcuRCauZPqfaoLCLcjDP')
      .collection('songs')
      .doc(song.id)
      .update({ position: songs[1].position - 1 });
  }

  return (
    <>
      <header className="remote-playing-header">
        <Link to="/remote" className="btn btn-light">
          返回
        </Link>
        <span>播放列表</span>
      </header>
      <table className="table remote-playing-table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">已选歌曲</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song: any, index: number) => {
            const [{ text: videoTitle }] = song.title.runs;
            let statusText = null;
            if (index === 0) {
              statusText = '正在播放';
            } else if (index === 1) {
              statusText = '即将播放';
            }
            return (
              <tr className={index === 0 ? 'table-primary' : ''} key={index}>
                <td>{index + 1}</td>
                <td>{videoTitle}</td>
                <td>
                  {statusText ? (
                    <span>{statusText}</span>
                  ) : (
                    <button
                      className="btn btn-outline-secondary"
                      onClick={() => onMoveToTheTop(song)}
                    >
                      置顶
                    </button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default RemotePlaying;
