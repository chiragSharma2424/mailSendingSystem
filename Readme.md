📧 Mail Sending System (MERN + Brevo SMTP)

This project is a Mail Sending System built using the MERN stack and Brevo SMTP. It allows users to send emails directly from a React frontend through a secure Node.js backend using Nodemailer and Brevo’s SMTP relay service.

The goal of the project is to provide a simple, production-ready example of integrating an email-sending feature inside a MERN application.

🚀 Features

Send emails using Brevo SMTP

Backend API created with Express + Nodemailer

Frontend built with React + Axios

Uses environment variables for secure credentials

Proper error handling and validation

Clean and modern UI using Tailwind CSS


🛠️ Tech Stack
Frontend

React

Axios

Tailwind CSS

Backend

Node.js

Express.js

Nodemailer

dotenv

Email Provider

Brevo SMTP (smtp-relay.brevo.com)

📡 API Endpoint
POST /api/v2/send-mail
Request Body:

{
  "reciverMail": "example@gmail.com",
  "message": "This is a test email"
}


{
  "msg": "Email sent successfully to example@gmail.com"
}
