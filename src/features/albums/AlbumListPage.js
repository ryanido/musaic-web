import React from 'react';
import AlbumSquare from './AlbumSquare';

const AlbumListPage = ({ albumQuery }) => {
  const { data: albums, isLoading, isError } = albumQuery({
    limit: 50,
    offset: 0,
  });

  return (
    <div>
      <h1 style={
        {
          color: 'white',
          textAlign: 'center',
          fontSize: '50px',
          fontWeight: 'bold',
        }
      }> Albums</h1>
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error loading albums</div>
      ) : (
        <div className="album-list">
          {albums.map((album) => (
            <AlbumSquare key={album.id} album={album} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AlbumListPage;
