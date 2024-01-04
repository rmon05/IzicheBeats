"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendRawEmail = void 0;
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const dotenv_1 = require("dotenv");
// load configs from dotenv
if (process.env.NODE_ENV !== 'production') {
    dotenv_1.config();
}
const SES_CONFIG = {
    accessKeyId: process.env.AWS_SES_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SES_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
};
// create a new instance of SES
const AWS_SES = new aws_sdk_1.default.SES(SES_CONFIG);
// function to create raw message
const createRawMessage = (sender, recipient, subject, text, title, base64File) => {
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
        `Content-Disposition: attachment; filename="${title}.mp3"`,
        `\n`,
        base64File,
        `\n`,
        `--${boundary}--`,
    ];
    return rawMessage.join('\n');
};
// function to send the email with the raw message
exports.sendRawEmail = async (sender, recipient, subject, text, title, base64File) => {
    try {
        const params = {
            RawMessage: {
                Data: createRawMessage(sender, recipient, subject, text, title, base64File),
            },
        };
        const res = await AWS_SES.sendRawEmail(params).promise();
        console.log("Email has been sent!", res);
    }
    catch (err) {
        console.error(err);
    }
};
//# sourceMappingURL=sendEmail.js.map