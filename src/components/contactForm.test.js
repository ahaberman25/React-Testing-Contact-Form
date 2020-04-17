import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ContactForm from './ContactForm';

test(" form is rendering", () => {
  render(<ContactForm/>);
});

test("creates a new user", () => {
  // checks if form renders
  const { getByLabelText, getByTestId } = render(<ContactForm/>);
  const firstNameInput = getByLabelText(/first Name/i);
  const lastNameInput = getByLabelText(/last Name/i);
  const emailInput = getByLabelText(/email/i);
  const messageInput = getByLabelText(/message/i);

    // checks sample inputs
    fireEvent.change(firstNameInput, {target:{value:'first name'}});
    fireEvent.change(lastNameInput, {target:{value:'last name'}});
    fireEvent.change(emailInput, {target:{value:'email'}});
    fireEvent.change(messageInput, {target:{value:'message'}});

    // expected to be
    expect(firstNameInput.value).toBe('first name');
    expect(lastNameInput.value).toBe('last name');
    expect(emailInput.value).toBe('email');
    expect(messageInput.value).toBe('message');

    fireEvent.click(getByTestId(/submit/i)); // form will submit

})