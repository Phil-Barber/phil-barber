import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { TextInput } from './formik/textInput'

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
      <Form>
        <TextInput
          label="Email Address"
          name="email"
          type="email"
        />
        <TextInput
          label="Name"
          name="name"
          type="text"
        />
        <TextInput
          label="Company"
          name="company"
          type="text"
        />
        <TextInput
          label="Message"
          name="body"
          textarea
          placeholder={`Hi Phil,

  Hope you're having a great day! 

  Listen to this really exciting project you could contribute to:
  ...`}
        />
        <button type="submit" disabled={formik.isSubmitting}>Submit</button>
      </Form>
    )}
  </Formik>
};


