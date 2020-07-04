import * as React from 'react';
import { useField, FieldConfig } from 'formik';
import styled from 'styled-components';

export const InputContainer = styled.div`
  min-height: 84px;
`;

export const Label = styled.label``;
export const Input = styled.input`
  width: 100%;
`;
export const Error = styled.div`
  color: red;
`;

interface Props extends FieldConfig {
  label: string;
  className?: string;
  textarea?: boolean;
  id?: string;
  placeholder?: string;
}

export const TextInput: React.FC<Props> = ({
  label,
  className,
  textarea,
  id,
  ...props
}: Props) => {
  const [field, meta] = useField(props);
  const inputId = id || props.name;
  return (
    <InputContainer className={className}>
      <Label htmlFor={inputId}>{label}</Label>
      <Input
        id={inputId}
        {...field}
        {...props}
        as={textarea ? 'textarea' : 'input'}
      />
      {meta.touched && meta.error && (
        <Error className="error" data-testid="error">
          {meta.error}
        </Error>
      )}
    </InputContainer>
  );
};
