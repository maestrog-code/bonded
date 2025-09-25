# Bonded — Full Working Starter (Frontend + Backend)

This is a lightweight starter to run Bonded locally without requiring Postgres or Prisma.
- Backend: Node.js + Express + lowdb (file-based JSON DB) — quick to run
- Frontend: React + Vite

## Quickstart (Fedora)

### Backend
```bash
cd backend
npm install
# start server
node index.js
# server runs on http://localhost:4000
```

### Frontend
```bash
cd frontend
npm install
npm run dev
# frontend runs on http://localhost:5173
```

### Notes
- The backend uses a simple JSON data store at `backend/data/db.json`. It's suitable for development and prototyping.
- For production, replace lowdb with Postgres and a migration-ready ORM.
