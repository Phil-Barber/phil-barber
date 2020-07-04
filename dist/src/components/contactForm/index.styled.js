"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequiredText = exports.SubmitButton = exports.FlexBox = exports.MessageInput = exports.ShortInput = exports.FullWidthInput = exports.TextInputStyled = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const textInput_1 = require("../formik/textInput");
exports.TextInputStyled = styled_components_1.default(textInput_1.TextInput) `
  ${textInput_1.Label} {
    display: block;
  }
`;
exports.FullWidthInput = styled_components_1.default(exports.TextInputStyled) `
  ${textInput_1.Input} {
    width: 100%;
  }
`;
exports.ShortInput = styled_components_1.default(exports.TextInputStyled) `
  width: 50%;

  ${({ isLeft, theme: { spacing } }) => isLeft
    ? `padding-right: ${spacing.small}`
    : `padding-left: ${spacing.small}`};
`;
exports.MessageInput = styled_components_1.default(exports.FullWidthInput) `
  ${textInput_1.Input} {
    height: 200px;
  }
`;
exports.FlexBox = styled_components_1.default.div `
  display: flex;
`;
exports.SubmitButton = styled_components_1.default.button `
  flex-grow: 1;
`;
exports.RequiredText = styled_components_1.default.div `
  font-size: 12px;
  flex-grow: 1;
  text-align: right;
`;
//# sourceMappingURL=index.styled.js.map