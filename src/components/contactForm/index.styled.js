import styled from 'styled-components';
import { TextInput, Label, Input } from './formik/textInput';

export const TextInputStyled = styled(TextInput)`
  ${Label} {
    display: block;
  }
`;

export const FullWidthInput = styled(TextInputStyled)`
  ${Input} {
    width: 100%;
  }
`;

export const ShortInput = styled(TextInputStyled)`
  width: 50%;
`;

export const MessageInput = styled(FullWidthInput)`
  ${Input} {
    height: 200px;
  }
`;

export const FlexBox = styled.div`
  display: flex;
`;

export const SubmitButton = styled.button`
  flex-grow: 1;
`;

export const RequiredText = styled.div`
  font-size: 12px;
  flex-grow: 1;
  text-align: right;
`;
