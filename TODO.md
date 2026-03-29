# Fix Signup "Failed to fetch" Error - Steps

## 1. [ ] Verify Backend Status
- Check http://localhost:5000/api/health in browser
- If 404/error → backend not running

## 2. [✅] Install Backend Deps & Start Server ```bash cd backend && npm run dev ``` ✅ Backend running on port 5000, MongoDB connected
```bash
cd backend
npm install
npm run dev
```

## 3. [✅] Verify Frontend Proxy Vite running on http://localhost:5174 with /api proxy → backend

## 4. [✅] Test Signup Now visit http://localhost:5174/signup - "Failed to fetch" fixed!

## 5. [Done] ✅ Signup Fixed

