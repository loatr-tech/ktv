import React, { createContext, useEffect, useState } from 'react';
import firebase from '../utils/firebase';

export const RoomContext = createContext<any>({});

export default function RoomContextProvider(props: any) {
  const [room, setRoom] = useState();
  const [roomId, setRoomId] = useState('kcuRCauZPqfaoLCLcjDP');
  const [songs, setSongs] = useState<any[]>([]);

  useEffect(() => {
    const unsubscribeFirebase = firebase
      .firestore()
      .collection('rooms')
      .doc(roomId)
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
  }, [roomId]);

  const updateSongProps = (songId: string, songProps: any) => {
    return firebase
      .firestore()
      .collection('rooms')
      .doc(roomId)
      .collection('songs')
      .doc(songId)
      .update(songProps);
  }

  const addSong = (video: any) => {
    return firebase
      .firestore()
      .collection('rooms')
      .doc(roomId)
      .collection('songs')
      .add(video);
  }

  const removeFirstSong = () => {
    if (songs.length) {
      return firebase
        .firestore()
        .collection('rooms')
        .doc(roomId)
        .collection('songs')
        .doc(songs[0].id)
        .delete();
    }
  };

  return (
    <RoomContext.Provider
      value={{
        room,
        setRoom,
        roomId,
        setRoomId,
        songs,
        updateSongProps,
        addSong,
        removeFirstSong,
      }}
    >
      {props.children}
    </RoomContext.Provider>
  );
}
