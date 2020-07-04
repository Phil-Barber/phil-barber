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
exports.Contact = void 0;
const React = __importStar(require("react"));
const pageWrapper_1 = require("../components/pageWrapper");
const styled_1 = require("../components/styled");
const contactForm_1 = require("../components/contactForm");
const seo_1 = __importDefault(require("../components/seo"));
exports.Contact = () => (React.createElement(pageWrapper_1.FullWidthWrapper, null,
    React.createElement(styled_1.PageLayout, null,
        React.createElement(seo_1.default, { title: "contact", description: "Get in contact with me" }),
        React.createElement("h1", null, "Get In Touch!"),
        React.createElement("p", null, "If you've got a social enterprise or a good cause that you would like some technical help with, don't hesitate to get in touch using the form below."),
        React.createElement(contactForm_1.ContactForm, null))));
exports.default = exports.Contact;
//# sourceMappingURL=contact.js.map