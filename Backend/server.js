const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const contactRoutes = require("./routes/contactRoutes");

const app = express();

// ✅ CORS (allow Netlify frontend)
app.use(cors({
  origin: "*",
  methods: ["GET", "POST"],
}));

// ✅ Middleware
app.use(express.json());

// ✅ MongoDB Connection (FIXED)




  mongoose.connect(process.env.MONGO_URI, {
  dbName: "commerce_maestro", // 🔥 IMPORTANT FIX
})
.then(() => console.log("✅ MongoDB connected"))
.catch((err) => console.log("❌ MongoDB error:", err));

// ✅ Routes
app.use("/api", contactRoutes);

// ✅ Test route
app.get("/", (req, res) => {
  res.send("🚀 Backend is running");
});

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running  on port  ${PORT}`);
});