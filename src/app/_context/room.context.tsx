import React, { createContext, useEffect, useState } from 'react';
import firebase from '../utils/firebase';

export const RoomContext = createContext<any>({});

export default function RoomContextProvider(props: any) {
  const [room, setRoom] = useState();
  const [roomId, setRoomId] = useState();
  const [songs, setSongs] = useState<any[]>([]);

  useEffect(() => {
    const unsubscribeFirebase = firebase
      .firestore()
      .collection('rooms')
      .doc('kcuRCauZPqfaoLCLcjDP')
      .collection('songs')
      .orderBy('position', 'asc')
      .onSnapshot((snapshot) => {
        const newActiveSongs = snapshot.docs.map((video: any) => {
          return {
            id: video.id,
            ...video.data(),
          };
        });

        setSongs(newActiveSongs);
      });

    return () => unsubscribeFirebase();
  }, []);

  return (
    <RoomContext.Provider
      value={{
        room,
        setRoom,
        roomId,
        setRoomId,
        songs,
      }}
    >
      {props.children}
    </RoomContext.Provider>
  );
}
