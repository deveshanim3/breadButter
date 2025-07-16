# 🧈 BreadButter - Smart Talent Profile Builder

## ✅ Project Summary
This project is a full-stack web application built for BreadButter's talent onboarding system.  
It helps creators quickly generate their profiles using:
- Instagram/LinkedIn links (mocked responses)
- Resume uploads (PDF file, mocked responses)

The app shows a structured profile preview (bio, skills, portfolio links, work samples) after submission.

---

## 📁 Project Structure
```breadButter/
├── backend/ ➡️ Express Backend
│ ├── controllers/
│ ├── routes/
│ ├── data/
│ └── server.js
└── frontend/ ➡️ React Frontend
├── components/
├── App.jsx
└── index.css
```
---

## 🟣 API Routes (Backend)

| Method | Endpoint | Description |
|---------|-----------|-------------|
| POST | `/api/profile/fetch-profile` | Accepts `{ link }`, returns profile data based on mocked Instagram/LinkedIn |
| POST | `/api/profile/upload-resume` | Accepts file upload (PDF as `resume`), returns mocked profile data |

---

## 🚀 Live Deployment Links

| Service | Live Link |
|----------|------------|
| **Backend Render** | [https://breadbutter-au1t.onrender.com](https://breadbutter-au1t.onrender.com) |
| **Frontend Netlify** | [https://breadbutter-frontend.netlify.app](https://breadbutter-frontend.netlify.app) |

✅ Backend is deployed on Render with CORS enabled.  
✅ Frontend is hosted on Netlify with connected APIs.

---

## 📦 Packages Used

### Backend:
- **express** → For server routing
- **cors** → To enable CORS between frontend and backend
- **multer** → To handle resume PDF uploads
- **fs** → File system module to read local mocked JSON data

### Frontend:
- **axios** → For API requests to backend

---

## 📮 Postman API Collection

> ![Fetch profile](https://github.com/deveshanim3/breadButter/blob/main/frontend/src/assets/Screenshot%202025-07-16%20141103.png?raw=true)
> ![Upload Resume](https://github.com/deveshanim3/breadButter/blob/main/frontend/src/assets/Screenshot%202025-07-16%20141305.png?raw=true)

## API Doc
>[Doc](https://docs.google.com/document/d/1RNFa9PvCngoznZSymbnp7Ld6cpIbXWXnqJdSvC6rsLw/edit?usp=sharing)
---

## 🛠️ How to Run Locally

### Backend Setup
```bash
cd backend
npm install
node index.js
```
### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
