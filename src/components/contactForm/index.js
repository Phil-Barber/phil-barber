import React from 'react';
import { useToasts } from 'react-toast-notifications';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import * as S from './index.styled';

const URL =
  'https://8hot7pcq6e.execute-api.eu-west-2.amazonaws.com/dev/email/send';

export const ContactForm = () => {
  const bodyLimit = 300;
  const { addToast } = useToasts();

  return (
    <Formik
      initialValues={{
        email: '',
        name: '',
        body: '',
      }}
      validationSchema={Yup.object({
        email: Yup.string().email('Invalid email address').required('Required'),
        name: Yup.string().required('Required'),
        company: Yup.string(),
        body: Yup.string()
          .max(bodyLimit, `Must be ${bodyLimit} characters or less`)
          .required('Required'),
      })}
      onSubmit={(values, { setSubmitting, resetForm, setStatus }) => {
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
          } else {
            setStatus({ success: false });
            addToast(`I have made a mistake... That's emabrrassing.`, {
              appearance: 'error',
            });
            console.error('Request failed: ' + req.statusText);
          }
        });
        req.send(JSON.stringify(values));
      }}
    >
      {(formik) => (
        <Form name="contact" netlify-honeypot="bot-field" data-netlify="true">
          <input type="hidden" name="bot-field" value="contact" />
          <S.FullWidthInput label="Email Address*" name="email" type="email" />
          <S.FlexBox>
            <S.ShortInput label="Name*" name="name" type="text" />
            <S.ShortInput label="Company" name="company" type="text" />
          </S.FlexBox>
          <S.MessageInput
            label="Message*"
            name="body"
            textarea
            placeholder={`Hi Phil,

Hope you're having a great day!

Listen to this really exciting project you could contribute to:`}
          />
          <S.FlexBox>
            <S.SubmitButton type="submit" disabled={formik.isSubmitting}>
              Submit
            </S.SubmitButton>
            <S.RequiredText>*Required field</S.RequiredText>
          </S.FlexBox>
        </Form>
      )}
    </Formik>
  );
};
