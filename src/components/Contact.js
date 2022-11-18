import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const Contact = () => {
  return (
    <div id="contact" className="segment">
      <div id="contact-body">
        <div id="contact-form">
          <p>placeholder: Name</p>
          <p>placeholder: Email</p>
          <p>placeholder: Subject</p>
          <p>placeholder: Message</p>
        </div>
        <div id="contact-text">
          <h1>I'd love to hear from you</h1>
          <p>
            If you want to hear more or chat about my work, feel free to reach
            out on any of the attached links or send me a message here! I'm all
            ears 👂
          </p>
          {/* <p>
            If you want to hear more or have any questions about my work, reach
            me via the contact form or at:
          </p>
          <a href="mailto:hannah.j.sommer@gmail.com">
            hannah.j.sommer@gmail.com
          </a> */}
          <div id="alt-contacts">
            <div className="contact-icon">
              <a href="https://www.linkedin.com/in/hannahsommer/">
                {/* <FaLinkedin /> */}
                <FontAwesomeIcon icon={faLinkedin} size="3x" fixedWidth />
              </a>
            </div>
            <div className="contact-icon">
              <a href="https://github.com/sommerh">
                <FontAwesomeIcon icon={faGithub} size="3x" fixedWidth />
              </a>
            </div>
            <div className="contact-icon">
              <a href="mailto:hannah.j.sommer@gmail.com">
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
