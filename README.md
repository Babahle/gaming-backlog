# Gaming Backlog

A simple app to track your game collection: add games, set progress/status, filter by category.

## Key features
- Add and edit games (title, platform, status)
- Categorise and filter your backlog
- Responsive UI built with Vue 3 and Tailwind CSS
- Pinia for state and Vue Router for navigation
- Node/Express backend with MongoDB persistence

## Tech stack
- Frontend: Vue 3, TypeScript, Tailwind CSS, Pinia, Vue Router
- Backend: Node.js, Express, MongoDB

## Quick start

### Prerequisites
- `Node.js` installed
- `MongoDB` running (local or remote)

### Run frontend
```bash
cd client
npm install
npm run dev
```

(Vite typically serves at http://localhost:5173)

### Run backend
```bash
cd server
npm install
# Set MongoDB connection (PowerShell example)
$env:MONGO_URI="mongodb://localhost:27017/gaming-backlog"
npm run dev
```
(API typically runs at http://localhost:3000)
