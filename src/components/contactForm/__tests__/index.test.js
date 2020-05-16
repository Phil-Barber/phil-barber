import React from 'react';
import { ToastProvider } from 'react-toast-notifications';
import { render, fireEvent } from '../../../../testUtils';
import { ContactForm } from '../index';

describe('ContactForm', () => {
  let component;

  beforeEach(() => {
    component = render(
      <ToastProvider>
        <ContactForm />
      </ToastProvider>
    );
  });

  it('matches snapshot', () => {
    expect(component.container).toMatchSnapshot();
  });

  describe('validation', () => {
    describe('email', () => {
      const getEmail = (component) =>
        component.getByLabelText('Email Address*');
      let email;

      beforeEach(() => {
        email = getEmail(component);
      });

      it('must be a valid email', async () => {
        fireEvent.change(email, { target: { value: 'not a valid email' } });
        fireEvent.blur(email);
        const error = await component.findByTestId('error');
        expect(error.innerHTML).toBe('Invalid email address');
      });

      it('is required', async () => {
        fireEvent.blur(email);
        const error = await component.findByTestId('error');
        expect(error.innerHTML).toBe('Required');
      });
    });

    describe('name', () => {
      const getName = (component) => component.getByLabelText('Name*');
      let name;

      beforeEach(() => {
        name = getName(component);
      });

      it('is required', async () => {
        fireEvent.blur(name);
        const error = await component.findByTestId('error');
        expect(error.innerHTML).toBe('Required');
      });
    });

    describe('company', () => {
      const getCompany = (component) => component.getByLabelText('Company');
      let company;

      beforeEach(() => {
        company = getCompany(component);
      });

      it('is not required', async () => {
        fireEvent.blur(company);
        await expect(component.findByTestId('error')).rejects.toThrow();
      });
    });

    describe('body', () => {
      const getBody = (component) => component.getByLabelText('Message*');
      let body;

      beforeEach(() => {
        body = getBody(component);
      });

      it('is required', async () => {
        fireEvent.blur(body);
        const error = await component.findByTestId('error');
        expect(error.innerHTML).toBe('Required');
      });

      it('has character limit', async () => {
        let message = '';
        for (let i = 0; i < 300; i++) {
          message += 'a';
        }

        fireEvent.change(body, { target: { value: message } });
        fireEvent.blur(body);
        await expect(component.findByTestId('error')).rejects.toThrow();

        message += 'a';
        fireEvent.change(body, { target: { value: message } });
        fireEvent.blur(body);
        const error = await component.findByTestId('error');
        expect(error.innerHTML).toBe('Must be 300 characters or less');
      });
    });
  });
});
