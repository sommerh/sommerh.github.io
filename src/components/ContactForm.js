import React, { useState } from 'react';
import { sendForm } from 'emailjs-com';
import ContactError from './ContactError';

const ContactForm = () => {
  const [toSend, setToSend] = useState({
    user_name: '',
    user_email: '',
    user_subject: '',
    user_message: '',
  });
  const [error, setError] = useState('');

  const handleClick = (evt) => {
    setToSend({ ...toSend, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    if (!toSend.user_name || !toSend.user_email || !toSend.user_message) {
      setError('requirement');
    } else if (
      !toSend.user_email.includes('@') ||
      !toSend.user_email.includes('.')
    ) {
      setError('email');
    } else {
      try {
        const response = await sendForm(
          'default_service',
          'template_zswt3ax',
          evt.target,
          '3hGwrodFC95ySS1Gm'
        );
        console.log('📬 SUCCESS!', response.status, response.text);
        setToSend({
          user_name: '',
          user_email: '',
          user_subject: '',
          user_message: '',
        });
      } catch (err) {
        setError('send');
        console.log('👀 Message failed to send. . .', err);
      }
    }
  };

  return (
    <div id="contact-form">
      {error && <ContactError type={error} />}
      <form onSubmit={handleSubmit}>
        <label>
          Full name<span className="required">*</span>{' '}
        </label>
        <input
          type="text"
          name="user_name"
          value={toSend.user_name}
          onChange={handleClick}
        />
        <label>
          Email<span className="required">*</span>{' '}
        </label>
        <input
          type="text"
          name="user_email"
          value={toSend.user_email}
          onChange={handleClick}
        />
        <label>Subject</label>
        <input
          type="text"
          name="user_subject"
          value={toSend.user_subject}
          onChange={handleClick}
        />
        <label>
          Message<span className="required">*</span>{' '}
        </label>
        <input
          type="textarea"
          name="user_message"
          value={toSend.user_message}
          onChange={handleClick}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactForm;
