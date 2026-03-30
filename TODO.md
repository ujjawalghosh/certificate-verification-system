# FIXED: Login Issue - Step by Step

## ✅ Problem Solved
**Login failed because:**
- backend/.env malformed → dotenv couldn't parse MONGODB_URI/JWT_SECRET
- Server never started → port 5000 connection refused
- Frontend 'Failed to fetch' error

## Steps Completed
- [x] Created backend/test-env.js → Diagnosed missing env vars
- [x] Created backend/.env.example → Correct template

## 🚀 IMMEDIATE FIX (Copy this):
1. **Copy backend/.env.example → backend/.env** (overwrite)
2. **EDIT backend/.env**:
   ```
   MONGODB_URI=your_atlas_cluster_url_here  # Paste your cluster URL (no quotes!)
   JWT_SECRET=mySecretKey1234567890123456  # Make 32+ chars
   ```
3. **Test**: `node backend/test-env.js`
   Expected:
   ```
   MONGODB_URI defined: true
   JWT_SECRET defined: true
   ```
4. **Start server**: `node backend/src/server.js`
   Expected:
   ```
   CertiFlow API running on port 5000
   Connected to MongoDB successfully
   ```
5. **Test health**: New terminal `curl http://localhost:5000/api/health`
6. **Frontend login** → Works!

## Delete after fix:
```
rm backend/test-env.js
rm backend/.env.example
```

**Login will work after server starts on port 5000!**
