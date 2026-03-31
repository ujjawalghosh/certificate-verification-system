import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import certificateRoutes from "./routes/certificateRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

const app = express();
const requestBodyLimit = process.env.REQUEST_BODY_LIMIT || "10mb";
import { FRONTEND_URL } from "./server.js";
const allowedOrigin = process.env.CLIENT_URL || FRONTEND_URL;

app.use(
  cors({
    origin: allowedOrigin,
  })
);
app.use(express.json({ limit: requestBodyLimit }));
app.use(express.urlencoded({ extended: true, limit: requestBodyLimit }));

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", service: "certiflow-backend" });
});

app.use("/api/auth", authRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/certificates", certificateRoutes);
app.use("/api/admin", adminRoutes);

// Global error handler
app.use((err, req, res, next) => {
  console.error('Global server error:', err.stack);
  res.status(500).json({ 
    message: 'Internal server error',
    ...(process.env.NODE_ENV === 'development' && { error: err.message })
  });
});

export default app;
