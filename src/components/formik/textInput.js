import React from 'react';
import { useField } from 'formik';
import styled from 'styled-components';

export const InputContainer = styled.div`
  min-height: 84px;
`;

export const Label = styled.label``;
export const Input = styled.input``;
export const Error = styled.div`
  color: red;
`;

export const TextInput = ({ label, className, textarea, ...props }) => {
  const [field, meta] = useField(props);
  const inputId = props.id || props.name;
  return (
    <InputContainer className={className}>
      <Label for={inputId}>{label}</Label>
      <Input
        id={inputId}
        as={textarea ? 'textarea' : 'input'}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <Error className="error">{meta.error}</Error>
      ) : null}
    </InputContainer>
  );
};
