import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();


const sendMail = async (req, res) => {
    try {
        const { reciverMail, message } = req.body;

        
        if (!reciverMail || !message) {
            return res.status(400).json({
                msg: "Provide mail and message"
            });
        }

        // transporter
        const transporter = nodemailer.createTransport({
            host: "smtp-relay.brevo.com",
            port: 587,
            secure: false,
            auth: {
                user: process.env.BREVO_USERNAME,
                pass: process.env.BREVO_PASSWORD
            }
        });

        // mail options
        const mailOptions = {
            from: "sharmachirag242004@gmail.com",
            to: reciverMail,
            subject: "Welcome to Our Service",
            text: `Hi ${reciverMail},\n\n${message}\n\nRegards`
        };

        // sending
        await transporter.sendMail(mailOptions);

        return res.json({
            msg: `Email sent successfully to ${reciverMail}`
        });

    } catch (err) {
        console.log(`error in send mail controller ${err}`);
        return res.status(500).json({
            msg: "Internal server error"
        });
    }
}

export default sendMail;