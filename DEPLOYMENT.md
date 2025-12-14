# Deployment Guide

This guide will help you deploy your portfolio with MongoDB backend.

## Current Setup
- **Frontend**: Deployed on Netlify ✅
- **Backend**: Needs to be deployed separately (see options below)

## Step 1: Configure MongoDB Atlas

1. Go to your MongoDB Atlas dashboard
2. Get your connection string:
   - Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy the connection string
3. Replace `<db_password>` with your actual database password
4. Add database name: `portfolio-contacts` (or any name you prefer)

Example connection string:
```
mongodb+srv://chaubeyprashant20_db_user:YOUR_PASSWORD@portfoliocluster.vumafbh.mongodb.net/portfolio-contacts?retryWrites=true&w=majority&appName=portfolioCluster
```

5. **Important**: In MongoDB Atlas, go to "Network Access" and:
   - Add `0.0.0.0/0` to allow all IPs (for production)
   - OR add your backend server's IP address

## Step 2: Deploy Backend Server

Since your frontend is on Netlify, you need to deploy the backend separately. Here are recommended options:

### Option A: Railway (Recommended - Easy & Free tier available)

1. Go to https://railway.app
2. Sign up/login with GitHub
3. Click "New Project" → "Deploy from GitHub repo"
4. Select your repository
5. Add environment variables:
   - `MONGODB_URI`: Your MongoDB connection string (with password)
   - `PORT`: Railway will set this automatically
   - `NODE_ENV`: `production`
   - `FRONTEND_URL`: Your Netlify URL (e.g., `https://your-site.netlify.app`)
6. Railway will auto-detect Node.js and deploy
7. Copy the deployed URL (e.g., `https://your-app.railway.app`)

### Option B: Render (Free tier available)

1. Go to https://render.com
2. Sign up/login
3. Click "New" → "Web Service"
4. Connect your GitHub repository
5. Configure:
   - **Name**: `portfolio-backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `node server/server.js`
   - **Root Directory**: Leave empty
6. Add environment variables:
   - `MONGODB_URI`: Your MongoDB connection string
   - `NODE_ENV`: `production`
   - `FRONTEND_URL`: Your Netlify URL
7. Click "Create Web Service"
8. Copy the deployed URL (e.g., `https://portfolio-backend.onrender.com`)

### Option C: Heroku

1. Install Heroku CLI: https://devcenter.heroku.com/articles/heroku-cli
2. Login: `heroku login`
3. Create app: `heroku create portfolio-backend`
4. Set environment variables:
   ```bash
   heroku config:set MONGODB_URI="your_mongodb_connection_string"
   heroku config:set NODE_ENV="production"
   heroku config:set FRONTEND_URL="https://your-site.netlify.app"
   ```
5. Deploy: `git push heroku main`
6. Copy the deployed URL

## Step 3: Update Frontend for Production

### Option 1: Netlify Environment Variables (Recommended)

1. Go to your Netlify dashboard
2. Navigate to: Site settings → Environment variables
3. Add:
   - `REACT_APP_API_URL`: `https://your-backend-url.railway.app/api/contact/submit`
     (Replace with your actual backend URL)
4. Redeploy your site

### Option 2: Update ContactUs.js directly

Update the API_URL in `src/components/ContactUs.js`:

```javascript
const API_URL = process.env.REACT_APP_API_URL || 'https://your-backend-url.railway.app/api/contact/submit';
```

Then rebuild and redeploy to Netlify.

## Step 4: Test the Deployment

1. Visit your Netlify site
2. Fill out the contact form
3. Submit the form
4. Check your MongoDB Atlas database:
   - Go to MongoDB Atlas → Collections
   - You should see a `contacts` collection with your form submission

## Step 5: Verify Backend is Running

Visit your backend health check endpoint:
```
https://your-backend-url.railway.app/api/health
```

You should see:
```json
{
  "status": "OK",
  "message": "Server is running",
  "timestamp": "..."
}
```

## Troubleshooting

### CORS Errors
- Make sure `FRONTEND_URL` in backend matches your Netlify URL exactly
- Check that CORS is configured correctly in `server/server.js`

### Connection Errors
- Verify MongoDB URI is correct (check password)
- Ensure IP whitelist in MongoDB Atlas includes `0.0.0.0/0` or your backend server IP
- Check backend logs for connection errors

### Form Not Submitting
- Check browser console for errors
- Verify `REACT_APP_API_URL` is set correctly in Netlify
- Test backend endpoint directly with Postman or curl

### Backend Not Starting
- Check that all dependencies are in `package.json`
- Verify `server/server.js` is the correct entry point
- Check backend logs for errors

## Quick Test Commands

Test backend locally:
```bash
npm run server
```

Test API endpoint:
```bash
curl -X POST http://localhost:5000/api/contact/submit \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","phone":"1234567890","message":"Test message"}'
```

## Environment Variables Summary

### Backend (.env or hosting platform):
- `MONGODB_URI`: MongoDB connection string
- `PORT`: Server port (usually auto-set by hosting)
- `NODE_ENV`: `production`
- `FRONTEND_URL`: Your Netlify URL

### Frontend (Netlify Environment Variables):
- `REACT_APP_API_URL`: Your backend API URL

