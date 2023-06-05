import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AlbumList from '../features/albums/AlbumList';

const AlbumListPage = ({ albumQuery }) => {
  const { page } = useParams();
  const navigate = useNavigate();
  const pageNumber = parseInt(page, 10) || 0;
  const { data: albums, isLoading, isError } = albumQuery({
    limit: 20,
    offset: pageNumber * 12,
  });

  const handlePreviousPage = () => {
    const previousPage = pageNumber > 0 ? pageNumber - 1 : 0;
    navigate(`/albums/page/${previousPage}`, { replace: true });
  };

  const handleNextPage = () => {
    const nextPage = pageNumber + 1;
    navigate(`/albums/page/${nextPage}`, { replace: true });
  };

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error loading albums</div>
      ) : (
        <div>
          <AlbumList albums={albums} />

          {pageNumber > 0 && (
            <button onClick={handlePreviousPage}>Previous Page</button>
          )}
          <button onClick={handleNextPage}>Next Page</button>
        </div>
      )}
    </div>
  );
};

export default AlbumListPage;
