import React from 'react'
import { useFormik } from 'formik'

const validate = (bodyLimit) => values => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.name) {
    errors.name = 'Required';
  }

  if (!values.body) {
    errors.body = 'Required';
  } else if (values.body.length > bodyLimit) {
    errors.body = `Must be ${bodyLimit} characters or less`;
  }

  return errors;
};

export const ContactForm = () => {
  const bodyLimit = 300

  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      body: '',
    },
    validate: validate(bodyLimit),
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


