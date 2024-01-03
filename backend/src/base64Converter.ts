import fs from 'fs';

export const fileToBase64 = (filePath: string) => {
    try {
        // Read the file content
        const fileContent = fs.readFileSync(filePath);
        // Encode the file content as base64
        const base64Data = fileContent.toString('base64');
        console.log("ok conversion to base64");
        return base64Data;
    } catch (error) {
        console.error("Error occurred while converting file to base64:", error);
        return null;
    }
};