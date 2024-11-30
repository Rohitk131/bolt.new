require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const API_KEY = process.env.GEMINI_API_KEY; 
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const aiPrompt = "120gm protein from veg food for college students";

async function main(){
    const result = await model.generateContent(aiPrompt);
    console.log(result.response.text());
}

main(); 