import AWS from 'aws-sdk';
import { config } from 'dotenv';

// load configs from dotenv
config();
const SES_CONFIG = {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_SES_REGION,
};

// create a new instance of SES
const AWS_SES = new AWS.SES(SES_CONFIG);

// function to create raw message
const createRawMessage = (sender, recipient, subject, text, base64File:string) => {
    const boundary = "____Next____";

    const rawMessage = [
        `From: ${sender}`,
        `To: ${recipient}`,
        `Subject: ${subject}`,
        `MIME-Version: 1.0`,
        `Content-Type: multipart/alternative; boundary="${boundary}"`,
        `\n`,
        `--${boundary}`,
        `Content-Type: text/plain; charset=UTF-8`,
        `Content-Transfer-Encoding: 7bit`,
        `\n`,
        text,
        `\n`,
        `--${boundary}`,
        `Content-Type: audio/mpeg`,
        `Content-Transfer-Encoding: base64`,
        `Content-Disposition: attachment; filename="audio.mp3"`,
        `\n`,
        base64File,
        `\n`,
        `--${boundary}--`,
    ];
    return rawMessage.join('\n');
};

// function to send the email with the raw message
export const sendRawEmail = async (sender, recipient, subject, text, base64File : string) => {
    try {
        const params = {
            RawMessage: {
                Data: createRawMessage(sender, recipient, subject, text, base64File),
            },
        };
        const res = await AWS_SES.sendRawEmail(params).promise();
        console.log("Email has been sent!", res);
    } catch (err) {
        console.error(err);
    }
}