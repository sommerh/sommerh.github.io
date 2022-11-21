import React from 'react';

const ContactError = ({ type }) => {
  let message =
    type === 'requirement'
      ? 'Please make sure your name, email, and message are filled out'
      : type === 'email'
      ? 'Please enter a valid email address'
      : 'Message did not send - please try again';

  return (
    <>
      <p className="error">{message}</p>
    </>
  );
};

export default ContactError;
