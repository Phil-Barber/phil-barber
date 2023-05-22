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
exports.PagedList = void 0;
const react_1 = __importStar(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const PageButtons = styled_components_1.default.button `
  margin: 0px ${({ theme }) => theme.spacing.xxSmall};
`;
exports.PagedList = ({ children, pageSize = 10, }) => {
    const numPages = Math.ceil(children.length / pageSize);
    const [pageNum, setPageNum] = react_1.useState(0);
    const start = pageSize * pageNum;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        children.slice(start, start + pageSize),
        react_1.default.createElement(PageButtons, { disabled: pageNum === 0, onClick: () => setPageNum((num) => num - 1) }, "Previous"),
        Array.from({ length: numPages }, (_, n) => (react_1.default.createElement(PageButtons, { disabled: pageNum === n, key: n, onClick: () => setPageNum(n) }, n + 1))),
        react_1.default.createElement(PageButtons, { disabled: pageNum === numPages - 1, onClick: () => setPageNum((num) => num + 1) }, "Next")));
};
//# sourceMappingURL=pagedList.js.map