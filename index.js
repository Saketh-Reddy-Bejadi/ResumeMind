const express = require('express');
const multer = require('multer');
const pdfParse = require('pdf-parse');
const dotenv = require('dotenv');
const fs = require('fs');
const { GoogleGenerativeAI } = require('@google/generative-ai');

require('dotenv').config();
const app = express();
const port = 3000;
const upload = multer({ dest: 'uploads/' });

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);


const model = genAI.getGenerativeModel({
  model: "gemini-2.5-pro-preview-03-25",
  systemInstruction: "Suggest a single role to apply for based on my resume( a pdf file i provide). The suggestion should based on the skills and experience. Do not need of any explantion or reasoning. Just give me the suitable role to apply for.",
  generationConfig: {
    temperature: 0,
    topP: 1,
    topK: 1,
    maxOutputTokens: 65536,
  },
});

app.use(express.static(__dirname));

app.post('/upload', upload.single('resume'), async (req, res) => {
  try {
    const pdfBuffer = fs.readFileSync(req.file.path);
    const pdfData = await pdfParse(pdfBuffer);
    const resumeText = pdfData.text;

    const prompt = `Here is my Resume:\n\n${resumeText}`;
    const result = await model.generateContent(prompt);
    const responseText = result.response.text();

    res.send(responseText);
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to analyze resume. Please try again.");
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
