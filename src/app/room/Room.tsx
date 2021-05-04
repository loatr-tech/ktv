import React, { useEffect, useState } from 'react';
import firebase from '../utils/firebase';
import './Room.scss';
declare var window: any;

function Room() {
  const [ytPlayer, setYtPlayer] = useState<any>();
  const [activeSongs, setActiveSongs] = useState<any[]>([]);

  const playVideo = () => {
    ytPlayer.playVideo();
  }

  const nextSong = () => {
    if (activeSongs.length) {
      console.log(activeSongs[0].videoId);
      firebase
        .firestore()
        .collection('rooms')
        .doc('kcuRCauZPqfaoLCLcjDP')
        .collection('songs')
        .doc(activeSongs[0].id)
        .delete()
        .then(() => {
          console.log('deleted!');
        })
    }
  }

  const onPlayerReady = (e: any) => {
    setYtPlayer(e.target);
    e.target.playVideo();
  }

  const onPlayerStateChange = (e: any) => {
    console.log('onPlayerStateChange', e);
  };

  useEffect(() => {
    // Load Youtube iframe API
    const tag = document.createElement('script');
    tag.id = 'youtube-iframe-api';
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    // @ts-ignore: Object is possibly 'null'.
    firstScriptTag!.parentNode.insertBefore(tag, firstScriptTag);

    window['onYouTubeIframeAPIReady'] = (e: any) => {
      new window['YT'].Player('ktv-youtube-iframe', {
        videoId: 'BHACKCNDMW8',
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange,
        },
      });
    };

    const subsub = firebase
      .firestore()
      .collection('rooms')
      .doc('kcuRCauZPqfaoLCLcjDP')
      .collection('songs')
      .onSnapshot(snapshot => {
        const currentSongs = snapshot.docs.map((video: any) => {
          return {
            id: video.id,
            ...video.data(),
          };
        });
        setActiveSongs(currentSongs);
      });
    return () => subsub();
  }, [])

  useEffect(() => {
    if (ytPlayer && activeSongs.length) {
      ytPlayer.loadVideoById(activeSongs[0].videoId);
    }
  }, [activeSongs, ytPlayer]);

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
