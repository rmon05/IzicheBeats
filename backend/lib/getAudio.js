"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertFileToBase64 = void 0;
const fs = require('fs');
exports.convertFileToBase64 = (filePath) => {
    try {
        // Read the file content
        const fileContent = fs.readFileSync(filePath);
        // Encode the file content as base64
        const base64Data = fileContent.toString('base64');
        return base64Data;
    }
    catch (error) {
        console.error("Error occurred while converting file to base64:", error);
        return null;
    }
};
//# sourceMappingURL=getAudio.js.map