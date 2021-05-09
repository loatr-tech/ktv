import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './home.scss';

function Home() {
  const [isRoomCreated, setIsRoomCreated] = useState(false)

  return (
    <div className="home-container">
      {isRoomCreated ? (
        <>
          <h4>Your room has been created</h4>
          <i className="bi bi-check-circle text-success home-created-icon"></i>
          <Link to="/room" className="btn btn-info mb-2">
            Go to <i className="bi bi-mic"></i> room
          </Link>
          <Link to="/remote" className="btn btn-warning mb-2">
            Go to <i className="bi bi-phone"></i> remote controller
          </Link>
          <button className="btn btn-outline-secondary">
            <i className="bi bi-share"></i> Share the controller
          </button>
        </>
      ) : (
        <>
          <h4>Welcome to Youtube Karaoke</h4>
          <img src="karaoke-icon.png" alt="karaoke icon" />
          <div>
            <button
              className="btn btn-primary mr-2"
              onClick={() => setIsRoomCreated(true)}
            >
              Create a room
            </button>
            <button className="btn btn-primary">Join a room</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
