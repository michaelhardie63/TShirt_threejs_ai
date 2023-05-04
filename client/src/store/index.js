import { proxy } from 'valtio';

const state = proxy({
    intro: true,
    color: "#EFBD48",
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './your-image.png',
    fullDecal: './your-image.png',
});

export default state;
