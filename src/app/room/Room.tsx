import React, { useEffect, useState } from 'react';
import firebase from '../utils/firebase';
import './Room.scss';
declare var window: any;

const removeFirstSong = (songs: any[]) => {
  if (songs.length) {
    firebase
      .firestore()
      .collection('rooms')
      .doc('kcuRCauZPqfaoLCLcjDP')
      .collection('songs')
      .doc(songs[0].id)
      .delete()
      .then(() => {
        console.log('song removed!');
      });
  }
}

function Room() {
  const [ytPlayer, setYtPlayer] = useState<any>();
  const [activeSongs, setActiveSongs] = useState<any[]>([]);
  const [currentSong, setCurrentSong] = useState<any>();
  const [songState, setSongState] = useState();
  const [firstSongStarted, setFirstSongStarted] = useState(false);

  const playVideo = () => {
    ytPlayer.playVideo();
  }

  const nextSong = () => {
    if (activeSongs.length) {
      if (activeSongs.length > 1) {
        ytPlayer.loadVideoById(activeSongs[1].videoId);
      } else {
        ytPlayer.loadVideoById('BHACKCNDMW8');
        setFirstSongStarted(false);
      }
      removeFirstSong(activeSongs);
    }
  }

  useEffect(() => {
    // Go to next song if current song/video ended
    if (songState === 0) {
      removeFirstSong(activeSongs);
    }
  }, [songState, activeSongs]);

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
    const unsubscribeFirebase = firebase
      .firestore()
      .collection('rooms')
      .doc('kcuRCauZPqfaoLCLcjDP')
      .collection('songs')
      .onSnapshot((snapshot) => {
        const newActiveSongs = snapshot.docs.map((video: any) => {
          return {
            id: video.id,
            ...video.data(),
          };
        });

        setActiveSongs(newActiveSongs);
      });

    return () => unsubscribeFirebase();
  }, []);

  useEffect(() => {
    if (!!ytPlayer && activeSongs.length) {
      const firstNewSong = activeSongs[0];
      if (currentSong?.videoId !== firstNewSong.videoId) {
        ytPlayer.loadVideoById(firstNewSong.videoId);
        setCurrentSong(firstNewSong);
        setFirstSongStarted(true);
      }
    }
  }, [ytPlayer, activeSongs, firstSongStarted, currentSong]);

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
