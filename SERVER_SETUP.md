# Server Setup Guide

This guide will help you set up the MongoDB backend for the contact form.

## Prerequisites

1. **MongoDB Database**: You need a MongoDB database. You can use:
   - **MongoDB Atlas** (Free cloud database): https://www.mongodb.com/cloud/atlas
   - **Local MongoDB**: Install MongoDB locally on your machine

## Setup Steps

### 1. Get MongoDB Connection String

#### Option A: MongoDB Atlas (Recommended for Production)
1. Go to https://www.mongodb.com/cloud/atlas
2. Sign up for a free account
3. Create a new cluster (free tier is available)
4. Create a database user
5. Whitelist your IP address (or use 0.0.0.0/0 for all IPs in development)
6. Click "Connect" → "Connect your application"
7. Copy the connection string (looks like: `mongodb+srv://username:password@cluster.mongodb.net/...`)

#### Option B: Local MongoDB
If you have MongoDB installed locally, use:
```
mongodb://localhost:27017/portfolio-contacts
```

### 2. Configure Environment Variables

1. Create a `.env` file in the root directory:
```bash
cp .env.example .env
```

2. Edit `.env` and add your MongoDB connection string:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio-contacts?retryWrites=true&w=majority
PORT=5000
NODE_ENV=development
```

**Important**: Replace `username` and `password` with your actual MongoDB credentials.

### 3. Start the Server

Run the server in a separate terminal:
```bash
npm run server
```

The server will start on port 5000 (or the port specified in your `.env` file).

### 4. Start the React App

In another terminal, start the React app:
```bash
npm start
```

### 5. Configure Frontend API URL

The frontend is configured to use `http://localhost:5000/api/contact/submit` by default.

For production, create a `.env` file in the root directory with:
```
REACT_APP_API_URL=https://your-backend-url.com/api/contact/submit
```

## API Endpoints

### POST `/api/contact/submit`
Submit a contact form entry.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890",
  "message": "Hello, I'm interested in your services."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Contact form submitted successfully!",
  "data": { ... }
}
```

### GET `/api/contact/all`
Get all contact form submissions (for admin purposes).

### GET `/api/health`
Health check endpoint.

## Testing

1. Make sure the server is running: `npm run server`
2. Open the React app: `npm start`
3. Fill out the contact form and submit
4. Check the server console for confirmation
5. Check your MongoDB database to see the saved entry

## Troubleshooting

- **Connection Error**: Make sure your MongoDB URI is correct and your IP is whitelisted (for Atlas)
- **CORS Error**: The server has CORS enabled, but make sure the frontend URL matches
- **Port Already in Use**: Change the PORT in `.env` if 5000 is already in use

## Production Deployment

For production:
1. Set up MongoDB Atlas (or your production MongoDB instance)
2. Update `REACT_APP_API_URL` in your production environment
3. Deploy the server (e.g., Heroku, Railway, Render, etc.)
4. Make sure to set environment variables in your hosting platform

