import express from "express";
import cors from "cors";
import productRoutes from "./routes/productRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

const app = express();

// ✅ ENABLE CORS
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());

// ✅ TEST ROUTE
app.get("/test", (req, res) => {
  res.json({ message: "OhmGo backend connected successfully" });
});

app.use("/api/products", productRoutes);
app.use("/api/admin", adminRoutes);

export default app;
