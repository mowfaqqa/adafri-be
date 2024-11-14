// // ======================
// // Database Configuration
// // ======================
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGODB_URI || "mongodb://localhost:3000/campaign-api"
    );
    console.log("MongoDb connected Successfully");
  } catch (error) {
    console.error("MongoDD connection error", error);
    process.exit(1);
  }
};

module.exports = connectDB;
