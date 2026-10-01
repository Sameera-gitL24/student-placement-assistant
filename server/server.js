const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

const readinessRoutes = require("./routes/readinessRoutes");

const skillGapRoutes = require("./routes/skillGapRoutes");
//const authMiddleware = require("./middleware/authMiddleware");
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/auth", authRoutes);
app.use("/api/readiness", readinessRoutes);
app.use("/api/skill-gap", skillGapRoutes);
// app.use("/api/auth", authRoutes);
// app.use("/api/readiness", readinessRoutes);
// app.get("/api/protected", authMiddleware, (req, res) => {
//     res.json({
//         message: "You are authenticated",
//         userId: req.userId
//     });
// });

app.get("/", (req, res) => {
    res.json({ message: "Student Placement Assistant API is running" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});