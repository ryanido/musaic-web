//Carousel of AlbumSquares

import React from 'react';
import AlbumSquare from './AlbumSquare';

export const Carousel = ({ title, tracks }) => {
    tracks.map((track) => console.log(track));
    const numSquares = tracks.length;

    return (
        <div className='mb-5'>
            <h3 className='align-self-start text-white fw-light'>{title}</h3>
            <div style={{
                display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', width: '100%'
            }}>
                {tracks.map((track) => (
                    <div style={{ width: `${(100 - numSquares) /numSquares}%`}}>
                        <AlbumSquare key={track.id} album={track} />
                    </div>
                ))}
            </div>
        </div>

    );
}

