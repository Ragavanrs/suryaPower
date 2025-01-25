import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState('');

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, phone, message } = formData;

    // Basic validation
    if (!name || !phone || !message) {
      setFormError('All fields are required.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/contact', formData);
      if (response.status === 200) {
        setFormSuccess('Your message has been sent successfully!');
        setFormError('');
        setFormData({ name: '', phone: '', message: '' }); // Reset form
      }
    } catch (error) {
      setFormError('Failed to send your message. Please try again later.');
    }
  };

  return (
    <Box sx={{ maxWidth: '600px', margin: 'auto', padding: '20px' }}>
      <Typography variant="h4" gutterBottom>Contact Us</Typography>

      {formError && <Typography color="error">{formError}</Typography>}
      {formSuccess && <Typography color="success">{formSuccess}</Typography>}

      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          required
          sx={{ marginBottom: '20px' }}
        />

        <TextField
          label="Phone Number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          fullWidth
          required
          sx={{ marginBottom: '20px' }}
        />

        <TextField
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          fullWidth
          required
          multiline
          rows={4}
          sx={{ marginBottom: '20px' }}
        />

        <Button variant="contained" type="submit" fullWidth>Send Message</Button>
      </form>
    </Box>
  );
};

export default Contact;
