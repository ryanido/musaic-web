//Carousel of AlbumSquares

import React from 'react';
import AlbumSquare from './AlbumSquare';

export const Carousel = ({ title, albums}) => {
    //dummy album data
    albums = [
        {
            id: 1,
            name: 'Birds in the Trap Sing McKnight',
            images: [
                {
                    url: 'https://via.placeholder.com/300x300',
                },
            ],
        },
        {
            id: 2,
            name: 'Album 2',
            images: [
                {
                    url: 'https://via.placeholder.com/300x300',
                },
            ],
        },
        {
            id: 3,
            name: 'Album 3',
            images: [
                {
                    url: 'https://via.placeholder.com/300x300',
                },
            ],
        },
        {
            id: 4,
            name: 'Album 4',
            images: [
                {
                    url: 'https://via.placeholder.com/300x300',
                },
            ],
        },
        {
            id: 5,
            name: 'Album 4',
            images: [
                {
                    url: 'https://via.placeholder.com/300x300',
                },
            ],
        },
        {
            id: 5,
            name: 'Album 4',
            images: [
                {
                    url: 'https://via.placeholder.com/300x300',
                },
            ],
        }
    ];
    const numSquares = albums.length;

    return (
        <div className='mb-5'>
            <h3 className='align-self-start text-white fw-light'>{title}</h3>
            <div style={{
                display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', width: '100%'
            }}>
                {albums.map((album) => (
                    <div style={{ width: `${(100 - numSquares) /numSquares}%`}}>
                        <AlbumSquare key={album.id} album={album} />
                    </div>
                ))}
            </div>
        </div>

    );
}

