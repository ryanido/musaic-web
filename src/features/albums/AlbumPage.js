import { useParams } from "react-router-dom";
import { useGetTrackQuery } from "../api/spotifyApiSlice";
import { Spinner } from "react-bootstrap";

const AlbumPage = () => {
  const { albumId } = useParams();
  const { data: album, isLoading, error } = useGetTrackQuery(albumId);

  // Loading and error handling
  if (isLoading) {
    return <Spinner animation="border" variant="primary" />;
  }
  if (error) {
    return <div>Error loading album</div>;
  }

  return (
    <div style={{
      background: `
        linear-gradient(to bottom, rgba(0,0,0,0) 25%, rgba(255,255,255,1) 75%, rgba(0,0,0,1) 100%),
        url(${album.cover}) no-repeat center center`,
      backgroundSize: 'cover',
      width: '100%',
      height: '100vh'
    }}>
      {/* Add content here, it will appear above the faded image */}
    </div>
  );
}

export default AlbumPage;
