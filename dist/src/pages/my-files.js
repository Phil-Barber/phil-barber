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
exports.query = exports.MyFiles = void 0;
const React = __importStar(require("react"));
const gatsby_1 = require("gatsby");
const pageWrapper_1 = __importDefault(require("../components/pageWrapper"));
const styled_1 = require("../components/styled");
exports.MyFiles = ({ data }) => {
    return (React.createElement(pageWrapper_1.default, null,
        React.createElement(styled_1.PageLayout, null,
            React.createElement("div", null,
                React.createElement("h1", null, "My Site's Files"),
                React.createElement("table", null,
                    React.createElement("thead", null,
                        React.createElement("tr", null,
                            React.createElement("th", null, "relativePath"),
                            React.createElement("th", null, "prettySize"),
                            React.createElement("th", null, "extension"),
                            React.createElement("th", null, "birthTime"))),
                    React.createElement("tbody", null, data.allFile.edges.map(({ node }, index) => (React.createElement("tr", { key: index },
                        React.createElement("td", null, node.relativePath),
                        React.createElement("td", null, node.prettySize),
                        React.createElement("td", null, node.extension),
                        React.createElement("td", null, node.birthTime))))))))));
};
exports.default = exports.MyFiles;
exports.query = gatsby_1.graphql `
  query {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`;
//# sourceMappingURL=my-files.js.map