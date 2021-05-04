import React, { useContext, useEffect, useState } from 'react';
import firebase from '../utils/firebase';
import { RoomContext } from '../_context/room.context';
import './room.scss';
declare var window: any;

const removeFirstSong = (songList: any[]) => {
  if (songList.length) {
    firebase
      .firestore()
      .collection('rooms')
      .doc('kcuRCauZPqfaoLCLcjDP')
      .collection('songs')
      .doc(songList[0].id)
      .delete()
      .then(() => {
        console.log('song removed!');
      });
  }
}

function Room() {
  const { songs } = useContext(RoomContext);
  const [ytPlayer, setYtPlayer] = useState<any>();
  const [currentSong, setCurrentSong] = useState<any>();
  const [songState, setSongState] = useState<number>();

  const playVideo = () => {
    ytPlayer.playVideo();
  }

  const nextSong = () => {
    // set song to end
    setSongState(0);
  }

  useEffect(() => {
    // Go to next song if current song/video ended
    if (songState === 0 && ytPlayer) {
      if (songs.length > 1) {
        ytPlayer.loadVideoById(songs[1].videoId);
      } else {
        ytPlayer.loadVideoById('BHACKCNDMW8');
      }
      removeFirstSong(songs);
      setSongState(1);
    }
  }, [songState, songs, ytPlayer]);

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
        events: {
          onReady: (e: any) => {
            e.target.playVideo();
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
          firebase
            .firestore()
            .collection('rooms')
            .doc('kcuRCauZPqfaoLCLcjDP')
            .collection('songs')
            .doc(firstNewSong.id)
            .update({ position: firstNewSong.position - 1000 });
        }
        setCurrentSong(firstNewSong);
      }
    }
  }, [ytPlayer, songs, currentSong]);

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

      <section>
        <button onClick={() => playVideo()}>Play</button>
        <button onClick={() => nextSong()}>Skip</button>
      </section>
    </div>
  );
}

export default Room;
