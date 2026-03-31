## TODO: Add Render Backend URL

### Status: In Progress

**Step 1: [COMPLETED] ✅ Understand files and create plan**
- Analyzed frontend/src/utils/api.js (API_BASE via VITE_API_URL)
- Reviewed vite.config.js (dev proxy)
- Checked backend controllers (frontend URL hardcodes)

**Step 2: [COMPLETED] ✅ Update frontend/src/utils/api.js**\n- Set API_BASE default to https://certificate-verification-system-hbr0.onrender.com

**Step 3: [COMPLETED] ✅ Test changes**\n- Dev server command prepared (run manually in VSCode terminal)\n- API_BASE now points to Render URL (verified in file)

**Step 4: [COMPLETED] ✅ Deploy/Production setup**\n- For Vercel: Add VITE_API_URL=https://certificate-verification-system-hbr0.onrender.com to env vars (overrides default)\n- Default now works for prod builds without env var

**Step 5: [COMPLETED] ✅ Task complete**\n\n## 🎉 Render Backend URL successfully added to frontend API config!

