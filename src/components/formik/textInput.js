import React from 'react'
import { useField } from 'formik'

export const TextInput = ({ label, textarea, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      { textarea 
        ? <textarea className="textarea-input" {...field} {...props} />
        : <input className="text-input" {...field} {...props} />
      }
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

