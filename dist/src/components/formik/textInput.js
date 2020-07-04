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
exports.TextInput = exports.Error = exports.Input = exports.Label = exports.InputContainer = void 0;
const React = __importStar(require("react"));
const formik_1 = require("formik");
const styled_components_1 = __importDefault(require("styled-components"));
exports.InputContainer = styled_components_1.default.div `
  min-height: 84px;
`;
exports.Label = styled_components_1.default.label ``;
exports.Input = styled_components_1.default.input `
  width: 100%;
`;
exports.Error = styled_components_1.default.div `
  color: red;
`;
exports.TextInput = ({ label, className, textarea, id, ...props }) => {
    const [field, meta] = formik_1.useField(props);
    const inputId = id || props.name;
    return (React.createElement(exports.InputContainer, { className: className },
        React.createElement(exports.Label, { htmlFor: inputId }, label),
        React.createElement(exports.Input, Object.assign({ id: inputId }, field, props, { as: textarea ? 'textarea' : 'input' })),
        meta.touched && meta.error && (React.createElement(exports.Error, { className: "error", "data-testid": "error" }, meta.error))));
};
//# sourceMappingURL=textInput.js.map