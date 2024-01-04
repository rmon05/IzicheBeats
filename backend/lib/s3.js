"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAudio = void 0;
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const dotenv_1 = require("dotenv");
if (process.env.NODE_ENV !== 'production') {
    dotenv_1.config();
}
// create new aws s3 instance
const region = process.env.AWS_REGION;
const bucketName = process.env.AWS_S3_BUCKET_NAME;
const accessKeyId = process.env.AWS_S3_ACCESS_KEY;
const secretAccessKey = process.env.AWS_S3_SECRET_ACCESS_KEY;
const s3 = new aws_sdk_1.default.S3({
    region: region,
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,
    signatureVersion: 'v4'
});
// function to get audio file
exports.getAudio = async (s3Key) => {
    const params = { Bucket: bucketName, Key: s3Key };
    try {
        const data = await s3.getObject(params).promise();
        // convert to base64 and return
        const base64Data = data.Body.toString('base64');
        return base64Data;
    }
    catch (error) {
        console.error(error);
        return null;
    }
};
//# sourceMappingURL=s3.js.map