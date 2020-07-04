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
exports.Review = void 0;
const React = __importStar(require("react"));
const react_spring_1 = require("react-spring");
const pageWrapper_1 = __importDefault(require("../components/pageWrapper"));
const seo_1 = __importDefault(require("../components/seo"));
const S = __importStar(require("./review.styled"));
const style_1 = require("../style");
const Details = ({ details }) => (React.createElement(S.DetailsContainer, null, details.map(({ attr, value }) => (React.createElement(S.Detail, { key: attr },
    React.createElement(S.Attr, null,
        attr,
        ":"),
    " ",
    value)))));
exports.Review = ({ imageFluid, details, title, description, children, extraDetail, }) => {
    const infoEntrance = react_spring_1.useSpring({
        from: { opacity: 0, transform: 'translate3d(-200px, 0, 0)' },
        to: { opacity: 1, transform: 'translate3d(0px, 0, 0)' },
    });
    const contentEntrance = react_spring_1.useSpring(style_1.glideIn);
    return (React.createElement(pageWrapper_1.default, null,
        React.createElement(seo_1.default, { title: title, description: description }),
        React.createElement(S.Container, null,
            React.createElement(S.InfoColumn, { style: infoEntrance },
                React.createElement(S.InfoHeader, null,
                    React.createElement(S.Poster, { fluid: imageFluid, imgStyle: { objectFit: 'contain' } }),
                    React.createElement(Details, { details: details })),
                React.createElement(S.ExtraInfo, null, extraDetail)),
            React.createElement(S.ContentColumn, null,
                React.createElement(react_spring_1.animated.div, { style: contentEntrance },
                    React.createElement("h1", null, title),
                    children)))));
};
//# sourceMappingURL=review.js.map