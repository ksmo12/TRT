require('dotenv').config(); // Load from .env
const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY); // Use your .env key

async function sendTestEmail() {
  try {
    const data = await resend.emails.send({
      from: process.env.FROM_EMAIL,      // Must match your verified Resend domain email
      to: 'busmeup13@gmail.com',        // Replace with the email you want to test with
      subject: '✅ Test Email from therealthespians.com',
      html: '<p>Hello! This is a test email from your site using Resend.</p>',
    });

    console.log('✅ Email sent successfully:', data);
  } catch (error) {
    console.error('❌ Error sending email:', error);
  }
}

sendTestEmail();