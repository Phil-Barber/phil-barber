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
exports.ContactForm = void 0;
const React = __importStar(require("react"));
const react_toast_notifications_1 = require("react-toast-notifications");
const formik_1 = require("formik");
const Yup = __importStar(require("yup"));
const S = __importStar(require("./index.styled"));
const URL = 'https://8hot7pcq6e.execute-api.eu-west-2.amazonaws.com/dev/email/send';
exports.ContactForm = () => {
    const bodyLimit = 300;
    const { addToast } = react_toast_notifications_1.useToasts();
    return (React.createElement(formik_1.Formik, { initialValues: {
            email: '',
            name: '',
            body: '',
        }, validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
            name: Yup.string().required('Required'),
            company: Yup.string(),
            body: Yup.string()
                .max(bodyLimit, `Must be ${bodyLimit} characters or less`)
                .required('Required'),
        }), onSubmit: (values, { setSubmitting, resetForm, setStatus }) => {
            const req = new XMLHttpRequest();
            req.open('POST', URL, true);
            req.setRequestHeader('Content-Type', 'application/json');
            req.addEventListener('load', function () {
                setSubmitting(false);
                if (req.status < 400) {
                    // Success
                    resetForm({});
                    setStatus({ success: true });
                    addToast('Form sent - Thanks!', { appearance: 'success' });
                }
                else {
                    setStatus({ success: false });
                    addToast(`I have made a mistake... That's emabrrassing.`, {
                        appearance: 'error',
                    });
                    console.error('Request failed: ' + req.statusText);
                }
            });
            req.send(JSON.stringify(values));
        } }, (formik) => (React.createElement(formik_1.Form, { name: "contact", "netlify-honeypot": "bot-field", "data-netlify": "true" },
        React.createElement("input", { type: "hidden", name: "bot-field", value: "contact" }),
        React.createElement(S.FullWidthInput, { label: "Email Address*", name: "email", type: "email" }),
        React.createElement(S.FlexBox, null,
            React.createElement(S.ShortInput, { label: "Name*", name: "name", type: "text", isLeft: true }),
            React.createElement(S.ShortInput, { label: "Company", name: "company", type: "text" })),
        React.createElement(S.MessageInput, { label: "Message*", name: "body", textarea: true, placeholder: `Hi Phil,

Hope you're having a great day!

Listen to this really exciting project you could contribute to:` }),
        React.createElement(S.FlexBox, null,
            React.createElement(S.SubmitButton, { type: "submit", disabled: formik.isSubmitting }, "Submit"),
            React.createElement(S.RequiredText, null, "*Required field"))))));
};
//# sourceMappingURL=index.js.map