import React, { useState } from 'react';
import { Card, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth } from '../features/auth/AuthContext';
import { useNavigate } from 'react-router-dom';

const AlbumSquare = ({ album }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleClicked = () => {
    navigate(`/album/${album.id}`);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Card
      className="bg-dark text-white"
      style={{
        width: '100%',
        height: 'auto',
        cursor: 'pointer',
        position: 'relative',
        outline: isHovered ? '3px solid #1DB954' : 'none',
      }}
      onClick={handleClicked}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Card.Img src={album.images[0].url} alt="Card image" />
      {isHovered && (
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip id="tooltip">{album.name}</Tooltip>}
        >
          <div
            style={{
              position: 'absolute',
              top: '-30px',
              left: '50%',
              transform: 'translateX(-50%)',
              background: '#1DB954',
              padding: '5px 10px',
              borderRadius: '10px',
            }}
          >
            {album.name}
          </div>
        </OverlayTrigger>
      )}
    </Card>
  );
};

export default AlbumSquare;
