const AWS = require('aws-sdk');
const { config } = require('dotenv');

// load configs from dotenv
config();
const SES_CONFIG = {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_SES_REGION,
};

// create a new instance
const AWS_SES = new AWS.SES(SES_CONFIG);

// create function
export const sendEmail = async (recipientEmail, name) => {
    const params = {
        Source: process.env.AWS_SES_SENDER,
        Destination: {
            ToAddresses: [
                recipientEmail
            ],
        },
        ReplyToAddresses: [],
        Message: {
            Body: {
                Html: {
                    Charset: 'UTF-8',
                    Data: '<h1>This is the body of my email!</h1>',
                },
                Text: {
                    Charset: "UTF-8",
                    Data: "This is the body of my email!",
                }
            },
            Subject: {
                Charset: "UTF-8",
                Data: `Hello, ${name}!`,
            }
        },
    };

    try {
        const res = await AWS_SES.sendEmail(params).promise();
        console.log("Email has been sent!", res);
    } catch (err) {
        console.error(err);
    }
}