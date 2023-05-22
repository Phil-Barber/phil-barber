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
exports.query = exports.Now = void 0;
const React = __importStar(require("react"));
const gatsby_1 = require("gatsby");
const pageWrapper_1 = require("../components/pageWrapper");
const styled_1 = require("../components/styled");
const seo_1 = __importDefault(require("../components/seo"));
exports.Now = ({ data }) => {
    const nowContent = data.markdownRemark;
    return (React.createElement(pageWrapper_1.FullWidthWrapper, null,
        React.createElement(styled_1.PageLayout, null,
            React.createElement(seo_1.default, { title: "Now", description: "now now now" }),
            React.createElement("div", { dangerouslySetInnerHTML: { __html: nowContent.html } }),
            React.createElement("img", { src: "https://api.thegreenwebfoundation.org/greencheckimage/phil-barber.uk", alt: "This website is hosted Green - checked by thegreenwebfoundation.org" }))));
};
exports.default = exports.Now;
exports.query = gatsby_1.graphql `
  query {
    markdownRemark(fields: { slug: { eq: "/markdown/now/" } }) {
      html
    }
  }
`;
//# sourceMappingURL=now.js.map