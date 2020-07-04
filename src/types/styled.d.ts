import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
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
}
