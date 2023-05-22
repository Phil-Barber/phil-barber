"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Badge = void 0;
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const StyledBadge = styled_components_1.default.button `
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 12px;
  display: inline-block;
  width: fit-content;
  padding: 0 ${({ theme }) => theme.spacing.xSmall};
  border-radius: ${({ theme }) => theme.spacing.large};
  margin-right: ${({ theme }) => theme.spacing.xxSmall};

  ${({ isSelected, theme }) => isSelected
    ? `
    background-color: ${theme.colors.darkGrey1};
    color: ${theme.colors.lightGrey1};
  `
    : `
    background-color: ${theme.colors.lightGrey1};
    color: ${theme.colors.darkGrey1};
  `}
`;
exports.Badge = ({ children, className, isSelected = false, onClick, }) => (react_1.default.createElement(StyledBadge, { className: className, isSelected: isSelected, onClick: onClick }, children));
//# sourceMappingURL=badge.js.map