import React, { createContext, useEffect, useState } from 'react';
import firebase from '../utils/firebase';

export const RoomContext = createContext<any>({});

function getRoomCollectionRefernce(roomId: string) {
  return firebase
    .firestore()
    .collection('rooms')
    .doc(roomId)
}

export default function RoomContextProvider(props: any) {
  const [roomId, setRoomId] = useState('0EqUdVjYeqA8aAvAv3W5');
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

  const createRoom = async () => {
    return firebase
      .firestore()
      .collection('rooms')
      .add({ play: true })
      .then(room => {
        setRoomId(room.id);
      });
  }

  const playPauseSong = (play: boolean) => {
    return firebase
      .firestore()
      .collection('rooms')
      .doc(roomId)
      .update({ play })
  }

  const onRoomChange = (callback = () => {}) => {
    return firebase
      .firestore()
      .collection('rooms')
      .doc(roomId)
      .onSnapshot(callback);
  }

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
    return getRoomCollectionRefernce(roomId)
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
        roomId,
        setRoomId,
        createRoom,
        onRoomChange,
        songs,
        playPauseSong,
        updateSongProps,
        addSong,
        removeFirstSong,
      }}
    >
      {props.children}
    </RoomContext.Provider>
  );
}
