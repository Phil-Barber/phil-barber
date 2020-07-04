"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.wrapWithProvider = void 0;
const React = __importStar(require("react"));
const react_toast_notifications_1 = require("react-toast-notifications");
const styled_components_1 = require("styled-components");
const style_1 = require("../src/style");
const GlobalStyle = styled_components_1.createGlobalStyle `
  a {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
exports.wrapWithProvider = ({ element }) => (React.createElement(styled_components_1.ThemeProvider, { theme: style_1.theme },
    React.createElement(GlobalStyle, null),
    React.createElement(react_toast_notifications_1.ToastProvider, null, element)));
//# sourceMappingURL=wrap-with-provider.js.map