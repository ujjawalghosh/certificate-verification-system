

import dotenv from "dotenv";
import { connectDb } from "./utils/connectDb.js";
import app from "./app.js";

dotenv.config();

const port = process.env.PORT || 5000;

connectDb()
  .then(() => {
app.listen(port, '0.0.0.0', () => {
      console.log(`CertiFlow API running on port ${port}`);
      console.log(`Connected to MongoDB successfully`);
    });
  })
  .catch((error) => {
    console.error("Database connection failed:", error.message);
    process.exit(1);
  });
