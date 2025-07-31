# LimitInt AI 🏈

## 📌 Overview
LimitInt AI is an interactive web application that teaches users how to read football defenses using quizzes and an AI-powered coach.

---

## ✅ Features
- 🏠 Home Page: Ask AI for advice.
- ❓ Quiz Page: Test your knowledge.
- ✉️ Subscribe Page: Simulated subscription.
- 🔍 Learn Page: Search any defense and get AI explanations.
- 🤖 AI Integration: OpenAI GPT API provides real answers.

---

## ✅ Project Structure
```
limitintai/
 ├── backend/
 │    ├── server.js
 │    ├── package.json
 │    └── .env
 └── frontend/
      ├── index.html
      ├── quiz.html
      ├── subscribe.html
      ├── learn.html
      ├── style.css
      ├── app.js
      └── ai-helper.js
```

---

## ✅ Setup & Deployment (Beginner Friendly)

### 1️⃣ Create GitHub Repository
1. Go to [GitHub.com](https://github.com) → Create `limitintai`.
2. Upload the `frontend` and `backend` folders.

### 2️⃣ Deploy Backend on Render
1. Sign up at [https://render.com](https://render.com).
2. Click **New Web Service** → Select `backend` folder.
3. Add environment variable:
   - Name: `OPENAI_API_KEY`
   - Value: Your OpenAI key.
4. Deploy → Copy backend URL (e.g. `https://limitintai-backend.onrender.com`).

### 3️⃣ Update Frontend
- In `ai-helper.js`, set:
```
const API_URL = "https://limitintai-backend.onrender.com/ask-ai";
```

### 4️⃣ Deploy Frontend on GitHub Pages
1. Go to repo → Settings → Pages.
2. Set branch: `main`, folder: `/frontend`.
3. Save → Your site will be live at:
```
https://your-username.github.io/limitintai/
```

---

## ✅ How It Works
- GitHub Pages hosts the static website.
- Render hosts the backend API (secure AI calls).
- AI requests flow:
```
Frontend → Backend → OpenAI → Backend → Frontend
```

---

## ✅ Files Included
- Complete project (frontend + backend)

