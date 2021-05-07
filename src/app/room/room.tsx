import React, { useContext, useEffect, useState } from 'react';
import { RoomContext } from '../_context/room.context';
import './room.scss';
declare var window: any;

let listenToPlayDebounce: any;

function Room() {
  const {
    songs,
    updateSongProps,
    removeFirstSong,
    onRoomChange,
  } = useContext(RoomContext);
  const [ytPlayer, setYtPlayer] = useState<any>();
  const [currentSong, setCurrentSong] = useState<any>();
  const [songState, setSongState] = useState<number>(-1);
  const [remotePlay, setRemotePlay] = useState<boolean>();

  useEffect(() => {
    if (ytPlayer && [-1, 1, 2].includes(songState)) {
      onRoomChange((roomObject: any) => {
        const { play } = roomObject.data();
        clearTimeout(listenToPlayDebounce);
        listenToPlayDebounce = setTimeout(() => {
          if (remotePlay !== play) {
            setRemotePlay(play);
            console.log('play', play, 'songState', songState);
            if ([-1, 2].includes(songState) && play) {
              setTimeout(() => {
                console.log('Listen and PLAY!');
                ytPlayer.playVideo();
              }, 100);
            } else if (songState === 1 && !play) {
              console.log('Listen and PAUSE!');
              ytPlayer.pauseVideo();
            }
          }
        }, 500);
      });
    }
  }, [onRoomChange, songState, ytPlayer, remotePlay]);

  useEffect(() => {
    // Go to next song if current song/video ended
    if (songState === 0 && ytPlayer) {
      if (songs.length > 1) {
        ytPlayer.loadVideoById(songs[1].videoId);
      } else {
        ytPlayer.loadVideoById('BHACKCNDMW8');
      }
      if (songs.length) {
        removeFirstSong();
      }
      setSongState(1);
    }
  }, [songState, songs, ytPlayer, removeFirstSong]);

  useEffect(() => {
    // Load Youtube iframe API
    const tag = document.createElement('script');
    tag.id = 'youtube-iframe-api';
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    // @ts-ignore: Object is possibly 'null'.
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window['onYouTubeIframeAPIReady'] = (e: any) => {
      new window['YT'].Player('ktv-youtube-iframe', {
        videoId: 'BHACKCNDMW8',
        playerVars: { autoplay: 1, controls: 0 },
        events: {
          onReady: (e: any) => {
            setYtPlayer(e.target);
          },
          onStateChange: ({ data }: any) => {
            setSongState(data);
          },
        },
      });
    };
  }, []);

  useEffect(() => {
    if (!!ytPlayer && songs.length) {
      const firstNewSong = songs[0];
      if (currentSong?.videoId !== firstNewSong.videoId) {
        ytPlayer.loadVideoById(firstNewSong.videoId);
        if (songs.length > 1) {
          updateSongProps(firstNewSong.id, {
            position: firstNewSong.position - 1000,
          });
        }
        setCurrentSong(firstNewSong);
      }
    }
  }, [ytPlayer, songs, currentSong, updateSongProps]);

  return (
    <div className="room-container">
      <section className="room-iframe-wrapper">
        <div className="room-iframe-container">
          <div
            id="ktv-youtube-iframe"
            className="room-iframe"
            tabIndex={-1}
          ></div>
        </div>
      </section>

      {ytPlayer ? (
        <section className="room-actions">
          <button
            className="btn btn-sm btn-secondary"
            onClick={() => setSongState(0)}
          >
            <i className="bi bi-skip-forward"></i>
          </button>
          <button
            className="btn btn-sm btn-secondary"
            onClick={() => ytPlayer.playVideo()}
          >
            <i className="bi bi-play"></i>
          </button>
          <button
            className="btn btn-sm btn-secondary"
            onClick={() => ytPlayer.pauseVideo()}
          >
            <i className="bi bi-pause"></i>
          </button>
        </section>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Room;
