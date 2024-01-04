import aws from "aws-sdk";
import { config } from "dotenv"
if (process.env.NODE_ENV !== 'production') {
    config();
}

// create new aws s3 instance
const region = process.env.AWS_REGION;
const bucketName = process.env.AWS_S3_BUCKET_NAME;
const accessKeyId = process.env.AWS_S3_ACCESS_KEY;
const secretAccessKey = process.env.AWS_S3_SECRET_ACCESS_KEY;

const s3 = new aws.S3({
    region: region,
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,
    signatureVersion: 'v4'
})

// function to get audio file
export const getAudio = async (s3Key:string) => {
    const params = {Bucket:bucketName, Key:s3Key};
    try {
        const data = await s3.getObject(params).promise();
        
        // convert to base64 and return
        const base64Data = data.Body.toString('base64');
        return base64Data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

