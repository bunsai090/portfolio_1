import React from 'react';
import './AboutMe.css';
import './MusicContent.css';

const MusicContent = ({ items }) => {
    return (
        <div className="spotify-playlist">
            <div className="spotify-table-header">
                <div className="col-index">#</div>
                <div className="col-title">Title</div>
                <div className="col-album">Album</div>
                <div className="col-time">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                    </svg>
                </div>
            </div>
            {items.map((item, index) => (
                <div className="spotify-row" key={index}>
                    <div className="col-index">{item.id}</div>
                    <div className="col-title">
                        <img src={item.cover} alt={item.title} className="song-cover" />
                        <div className="song-info">
                            <div className="song-name">{item.title}</div>
                            <div className="song-artist">{item.artist}</div>
                        </div>
                    </div>
                    <div className="col-album">{item.album}</div>
                    <div className="col-time">{item.duration}</div>
                </div>
            ))}
        </div>
    );
};

export default MusicContent;
