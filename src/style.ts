const black = '#000';
const white = '#fff';
const navy = '#001F3F';
const orange = '#FF851B';
const silver = '#ddd';

interface Theme {
  readonly colors: {
    readonly primary: string;
    readonly secondary: string;
    readonly tertiary: string;
    readonly black: string;
    readonly white: string;
  };
  readonly spacing: {
    readonly xxxSmall: string;
    readonly xxSmall: string;
    readonly xSmall: string;
    readonly small: string;
    readonly normal: string;
    readonly medium: string;
    readonly large: string;
    readonly xLarge: string;
    readonly xxLarge: string;
    readonly xxxLarge: string;
  };
}

export const theme: Theme = {
  colors: {
    primary: orange,
    secondary: navy,
    tertiary: silver,
    black,
    white,
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

export const twoColumnMinWidth = '(max-width: 1024px)';

export const glideIn = {
  from: { opacity: 0, transform: 'translate3d(0, 100px, 0)' },
  to: { opacity: 1, transform: 'translate3d(0, 0px, 0)' },
};
