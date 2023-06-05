import React from 'react';
import AlbumSquare from './AlbumSquare';

const AlbumList = ({ albums }) => {
  return (
    <div className="album-list">
      {albums.map((album) => (
        <AlbumSquare key={album.id} album={album} />
      ))}
    </div>
  );
};

export default AlbumList;
