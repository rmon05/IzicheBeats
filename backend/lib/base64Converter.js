"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileToBase64 = void 0;
const fs_1 = __importDefault(require("fs"));
exports.fileToBase64 = (filePath) => {
    try {
        // Read the file content
        const fileContent = fs_1.default.readFileSync(filePath);
        // Encode the file content as base64
        const base64Data = fileContent.toString('base64');
        console.log("ok conversion to base64");
        return base64Data;
    }
    catch (error) {
        console.error("Error occurred while converting file to base64:", error);
        return null;
    }
};
//# sourceMappingURL=base64Converter.js.map