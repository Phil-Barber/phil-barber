import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'


export const ContactForm = () => {
  const bodyLimit = 300

  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      body: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      name: Yup.string()
        .required('Required'),
      body: Yup.string()
        .max(bodyLimit, `Must be ${bodyLimit} characters or less`)
        .required('Required'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input
        name="email"
        {...formik.getFieldProps('email')}
      />
      {formik.touched.email && formik.errors.email && <div>{formik.errors.email}</div>}
      <label htmlFor="name">Name</label>
      <input
        name='name'
        {...formik.getFieldProps('name')}
      />
      {formik.touched.name && formik.errors.name && <div>{formik.errors.name}</div>}
      <label htmlFor="body"></label>
      <input
        name='body'
        {...formik.getFieldProps('body')}
      />
      {formik.touched.body && formik.errors.body && <div>{formik.errors.body}</div>}
      <button type="submit">Submit</button>
    </form>
  );
};


