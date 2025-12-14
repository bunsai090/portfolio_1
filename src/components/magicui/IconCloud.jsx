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

export const renderCustomIcon = (icon, theme) => {
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


const IconCloud = ({ iconStrings }) => {
    // We will just use the images directly in the demo if using simple icons CDN
    // BUT the user code snippet used `IconCloud images={images}`
    // If I use `react-icon-cloud` directly, the `Cloud` component expects `children` as <a> tags or similar.
    // However, the `react-icon-cloud` library documentation (and typical usage) involves using `fetchSimpleIcons` or standard `Cloud` with children.

    // Modification: Use the `Cloud` component but if we want to follow the Magic UI interface `images={images}`,
    // we need to see how Magic UI mapped it.
    // Magic UI's IconCloud typically uses `Cloud` from `react-icon-cloud` and expects valid React elements as children.

    // Let's implement it to receive `images` prop which are URL strings, and render them as img tags if they are URLs.

    return null; // Placeholder as I need to clarify the implementation detail in the next Write.
};

// Re-writing the functionality above to match what `react-icon-cloud` expects better alongside the prompt's request.
// The user gave:
// const images = slugs.map((slug) => `https://cdn.simpleicons.org/${slug}/${slug}`)
// <IconCloud images={images} />

// So I should make IconCloud accept `images` which is an array of strings (URLs).

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
export default IconCloudComponent;
