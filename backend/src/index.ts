import 'dotenv/config'; 

const { GoogleGenerativeAI } = require("@google/generative-ai");
const API_KEY = process.env.GEMINI_API_KEY; 
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });


const prompt = "Write a simple program of Linear Search in cpp";

async function main() {
    
    const result = await model.generateContentStream(prompt);
    

    for await (const chunk of result.stream) {
        const chunkText = chunk.text();
        process.stdout.write(chunkText);
    }
}

main();