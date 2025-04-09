## 📄 ResumeMind - AI-Powered Role Recommendation Tool

**ResumeMind** is a modern web application that allows users to upload their resumes (PDF), which are then analyzed using **Gemini AI (Google Generative AI)** to recommend a **suitable job role** based on their skills and experience.

### 🚀 Features
- 📂 Drag-and-drop or click-to-upload PDF resume
- 🤖 AI-powered job role suggestion using Google Gemini
- ⚡ Instant feedback without page reloads (AJAX)
- 💬 Clean and modern UI built with TailwindCSS
- 🔐 API Key stored securely via `.env`
- 📦 Server-side parsing of resume content using `pdf-parse`

### 🛠️ Tech Stack
- **Frontend**: HTML, TailwindCSS, JavaScript
- **Backend**: Node.js, Express.js, Multer
- **AI**: Google Generative AI (Gemini)
- **PDF Parsing**: pdf-parse
- **Environment Management**: dotenv

### 📷 Demo
![Demo Screenshot](demo.png) <!-- Optional: Add a screenshot here -->

### 🧠 How It Works
1. User uploads a PDF resume.
2. Resume is parsed server-side to extract text.
3. Extracted content is sent as a prompt to Gemini.
4. Gemini responds with a job role recommendation.
5. Result is displayed instantly on the same page.

### 🧪 Run Locally
```bash
git clone https://github.com/yourusername/resume-analyzer.git
cd resume-analyzer
npm install
echo "GEMINI_API_KEY=your_api_key_here" > .env
node index.js
```

### 💡 Use Case
- Students looking for suitable roles
- Job seekers unsure of where to apply
- Resume evaluation tools or career guidance apps

---

Let me know if you want a README file version too!
