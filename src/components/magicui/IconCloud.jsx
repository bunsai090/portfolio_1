import React from 'react';
import { Cloud, renderSimpleIcon } from 'react-icon-cloud';

const cloudProps = {
    containerProps: {
        style: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            // paddingTop: 40, // Removed for better centering
        },
    },
    options: {
        depth: 1,
        scrolling: false,
        imageScale: 2,
        activeCursor: 'default',
        tooltip: 'native',
        initial: [0.1, -0.1],
        clickToFront: 500,
        tooltipDelay: 0,
        outlineColour: '#0000',
        maxSpeed: 0.04,
        minSpeed: 0.02,
        // dragControl: false,
    },
};

const renderCustomIcon = (icon, theme) => {
    const bgHex = theme === 'light' ? '#f3f2ef' : '#080510';
    const fallbackHex = theme === 'light' ? '#6e6e73' : '#ffffff';
    const minContrastRatio = theme === 'dark' ? 2 : 1.2;

    return renderSimpleIcon({
        icon,
        bgHex,
        fallbackHex,
        minContrastRatio,
        size: 42,
        aProps: {
            href: undefined,
            target: undefined,
            rel: undefined,
            onClick: (e) => e.preventDefault(),
        },
    });
};


// IconCloud component that accepts images prop
const IconCloudComponent = ({ images }) => {
    return (
        <Cloud {...cloudProps}>
            {images.map((imgUrl, index) => (
                <a key={index} href="#" onClick={(e) => e.preventDefault()} style={{ cursor: 'default' }}>
                    <img height="42" width="42" alt="icon" src={imgUrl} />
                </a>
            ))}
        </Cloud>
    );
};

// renderCustomIcon is available for use within the component if needed later
// eslint-disable-next-line react-refresh/only-export-components
export { renderCustomIcon };
export default IconCloudComponent;
