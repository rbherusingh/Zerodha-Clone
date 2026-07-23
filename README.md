# 📈 Zerodha Clone

A full-stack trading platform clone built with the MERN stack, replicating core features of Zerodha — India's largest stock broker.

---



## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React.js, Bootstrap 5, React Router DOM |
| Dashboard | React.js, Chart.js, MUI, Axios |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas, Mongoose |
| Auth | Custom JWT-ready Auth (Signup/Login) |

---

## 📁 Project Structure

```
Zerodha Clone/
├── frontend/        # Landing page, Navbar, Signup, Login
├── dashboard/       # Trading dashboard, Holdings, Orders, Positions
└── backend/         # REST API, MongoDB models, Auth routes
```

---

## ✨ Features

- 🏠 **Landing Page** — Hero, Stats, Pricing, Awards, Education sections
- 🔐 **Authentication** — Signup & Login with MongoDB
- 📊 **Dashboard** — Holdings, Positions, Orders, Funds
- 📈 **Charts** — Doughnut & Vertical graphs using Chart.js
- 👀 **Watchlist** — Live stock watchlist UI
- 🛒 **Buy/Sell Window** — Order placement UI
- 🚪 **Logout** — Redirects to landing page

---

## ⚙️ Getting Started

### Prerequisites
- Node.js v18+
- MongoDB Atlas account
- npm

### Installation

1. **Clone the repo:**
```bash
git clone https://github.com/rbherusingh440/zerodha-clone.git
cd zerodha-clone
```

2. **Install dependencies:**
```bash
# Install root dependencies
npm install

# Install frontend dependencies
npm install --prefix frontend

# Install dashboard dependencies
npm install --prefix dashboard

# Install backend dependencies
npm install --prefix backend
```

3. **Setup environment variables:**

Create `backend/.env` file:
```
MONGO_URL=your_mongodb_atlas_connection_string
PORT=3002
```

4. **Run all three servers together:**
```bash
npm start
```

This starts:
- Frontend → http://localhost:3000
- Dashboard → http://localhost:3001
- Backend API → http://localhost:3002

---

## 🔗 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/signup` | Register new user |
| POST | `/login` | Login user |
| GET | `/allHoldings` | Get all holdings |
| GET | `/allPositions` | Get all positions |
| POST | `/newOrder` | Place new order |

---

## 📸 Screenshots

> Coming Soon

---

## 👨‍💻 Author

**Bheru Singh**
- GitHub: [@rbherusingh440](https://github.com/rbherusingh440)
- LinkedIn: [linkedin.com/in/bheru-singh](https://linkedin.com/in/bheru-singh)
- Email: rbherusingh440@gmail.com

---

## 📄 License

This project is for educational purposes only. Not affiliated with Zerodha Broking Ltd.
