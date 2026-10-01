# Student Placement Assistant

Student Placement Assistant is a full-stack web application designed to help students prepare for campus placements by tracking their placement readiness and identifying skill gaps for their target job role.

## Features

### 1. Placement Readiness Dashboard

Students can enter their self-assessed scores for:

- DSA
- Core CS
- Projects
- Resume
- Aptitude
- Communication

The application calculates an overall placement readiness score and identifies the two areas with the lowest scores as focus areas.

### 2. Target Role Skill Gap Analyzer

Students can select a target role and compare their current skills with the skills required for that role.

Currently supported roles:

- Full Stack Developer
- Data Scientist
- Java Developer

The application displays:

- Required skills
- Matched skills
- Missing skills
- Skill match percentage

## Technology Stack

### Frontend

- React
- Vite
- React Router
- JavaScript
- CSS

### Backend

- Node.js
- Express.js
- REST API
- JWT Authentication
- bcryptjs

### Database

- MongoDB
- Mongoose

### Development Tools

- VS Code
- Thunder Client
- Git
- GitHub

## Project Architecture

```text
student-placement-assistant/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── ProtectedRoute.jsx
│   │   │   ├── ReadinessCard.jsx
│   │   │   └── SkillGapCard.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   └── SkillGap.jsx
│   │   │
│   │   ├── services/
│   │   │   └── api.js
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   └── package.json
│
├── server/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── readinessController.js
│   │   └── skillGapController.js
│   │
│   ├── middleware/
│   │   └── authMiddleware.js
│   │
│   ├── models/
│   │   ├── User.js
│   │   ├── Readiness.js
│   │   └── Role.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── readinessRoutes.js
│   │   └── skillGapRoutes.js
│   │
│   ├── utils/
│   │   ├── calculateReadiness.js
│   │   └── seedRoles.js
│   │
│   ├── .env
│   └── server.js
│
├── .gitignore
└── README.md


  How the Application Works:
  User
 │
 ▼
React Frontend
 │
 ├── Login/Register
 │
 ├── Placement Readiness Dashboard
 │
 └── Skill Gap Analyzer
 │
 ▼
Express REST API
 │
 ├── JWT Authentication
 │
 ├── Readiness Calculation
 │
 └── Skill Gap Analysis
 │
 ▼
MongoDB

Authentication Flow
User registers with name, email and password.
Password is hashed using bcryptjs.
User logs in with email and password.
Backend verifies the credentials.
Backend generates a JWT token.
Frontend stores the token.
Protected routes check for the token.
Backend middleware verifies the JWT before accessing protected APIs


Readiness Calculation

The overall readiness score is calculated using the average of six areas:

DSA
Core CS
Projects
Resume
Aptitude
Communication

Example:

DSA           75
Core CS       60
Projects      80
Resume        90
Aptitude      65
Communication 70

Overall Score = 73%

The two lowest-scoring areas are displayed as focus areas.

Skill Gap Calculation

For a selected target role, the student's skills are compared with the required skills stored in MongoDB.

Example:

Target Role: Full Stack Developer

Matched:
HTML
CSS
JavaScript

Missing:
React
Node.js
Express
MongoDB

Skill Match: 43%
API Endpoints
Authentication
POST /api/auth/register
POST /api/auth/login
Placement Readiness
POST /api/readiness
GET  /api/readiness
Skill Gap
POST /api/skill-gap/analyze

Protected endpoints require:

Authorization: Bearer <JWT_TOKEN>
Installation
1. Clone the repository
git clone <your-github-repository-url>
cd student-placement-assistant
2. Install backend dependencies
cd server
npm install
3. Configure environment variables

Create:

server/.env

Add:

PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/student-placement-assistant
JWT_SECRET=your-secret-key
4. Start the backend
npm run dev

The backend runs on:

http://localhost:5000
5. Install frontend dependencies

Open another terminal:

cd client
npm install
6. Start the frontend
npm run dev

The frontend runs on:

http://localhost:5173
Future Improvements

Possible future improvements include:

More target job roles
More detailed skill recommendations
Placement preparation resources
Progress tracking over time
Cloud deployment
Resume-based skill extraction
Author

Sameera

Student Placement Assistant — Full Stack Web Application