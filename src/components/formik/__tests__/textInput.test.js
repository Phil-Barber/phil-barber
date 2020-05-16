import React from 'react';
import { render, fireEvent } from '../../../../testUtils';
import { TextInput } from '../textInput';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

describe('TextInput', () => {
  const inputName = 'test-input';
  const label = 'test label';
  const defaultProps = {
    label,
    name: inputName,
  };

  let component;

  beforeEach(() => {
    component = render(
      <Formik
        initialValues={{
          [inputName]: '',
        }}
        validationSchema={Yup.object({
          [inputName]: Yup.string().required('Required'),
        })}
      >
        {() => (
          <Form>
            <TextInput {...defaultProps} />
            );
          </Form>
        )}
      </Formik>
    );
  });

  it('Matches snapshot', () => {
    expect(component.container).toMatchSnapshot();
  });

  it('Shows error on error', async () => {
    fireEvent.blur(component.getByLabelText(label));
    expect(await component.findByTestId('error')).toBeInTheDocument();
  });
});
