import express from "express";
import cors from "cors";
import productRoutes from "./routes/productRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

const app = express();

// ✅ ALLOW BOTH LOCAL & DEPLOYED FRONTEND
const allowedOrigins = [
  "http://localhost:5173",
  "https://ohm-go.vercel.app"
];

app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin (Postman, server-to-server)
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
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
