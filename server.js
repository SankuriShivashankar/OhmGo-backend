import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./config/db.js";

// Load env variables FIRST
dotenv.config();

// Connect to MongoDB
connectDB();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`🚀 Server is running on port ${port}`);
});
