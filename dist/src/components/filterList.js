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
exports.FilterList = void 0;
const react_1 = __importStar(require("react"));
const badge_1 = require("../components/badge");
const useFilters = (items, filters, lookupFunc) => {
    const [selected, setSelected] = react_1.useState([]);
    const toggleSelected = (clicked) => () => {
        setSelected((selected) => selected.includes(clicked)
            ? selected.filter((item) => item !== clicked)
            : [...selected, clicked]);
    };
    const filteredItems = items.filter((item) => {
        if (!selected.length)
            return true;
        return selected.reduce((acc, key) => acc || filters[key](lookupFunc(item)), false);
    });
    return [selected, filteredItems, toggleSelected];
};
exports.FilterList = ({ items, filters, lookupFunc, children, }) => {
    const [selected, filteredItems, toggleSelected] = useFilters(items, filters, lookupFunc);
    const filterButtons = Object.keys(filters).map((key) => (react_1.default.createElement(badge_1.Badge, { key: key, onClick: toggleSelected(key), isSelected: selected.includes(key) }, key)));
    return (react_1.default.createElement(react_1.default.Fragment, null,
        filterButtons,
        children(filteredItems)));
};
//# sourceMappingURL=filterList.js.map