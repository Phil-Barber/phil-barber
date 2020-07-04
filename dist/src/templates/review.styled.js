"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtraInfo = exports.InfoHeader = exports.DetailsContainer = exports.InfoColumn = exports.Attr = exports.Detail = exports.Poster = exports.ContentColumn = exports.Column = exports.Container = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const react_spring_1 = require("react-spring");
const gatsby_image_1 = __importDefault(require("gatsby-image"));
exports.Container = styled_components_1.default.div `
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  min-height: 100vh;
`;
exports.Column = styled_components_1.default.div `
  padding: ${({ theme }) => theme.spacing.normal};
  padding-top: ${({ theme }) => theme.spacing.large};
`;
exports.ContentColumn = styled_components_1.default(exports.Column) `
  flex-grow: 6;
  flex-basis: 300px;
  margin-right: ${({ theme }) => theme.spacing.xxxLarge};
`;
exports.Poster = styled_components_1.default(gatsby_image_1.default) `
  flex-basis: 200px;
  flex-grow: 1;
`;
exports.Detail = styled_components_1.default.span `
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing.xSmall};
  text-align: left;
`;
exports.Attr = styled_components_1.default.strong `
  display: block;
  font-weight: 600;
`;
exports.InfoColumn = styled_components_1.default(react_spring_1.animated(exports.Column)) `
  margin-top: ${({ theme }) => theme.spacing.large};
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  flex-grow: 5;
  flex-basis: 200px;
`;
exports.DetailsContainer = styled_components_1.default.div `
  padding: ${({ theme }) => theme.spacing.normal};
  flex-grow: 1;
  flex-basis: 100px;
`;
exports.InfoHeader = styled_components_1.default.div `
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 1150px) {
    display: block;

    ${exports.Poster} {
      width: 100%;
    }

    ${exports.Attr} {
      display: inline;
    }
  }
`;
exports.ExtraInfo = styled_components_1.default.div `
  margin-top: ${({ theme }) => theme.spacing.normal};
`;
//# sourceMappingURL=review.styled.js.map