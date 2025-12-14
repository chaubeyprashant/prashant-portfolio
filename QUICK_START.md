# Quick Start Guide - MongoDB Setup

## 🚀 Quick Setup Steps

### 1. Create `.env` file in root directory

Create a file named `.env` in the root of your project with:

```env
MONGODB_URI=mongodb+srv://chaubeyprashant20_db_user:YOUR_PASSWORD@portfoliocluster.vumafbh.mongodb.net/portfolio-contacts?retryWrites=true&w=majority&appName=portfolioCluster
PORT=5000
NODE_ENV=development
FRONTEND_URL=https://your-netlify-site.netlify.app
```

**Important**: Replace `YOUR_PASSWORD` with your actual MongoDB Atlas password!

### 2. Test Locally

```bash
# Terminal 1 - Start backend
npm run server

# Terminal 2 - Start frontend
npm start
```

Visit http://localhost:3000 and test the contact form.

### 3. Deploy Backend (Choose One)

#### Option A: Railway (Easiest)
1. Go to https://railway.app
2. Sign up with GitHub
3. New Project → Deploy from GitHub
4. Select your repo
5. Add environment variables:
   - `MONGODB_URI` (with your password)
   - `NODE_ENV=production`
   - `FRONTEND_URL` (your Netlify URL)
6. Copy the Railway URL

#### Option B: Render
1. Go to https://render.com
2. New → Web Service
3. Connect GitHub repo
4. Settings:
   - Build: `npm install`
   - Start: `node server/server.js`
5. Add same environment variables
6. Copy the Render URL

### 4. Update Netlify

1. Go to Netlify dashboard
2. Site settings → Environment variables
3. Add: `REACT_APP_API_URL` = `https://your-railway-url.railway.app/api/contact/submit`
4. Redeploy site

### 5. Test Production

1. Visit your Netlify site
2. Submit contact form
3. Check MongoDB Atlas → Collections → `contacts` table

## ✅ Done!

Your contact form will now save to MongoDB when visitors submit on your Netlify site.

