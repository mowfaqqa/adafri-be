const express = require("express");
require("dotenv").config();
const connectDB = require("./config/db");
const campaignRoutes = require("./routes/campaignRoutes");

const app = express();
app.use(express.json());

// ========================
// Error Handler Middleware
// ========================

app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).json({
        success: false,
        error: "something went wrong!",
    });
});
// Routes
app.use("/api", campaignRoutes);

// ==============
// Server Startup
// ==============

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();

