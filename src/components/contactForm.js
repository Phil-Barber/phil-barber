import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import styled from 'styled-components'
import * as Yup from 'yup'
import { TextInput, Label, Input, Error } from './formik/textInput'

const TextInputStyled = styled(TextInput)`
  ${Label} {
    display: block;
  }
`

const FullWidthInput = styled(TextInputStyled)`
  ${Input} {
    width: 100%;
  }
`

const ShortInput = styled(TextInputStyled)`
  width: 50%;
`

const MessageInput = styled(FullWidthInput)`
  ${Input} {
    height: 200px;
  }
`

const FlexBox = styled.div`
  display: flex;
`

const SubmitButton = styled.button`
  flex-grow: 1;
`

const RequiredText = styled.div`
  font-size: 12px;
  flex-grow: 1;
  text-align: right;
  
`

export const ContactForm = () => {
  const bodyLimit = 300

  return <Formik
    initialValues={{
      email: '',
      name: '',
      body: '',
    }}
    validationSchema={Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      name: Yup.string()
        .required('Required'),
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
          <FullWidthInput
            label="Email Address*"
            name="email"
            type="email"
          />
            <FlexBox>
          <ShortInput
            label="Name*"
            name="name"
            type="text"
          />
          <ShortInput
            label="Company"
            name="company"
            type="text"
          />
          </FlexBox>
          <MessageInput
            label="Message*"
            name="body"
            textarea
            placeholder={`Hi Phil,

    Hope you're having a great day!

    Listen to this really exciting project you could contribute to:`}
          />
          <FlexBox>
            <SubmitButton type="submit" disabled={formik.isSubmitting}>Submit</SubmitButton>
            <RequiredText>*Required field</RequiredText>
          </FlexBox>
        </Form>
      </>
    )}
  </Formik>
};


