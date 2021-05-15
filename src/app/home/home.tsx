import React, { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { RoomContext } from '../_context/room.context';
import './home.scss';

function Home() {
  const { roomId, createRoom } = useContext(RoomContext);
  const [isRoomCreated, setIsRoomCreated] = useState(false);
  const controlLinkInputRef = useRef(null);

  const onCreateRoom = async () => {
    await createRoom();
    setIsRoomCreated(true);
  }

  const onShareController = () => {
    const { current }: any = controlLinkInputRef;
    current.select();
    current.setSelectionRange(0, 99999);
    /* Copy the text inside the text field */
    document.execCommand('copy');
    /* Alert the copied text */
    alert('Controller link has been copied on your clipboard');
  }

  return (
    <div className="home-container">
      {isRoomCreated ? (
        <>
          <h4>Room created!</h4>
          <i className="bi bi-check-circle text-success home-created-icon"></i>
          <Link to={`/room/${roomId}`} className="btn btn-info mb-2">
            Go to <i className="bi bi-mic"></i> room
          </Link>
          <Link to={`/remote/${roomId}`} className="btn btn-warning mb-2">
            Go to <i className="bi bi-phone"></i> remote controller
          </Link>
          <button
            className="btn btn-outline-secondary mb-2"
            onClick={() => onShareController()}
          >
            <i className="bi bi-share"></i> Share the controller
          </button>
          <input
            type="text"
            className="form-control"
            value={`${window.location.origin}/#/remote/${roomId}`}
            onChange={() => {}}
            ref={controlLinkInputRef}
          />
        </>
      ) : (
        <>
          <h4>Youtube Karaoke</h4>
          <img src="karaoke-icon.png" alt="karaoke icon" />
          <button
            className="btn btn-primary mb-2"
            onClick={() => onCreateRoom()}
          >
            Create a room
          </button>
          <button className="btn btn-primary">Join a room</button>
        </>
      )}
    </div>
  );
}

export default Home;
