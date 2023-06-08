import React from 'react';
import AlbumSquare from './AlbumSquare';
import { Link } from 'react-router-dom';

export const Carousel = ({ title, albumQuery }) => {
  const { data: albums, isLoading, isError } = albumQuery({ limit: 6, offset: 0});
  const numSquares = albums ? albums.length : 0;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading albums</div>;
  }

  return (
    <div className="mb-5">
      <div className="mb-3">
        <Link 
          className="align-self-start text-white fw-light h3"
          style={{ textDecoration: 'none' }}
          to={`/albums`}
        >
          {title}
        </Link>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', width: '100%' }}>
        {albums.map((album) => (
          <div style={{ width: `${(100 - numSquares) / numSquares}%` }} key={album.id}>
            <AlbumSquare album={album} />
          </div>
        ))}
      </div>
    </div>
  );
};
