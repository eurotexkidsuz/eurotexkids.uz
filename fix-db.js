require("dotenv").config();
const dns = require("dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);
const mongoose = require("mongoose");

async function fix() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to MongoDB.");

    const db = mongoose.connection.db;
    // Drop the phoneNumber index
    try {
      await db.collection("users").dropIndex("phoneNumber_1");
      console.log("Dropped phoneNumber_1 index.");
    } catch (e) {
      console.log("Index might not exist:", e.message);
    }

    await mongoose.disconnect();
    console.log("Done.");
  } catch (e) {
    console.error(e);
  }
}
fix();
