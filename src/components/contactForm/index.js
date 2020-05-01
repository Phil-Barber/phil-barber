import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import * as S from './index.styled';

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
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
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
