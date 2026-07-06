const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Nodemailer Transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', // You can use other services like 'yahoo', 'outlook'
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // Use an app password if using Gmail
  },
});

// Contact Route
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please provide name, email, and message.' });
  }

  // Fallback for missing credentials (to prevent form errors)
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.log("Mock Email Received:");
    console.log(`From: ${name} <${email}>\nMessage: ${message}`);
    return res.status(200).json({ success: true, message: 'Message logged locally (Add email credentials to .env to receive real emails).' });
  }

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER, // Sends the email to yourself
    subject: `New Contact Form Submission from ${name}`,
    text: `You received a new message from your portfolio contact form.\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    replyTo: email,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send message. Please try again later.' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});
