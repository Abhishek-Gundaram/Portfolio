import React, { useEffect, useState } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser';
import { Box, Button, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const Contact = () => {
  useEffect(() => {
    emailjs.init('NWM2PAxDJE4RdGh8G'); // <-- replace
  }, []);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const sendEmail = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!name || !email || !message) return;

    emailjs
      .send('service_syzjmew', 'template_yjfu1ro', {
        name,
        email,
        message,
      })
      .then(() => {
        setSuccess(true);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch(() => alert('Failed to send message. Try again later.'));
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h1>Contact Me</h1>
        <p>Please send me an email for any open roles or any recommendations</p>

        <Box className="contact-form">
          <div className="form-row">
            <TextField
              fullWidth
              variant="outlined"
              label="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              fullWidth
              variant="outlined"
              label="Email / Phone"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <TextField
            fullWidth
            multiline
            rows={6}
            variant="outlined"
            label="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <div className="send-btn-wrapper">
            <Button
              type="button"
              variant="contained"
              endIcon={<SendIcon />}
              onClick={sendEmail}
            >
              Send
            </Button>
          </div>

          {success && <p className="success-msg">Message sent successfully ✔</p>}
        </Box>
      </div>
    </section>
  );
};

export default Contact;
