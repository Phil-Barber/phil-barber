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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FourOhFour = void 0;
const React = __importStar(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const pageWrapper_1 = __importDefault(require("../components/pageWrapper"));
const styled_1 = require("../components/styled");
const Content = styled_components_1.default.div `
  font-size: 40px;
  font-weight: 600;
  min-height: 100vh;
`;
const HomeLink = styled_components_1.default.a `
  margin-top: ${({ theme }) => theme.spacing.large};
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 20px;
  font-weight: normal;
`;
const Back = styled_components_1.default.span `
  padding-left: ${({ theme }) => theme.spacing.small};
  font-size: 25px;
`;
exports.FourOhFour = () => (React.createElement(pageWrapper_1.default, null,
    React.createElement(styled_1.PageLayout, null,
        React.createElement(Content, null,
            React.createElement("div", null, "\u00AF\\_(\u30C4)_/\u00AF"),
            React.createElement("div", null, "Nothing to see here folks!"),
            React.createElement(HomeLink, { href: "/" },
                "Take me back",
                React.createElement(Back, { role: "img", "aria-label": "back" }, "\uD83D\uDD19"))))));
exports.default = exports.FourOhFour;
//# sourceMappingURL=404.js.map