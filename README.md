# 🎵 MusicHub

<div align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" />
</div>

<br />

<div align="center">
  <h3>🎧 A Modern Music Streaming Platform</h3>
  <p>Experience music like never before with MusicHub - a full-featured Spotify-inspired web application</p>
</div>

---

## ✨ Features

### 🎵 **Core Music Features**
- **Advanced Music Player** - Play, pause, skip, and seek with smooth progress bar
- **Smart Queue System** - Add songs to "Play Next" queue for seamless listening
- **High-Quality Audio Streaming** - Crystal clear audio with optimized buffering

### ❤️ **Personalization**
- **Like/Unlike System** - Save your favorite tracks with instant feedback
- **Custom Playlists** - Create, edit, and manage personalized playlists
- **Smart Library** - Access all liked songs and playlists in one place

### 🎨 **User Experience**
- **Spotify-Inspired UI** - Clean, modern interface with smooth animations
- **Responsive Design** - Perfect experience across desktop, tablet, and mobile
- **Interactive Components** - Hover effects, loading states, and micro-interactions
- **Real-time Search** - Instantly find songs, artists, and albums

### 🔐 **User Management**
- **Secure Authentication** - JWT-based login/logout system
- **Persistent Sessions** - Stay logged in across browser sessions
- **User Profiles** - Personalized experience for each user

---

## 🛠️ Tech Stack

### **Frontend**
- **React 18** - Modern React with hooks and functional components
- **Tailwind CSS** - Utility-first CSS framework for custom styling
- **Lucide React** - Beautiful, customizable icons
- **React Router** - Client-side routing and navigation

### **Backend**
- **Node.js** - JavaScript runtime for server-side development
- **Express.js** - Fast, minimalist web framework
- **JWT** - Secure token-based authentication
- **Bcrypt** - Password hashing and security

### **Database**
- **MongoDB** - NoSQL database for flexible data storage
- **Mongoose** - ODM for MongoDB with elegant schemas

### **Development Tools**
- **Vite** - Lightning-fast build tool and dev server
- **ESLint** - Code quality and consistency
- **Prettier** - Code formatting

---

## 📁 Project Structure

```
MusicHub-main/
├── 📂 client/                 # React frontend
│   ├── 📂 src/
│   │   ├── 📂 components/     # Reusable UI components
│   │   ├── 📂 pages/         # Page components
│   │   ├── 📂 hooks/         # Custom React hooks
│   │   ├── 📂 services/      # API services
│   │   ├── 📂 utils/         # Helper functions
│   │   └── 📂 assets/        # Images, icons, styles
│   └── 📄 package.json
├── 📂 server/                 # Express backend
│   ├── 📂 models/            # Database schemas
│   ├── 📂 routes/            # API endpoints
│   ├── 📂 middleware/        # Authentication & validation
│   ├── 📂 controllers/       # Business logic
│   └── 📄 server.js
├── 📄 README.md
└── 📄 .gitignore
```

---

## 🚀 Quick Start

### **Prerequisites**
- Node.js (v16 or higher)
- npm or yarn
- MongoDB (local or cloud)

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/MusicHub.git
   cd MusicHub-main
   ```

2. **Install backend dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../client
   npm install
   ```

4. **Environment Setup**
   
   Create `.env` file in the `server` directory:
   ```env
   # Server Configuration
   PORT=5000
   NODE_ENV=development
   
   # Database
   MONGODB_URI=mongodb://localhost:27017/musichub
   # OR for MongoDB Atlas:
   # MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/musichub
   
   # Authentication
   JWT_SECRET=your_super_secure_jwt_secret_key_here
   JWT_EXPIRES_IN=7d
   
   # CORS
   CLIENT_URL=http://localhost:3000
   ```

5. **Start the application**
   
   **Terminal 1 - Backend:**
   ```bash
   cd server
   npm run dev
   ```
   
   **Terminal 2 - Frontend:**
   ```bash
   cd client
   npm start
   ```

6. **Access the application**
   - Frontend: `http://localhost:3000`
   - Backend API: `http://localhost:5000`

---

## 🎯 Usage

### **Getting Started**
1. **Register/Login** - Create an account or sign in
2. **Explore Music** - Browse the music library
3. **Create Playlists** - Build your personal collections
4. **Like Songs** - Save favorites to your library
5. **Enjoy Seamless Playback** - Use the advanced player controls

### **Key Features Guide**

#### 🎵 **Music Player**
- Click any song to start playing
- Use spacebar for play/pause
- Drag the progress bar to seek
- Volume control and mute functionality

#### ❤️ **Likes & Playlists**
- Heart icon to like/unlike songs
- Create playlists with custom names
- Add songs to existing playlists
- Access everything in your Library

#### 🔍 **Search**
- Real-time search as you type
- Search across songs, artists, and albums
- Filter results by category

---

## 🎨 Screenshots

<!-- Add your screenshots here -->
*Coming Soon - Add screenshots of your app's main features*

---

## 🔧 API Endpoints

### **Authentication**
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user

### **Music**
- `GET /api/songs` - Get all songs
- `GET /api/songs/search?q=query` - Search songs
- `GET /api/songs/:id` - Get specific song

### **User Actions**
- `POST /api/users/like/:songId` - Like/unlike song
- `GET /api/users/liked` - Get user's liked songs
- `POST /api/playlists` - Create playlist
- `GET /api/playlists` - Get user playlists
- `POST /api/playlists/:id/songs` - Add song to playlist

---

## 🎭 Development

### **Available Scripts**

**Frontend (client/):**
- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

**Backend (server/):**
- `npm run dev` - Start with nodemon
- `npm start` - Start production server
- `npm run test` - Run tests

### **Code Style**
- ESLint configuration for consistent code quality
- Prettier for automatic code formatting
- Husky pre-commit hooks (optional)

---

## 🚀 Deployment

### **Frontend (Vercel/Netlify)**
1. Build the client: `cd client && npm run build`
2. Deploy the `dist` folder to your hosting platform
3. Set environment variables for API endpoints

### **Backend (Railway/Render/Heroku)**
1. Push your code to GitHub
2. Connect your repository to the hosting platform
3. Set environment variables
4. Deploy from the `server` directory

### **Database (MongoDB Atlas)**
1. Create a MongoDB Atlas cluster
2. Update `MONGODB_URI` in your environment variables
3. Whitelist your deployment IP addresses

---

## 🤝 Contributing

We love contributions! Here's how you can help:

1. **Fork the repository**
2. **Create your feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### **Development Guidelines**
- Follow the existing code style
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

---

<div align="center">
  <h3>🎵 Made with ❤️ for music lovers everywhere</h3>
  <p>Star ⭐ this repository if you found it helpful!</p>
</div>
