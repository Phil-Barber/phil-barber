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
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email && <div>{formik.errors.email}</div>}
      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastName}
      />
      {formik.touched.name && formik.errors.name && <div>{formik.errors.name}</div>}
      <label htmlFor="body"></label>
      <input
        id="body"
        name="body"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastName}
      />
      {formik.touched.body && formik.errors.body && <div>{formik.errors.body}</div>}
      <button type="submit">Submit</button>
    </form>
  );
};


