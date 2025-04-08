# Anonymous Confessions

A real-time anonymous confession platform where users can share their thoughts and react to others' confessions which get's expired and deleted after 60 seconds. Built with React and Node.js, featuring Socket.IO for real-time updates and MongoDB for data persistence.

- Forntend is live at: https://anonymous-confessions-app.vercel.app/
- Backend is live at: https://anonymous-confessions.onrender.com/

## Features

- **Real-time Confessions**: Instantly see new confessions as they're posted
- **Anonymous Posting**: Share thoughts without revealing identity
- **Reaction System**: React to confessions with various emotions
- **Auto-Expiration**: Confessions automatically expire after a duration of 60 seconds
- **Responsive Design**: Seamless experience across all devices
- **Error Handling**: Robust error management with user feedback

## Tech Stack

### Frontend
- React 19.0.0
- Vite 6.2.0
- TailwindCSS 4.1.3
- Socket.IO Client 4.8.1
- Framer Motion for animations
- Sonner for toast notifications

### Backend
- Node.js
- Express 5.1.0
- MongoDB with Mongoose 8.13.2
- Socket.IO 4.8.1
- CORS for cross-origin support

## Project Structure

### Frontend (`/frontend`)
```
frontend/
├── src/
│   ├── api/          # API service layer
│   ├── components/   # React components
│   ├── config/       # Configuration files
│   ├── lib/          # Utility functions
│   └── App.jsx       # Main application component
```

### Backend (`/backend`)
```
backend/
├── src/
│   ├── config/       # Configuration settings
│   ├── controllers/  # Request handlers
│   ├── middleware/   # Custom middleware
│   ├── models/       # Database models
│   ├── routes/       # API routes
│   ├── services/     # Business logic
│   ├── socket/       # Socket.IO setup
│   └── utils/        # Utility functions
```

## Installation & Setup

### Prerequisites
- Node.js (Latest LTS version)
- MongoDB
- npm or yarn

### Environment Variables

#### Backend (.env)
```
PORT=3000
MONGODB_URI=your_mongodb_uri
```

#### Frontend (.env)
```
VITE_API_URL=http://localhost:3000
VITE_SOCKET_URL=http://localhost:3000
```

### Installation Steps

1. Clone the repository
```bash
git clone https://github.com/devilkiller-ag/anonymous_confessions
cd anonymous_confessions
```

2. Backend Setup
```bash
cd backend
npm install
npm run dev
```

3. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

The application will be available at:
- Frontend: http://localhost:5173, https://anonymous-confessions-app.vercel.app/
- Backend: http://localhost:8080, https://anonymous-confessions.onrender.com

## API Documentation

### Endpoints

#### Confessions
- `GET /api/confessions`
  - Fetch all active confessions
  - Response: Array of confession objects

- `POST /api/confessions`
  - Create a new confession
  - Body: `{ "message": "string" }`

- `POST /api/confessions/:id/react`
  - Add reaction to a confession
  - Body: `{ "type": "string" }`

### Socket Events

- `new_confession`: Emitted when a new confession is created
- `update_reaction`: Emitted when a confession receives a reaction
- `confession_expired`: Emitted when a confession expires

## Author

[**Ashmit JaiSarita Gupta**](https://ashmit.dev)
