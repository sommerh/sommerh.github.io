import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <div id="contact" className="segment yellow-bg-lt">
      <div id="contact-body">
        <ContactForm />
        <div id="contact-text">
          <h1 className="font-link pink-txt">I'd love to hear from you</h1>
          <p>
            Reach out on any of the attached links or send me a message here to
            hear more!
          </p>
          <div id="alt-contacts">
            <div className="contact-icon">
              <a
                href="https://www.linkedin.com/in/hannahsommer/"
                aria-label="View Hannah's LinkedIn profile"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} size="3x" fixedWidth />
              </a>
            </div>
            <div className="contact-icon">
              <a
                href="https://github.com/sommerh"
                aria-label="View Hannah's GitHub profile"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub} size="3x" fixedWidth />
              </a>
            </div>
            <div className="contact-icon">
              <a
                href="mailto:hannah.j.sommer@gmail.com"
                aria-label="Email Hannah"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faEnvelope} size="3x" fixedWidth />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
