import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const sendMail = async(req, res) => {
    try {
        const { reciverMail, message } = req.body;
        if(!reciverMail || !message) { 
            res.status(400).json({
                msg: "Provide mail and message"
            });
            
            const transporter = nodemailer.createTransport({
            port: 587,
            secure: false,
            host: 'smtp-relay.brevo.com',
            auth: {
                user: process.env.BREVO_USERNAME,
                pass: process.env.BREVO_PASSWORD
            }
        });

        const mailOptions = {
            from: "sharmachirag242004@gmail.com",
            to: reciverMail,
            subject: "Welcome to Our Service",
            text: `Hi ${reciverMail},\n\n${message}\n\nRegards`
        };

         await transporter.sendMail(mailOptions);

          res.json({
            msg: `Email sent successfully to ${reciverEmail}`
        });
        }
    } catch(err) {
        console.log(`error in send mail controller ${err}`);
        return res.json({
            msg: "Internal server error"
        })
    }
}

export default sendMail;