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
exports.FullWidthWrapper = exports.ContentContainer = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const react_spring_1 = require("react-spring");
const styled_components_1 = __importDefault(require("styled-components"));
const react_headroom_1 = __importDefault(require("react-headroom"));
const gatsby_1 = require("gatsby");
const MainHeader = styled_components_1.default.div `
  display: flex;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => `${theme.spacing.xxSmall} ${theme.spacing.normal}`};

  h1 {
    color: ${({ theme }) => theme.colors.secondary};
    margin-bottom: 0;
  }
`;
const Arrow = styled_components_1.default(react_spring_1.animated.span) `
  font-size: 30px;
  font-weight: 600;
  margin-right: ${({ theme }) => theme.spacing.xLarge};
  cursor: pointer;
  user-select: none;
`;
const Body = styled_components_1.default.div `
  display: flex;
`;
const Sidebar = styled_components_1.default(react_spring_1.animated.div) `
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};

  margin-left: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  overflow: scroll;
  box-shadow: -2px 0 8px 0 rgba(0, 0, 0, 0.24);
  padding-top: 300px;
`;
const StyledLink = styled_components_1.default(gatsby_1.Link) `
  text-decoration: none;
`;
const NavLink = styled_components_1.default(react_spring_1.animated(StyledLink)) `
  width: 80px;
  font-size: 18px;
  transition: font-size 0.5s ease, font-weight 0.5s ease;

  :hover {
    font-size: 20px;
  }
`;
exports.ContentContainer = styled_components_1.default.div `
  background-color: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.secondary};
  padding: ${({ theme }) => theme.spacing.normal};
  text-align: justify;
  width: 100vw;

  h1,
  h2,
  h3,
  h4 {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
const PageWrapper = ({ className, children }) => {
    const data = gatsby_1.useStaticQuery(gatsby_1.graphql `
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `);
    const [isSidebarOpen, setIsSidebarOpen] = react_1.useState(false);
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const arrowRotation = react_spring_1.useSpring({
        transform: `rotate(${isSidebarOpen ? 90 : 0}deg)`,
        config: react_spring_1.config.stiff,
    });
    const sidebarRef = react_1.useRef();
    const sidebarAnimation = react_spring_1.useSpring({
        width: isSidebarOpen ? '300px' : '0px',
        config: react_spring_1.config.stiff,
        ref: sidebarRef,
    });
    const listItems = [
        {
            children: 'Contact',
            key: 'contact1',
            to: '/contact/',
        },
        {
            children: 'Contact',
            key: 'contact2',
            to: '/contact/',
        },
        {
            children: 'Contact',
            key: 'contact3',
            to: '/contact/',
        },
    ];
    const transitionRef = react_1.useRef();
    const transitions = react_spring_1.useTransition(isSidebarOpen ? listItems : [], (item) => item.key, {
        ref: transitionRef,
        unique: true,
        trail: 400 / listItems.length,
        from: { opacity: 0, transform: 'scale(0)' },
        enter: { opacity: 1, transform: 'scale(1)' },
        leave: {
            opacity: 0,
            transform: 'scale(0)',
            maxWidth: 0,
            padding: 0,
            margin: 0,
        },
    });
    react_spring_1.useChain(isSidebarOpen ? [sidebarRef, transitionRef] : [transitionRef, sidebarRef], isSidebarOpen ? [0, 0.3] : [0, 0.8]);
    return (React.createElement(React.Fragment, null,
        React.createElement(react_headroom_1.default, null,
            React.createElement(MainHeader, null,
                React.createElement(StyledLink, { to: '/' },
                    React.createElement("h1", null, data.site.siteMetadata.title)),
                React.createElement(Arrow, { style: arrowRotation, onClick: toggleSidebar }, ">"))),
        React.createElement(Body, { className: className },
            React.createElement(exports.ContentContainer, null, children),
            React.createElement(Sidebar, { style: sidebarAnimation }, transitions.map(({ item, key, props }) => (React.createElement(NavLink, Object.assign({ key: key }, item, { style: props }), item.children)))))));
};
exports.default = PageWrapper;
exports.FullWidthWrapper = styled_components_1.default(PageWrapper) `
  ${exports.ContentContainer} {
    width: 100%;
    min-height: 100vh;
  }
`;
//# sourceMappingURL=pageWrapper.js.map