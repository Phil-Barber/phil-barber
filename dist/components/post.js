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
exports.AnimatedPost = exports.Post = void 0;
const React = __importStar(require("react"));
const react_spring_1 = require("react-spring");
const styled_components_1 = __importDefault(require("styled-components"));
const gatsby_1 = require("gatsby");
const useHover_1 = require("../hooks/useHover");
const utils_1 = require("../utils");
const PostContainer = styled_components_1.default.div `
  padding: ${({ theme }) => theme.spacing.xxSmall};
  padding-bottom: 0;
  transition: background-color 1s ease-out;
  text-align: left;
  :hover {
    background-color: white;
  }
`;
const Excerpt = styled_components_1.default.p `
  visibility: hidden;
  max-height: 0px;
  overflow: hidden;
  transition: max-height 1s, visibility 1s;
  position: relative;

  ${({ isHovered }) => isHovered &&
    `
    max-height: 100px;
    visibility: visible;
  `};

  :after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: linear-gradient(
      transparent 40px,
      ${({ theme }) => theme.colors.white}
    );
  }
`;
const StyledLink = styled_components_1.default(gatsby_1.Link) `
  text-decoration: none;
  color: inherit;
`;
const Date = styled_components_1.default.span `
  color: #667269;
`;
const getEmoji = (slug) => {
    const emojiMap = [
        {
            check: utils_1.isFilmSlug,
            emoji: '🍿',
        },
        {
            check: utils_1.isBookSlug,
            emoji: '📚',
        },
    ];
    for (let i = 0; i < emojiMap.length; i++) {
        const { check, emoji } = emojiMap[i];
        if (check(slug))
            return emoji;
    }
    return '⌨️';
};
exports.Post = ({ fields, frontmatter, excerpt, style, }) => {
    const [hoverRef, isHovered] = useHover_1.useHover();
    return (React.createElement("div", { ref: hoverRef, "data-testid": "post-hover-div", style: style },
        React.createElement(PostContainer, { "data-testid": "post-container" },
            React.createElement(StyledLink, { to: fields.slug },
                React.createElement("h3", null,
                    getEmoji(fields.slug),
                    " ",
                    frontmatter.title,
                    React.createElement(Date, null,
                        " \u2014 ",
                        frontmatter.dateCompleted)),
                React.createElement(Excerpt, { isHovered: isHovered, "data-testid": "excerpt" }, excerpt)))));
};
exports.AnimatedPost = react_spring_1.animated(exports.Post);
//# sourceMappingURL=post.js.map