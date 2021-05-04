import React, { useCallback, useEffect, useState } from 'react';
import './Room.scss';
declare var window: any;

function Room() {
  const [ytPlayer, setYtPlayer] = useState<any>();

  const playVideo = () => {
    ytPlayer.playVideo();
  }

  const nextSong = () => {
    ytPlayer.loadVideoById('rSgbYCdc4G0');
  }

  const onPlayerReady = (e: any) => {
    setYtPlayer(e.target);
  }

  const onPlayerStateChange = (e: any) => {
    console.log('onPlayerStateChange', e);
  };

  useEffect(() => {
    const tag = document.createElement('script');
    tag.id = 'youtube-iframe-api';
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    // @ts-ignore: Object is possibly 'null'.
    firstScriptTag!.parentNode.insertBefore(tag, firstScriptTag);

    window['onYouTubeIframeAPIReady'] = (e: any) => {
      new window['YT'].Player('ktv-youtube-iframe', {
        videoId: '1cH2cerUpMQ',
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange,
        },
      });
    };
  }, [])

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
