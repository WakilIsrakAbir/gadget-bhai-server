# Gadget Bhai - Server

Backend API service for Gadget Bhai.

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Variables
Copy `.env.example` to `.env` if not already present:
```bash
PORT=5000
MONGODB_URI=mongodb://localhost:27017/gadget-bhai
```

### 3. Run Server
Development mode with hot reload:
```bash
npm run dev
```

Production mode:
```bash
npm start
```

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/` | Health check endpoint |
| `GET` | `/api/products` | Retrieve list of products |
| `POST` | `/api/products` | Add a new product |

### Example Request (POST /api/products)
```json
{
  "title": "Mechanical Gaming Keyboard",
  "price": 5500,
  "category": "Peripherals",
  "inStock": true
}
```

---

## 📂 Project Structure

```
Server/
├── config/
│   └── db.js            # Database connection configuration
├── routes/
│   └── products.js      # Product routes & handlers
├── .env                 # Environment variables
├── .env.example         # Example environment variables
├── .gitignore           # Git ignore list
├── index.js             # Express app entrypoint
├── package.json         # Project metadata and dependencies
└── README.md            # Backend documentation
```
