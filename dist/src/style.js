"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.glideIn = exports.twoColumnMinWidth = exports.theme = void 0;
const black = '#000';
const white = '#fff';
const navy = '#001F3F';
const orange = '#FF851B';
const silver = '#ddd';
const lightGrey1 = '#e6e9eb';
const darkGrey1 = '#000000';
exports.theme = {
    colors: {
        primary: orange,
        secondary: navy,
        tertiary: silver,
        black,
        white,
        lightGrey1,
        darkGrey1,
    },
    spacing: {
        xxxSmall: '2px',
        xxSmall: '4px',
        xSmall: '8px',
        small: '12px',
        normal: '16px',
        medium: '20px',
        large: '24px',
        xLarge: '28px',
        xxLarge: '32px',
        xxxLarge: '64px',
    },
};
exports.twoColumnMinWidth = '(max-width: 1024px)';
exports.glideIn = {
    from: { opacity: 0, transform: 'translate3d(0, 100px, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0px, 0)' },
};
//# sourceMappingURL=style.js.map