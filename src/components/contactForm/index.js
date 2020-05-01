import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import * as S from './index.styled';

const URL =
  'https://8hot7pcq6e.execute-api.eu-west-2.amazonaws.com/dev/email/send';

export const ContactForm = () => {
  const bodyLimit = 300;

  return (
    <Formik
      initialValues={{
        email: '',
        name: '',
        body: '',
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email('Invalid email address')
          .required('Required'),
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
        req.addEventListener('load', function() {
          setSubmitting(false);
          if (req.status < 400) {
            // Success
            resetForm({});
            setStatus({ success: true });
          } else {
            setStatus({ success: false });
            throw Error('Request failed: ' + req.statusText);
          }
        });
        req.send(JSON.stringify(values));
      }}
    >
      {formik => (
        <>
          <Form>
            <S.FullWidthInput
              label="Email Address*"
              name="email"
              type="email"
            />
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
        </>
      )}
    </Formik>
  );
};
