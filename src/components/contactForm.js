import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'


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
    <Form>
      <label htmlFor="email">Email Address</label>
      <Field name="email" type="email" />
      <ErrorMessage name="email" />
      <label htmlFor="name">Name</label>
      <Field name="name" type="text" />
      <ErrorMessage name="name" />
      <label htmlFor="body">Message</label>
      <Field name="body" as="textarea" placeholder={`Hi Phil,

Hope you're having a great day! 

Listen to this really exciting project you could contribute to:
...`}
          />
      <ErrorMessage name="body" />
      <button type="submit">Submit</button>
    </Form>
  </Formik>
};


