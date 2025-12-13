import React, { useRef } from 'react';
import './AboutMe.css';
import './MoviesContent.css';

const MovieSection = ({ section }) => {
    const scrollContainerRef = useRef(null);

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const { current } = scrollContainerRef;
            const scrollAmount = 600; // Scroll by about 3-4 cards
            if (direction === 'left') {
                current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    return (
        <div className="spotify-section">
            <h3 className="spotify-section-title">{section.title}</h3>

            <div className="movie-scroll-wrapper">
                <button className="scroll-arrow left-arrow" onClick={() => scroll('left')}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                </button>

                <div className="movie-section-scroll" ref={scrollContainerRef}>
                    {section.items.map((item, index) => (
                        <div className="netflix-card" key={index}>
                            <div className="movie-cover-wrapper">
                                <img src={item.cover} alt={item.title} className="movie-cover" />
                                <div className="movie-play-overlay">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="movie-info">
                                <div className="movie-title">{item.title}</div>
                                <div className="movie-subtitle">{item.subtitle}</div>
                            </div>
                        </div>
                    ))}
                </div>

                <button className="scroll-arrow right-arrow" onClick={() => scroll('right')}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </button>
            </div>
        </div>
    );
};

const MoviesContent = ({ sections }) => {
    return (
        <div className="spotify-grid">
            {sections.map((section, sectionIndex) => (
                <MovieSection key={sectionIndex} section={section} />
            ))}
        </div>
    );
};

export default MoviesContent;
