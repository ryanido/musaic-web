import React, { useState } from 'react';
import { Card, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AlbumSquare = ({ album }) => {
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

            <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={<Tooltip id="tooltip">{album.name}</Tooltip>}
                trigger={['hover', 'focus']}>
                    <Card.Img src={album.cover} alt="album cover" />
            </OverlayTrigger>

        </Card>
    );
};

export default AlbumSquare;
