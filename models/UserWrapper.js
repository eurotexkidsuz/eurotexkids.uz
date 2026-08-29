const mongoose = require("mongoose");
const MongooseUser = require("./User");
const fs = require("fs");
const path = require("path");

const DB_FILE = path.join(__dirname, "../database.json");

function readDB() {
  try {
    if (!fs.existsSync(DB_FILE)) return [];
    const content = fs.readFileSync(DB_FILE, "utf8");
    return JSON.parse(content || "[]");
  } catch (err) {
    return [];
  }
}

function writeDB(data) {
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 4), "utf8");
  } catch (err) {
    console.error("Local DB write error:", err);
  }
}

const isDbConnected = () => mongoose.connection.readyState === 1;

class UserMock {
  constructor(data) {
    this._id =
      data && data._id
        ? data._id.toString()
        : Math.random().toString(36).substring(2, 11);
    this.email = "";
    this.code = null;
    this.codeExpiry = null;
    this.telegramChatId = null;
    this.resendCount = 0;
    this.failedAttempts = 0;
    this.blockCount = 0;
    this.blockedUntil = null;
    this.rememberToken = null;
    this.role = "user";
    this.telegramLinkToken = null;
    this.telegramLinkTokenExpiry = null;
    this.isGuest = false;
    this.magicToken = null;
    this.magicTokenExpiry = null;
    this.sessions = [];
    this.loginLogs = [];
    this.createdAt = new Date();
    this.updatedAt = new Date();
    Object.assign(this, data);
  }

  // Safe local JSON save — no Mongoose calls, no recursion
  async save() {
    const db = readDB();
    const idx = db.findIndex(
      (u) => u.email && u.email.toLowerCase() === this.email.toLowerCase(),
    );
    this.updatedAt = new Date();
    // Convert to plain object safely
    const plain = {};
    for (const key of Object.keys(this)) {
      plain[key] = this[key];
    }
    if (idx !== -1) {
      db[idx] = plain;
    } else {
      db.push(plain);
    }
    writeDB(db);
    return this;
  }
}

// Wrapper constructor — returns Mongoose doc if DB connected, else UserMock
function User(data) {
  if (isDbConnected()) {
    return new MongooseUser(data);
  }
  return new UserMock(data);
}

// Static methods
User.findOne = async function (query) {
  if (isDbConnected()) {
    try {
      return await MongooseUser.findOne(query);
    } catch (err) {
      console.error(
        "Mongoose findOne failed, falling back to local DB:",
        err.message,
      );
    }
  }

  // Local DB query parser
  const db = readDB();
  const userObj = db.find((u) => {
    for (let key in query) {
      const val = query[key];
      if (key === "email") {
        if (!u.email || u.email.toLowerCase() !== val.toLowerCase())
          return false;
      } else if (val && typeof val === "object" && "$gt" in val) {
        const uVal = u[key] ? new Date(u[key]) : null;
        const gtVal = new Date(val["$gt"]);
        if (!uVal || uVal <= gtVal) return false;
      } else {
        if (u[key] !== val) return false;
      }
    }
    return true;
  });

  if (!userObj) return null;
  return new UserMock(userObj);
};

User.findById = async function (id) {
  if (isDbConnected()) {
    try {
      return await MongooseUser.findById(id);
    } catch (err) {
      console.error(
        "Mongoose findById failed, falling back to local DB:",
        err.message,
      );
    }
  }

  const db = readDB();
  const userObj = db.find((u) => u._id && u._id.toString() === id.toString());
  if (!userObj) return null;
  return new UserMock(userObj);
};

User.find = async function (query) {
  if (isDbConnected()) {
    try {
      return await MongooseUser.find(query);
    } catch (err) {
      console.error(
        "Mongoose find failed, falling back to local DB:",
        err.message,
      );
    }
  }

  const db = readDB();
  const matches = db.filter((u) => {
    for (let key in query) {
      if (u[key] !== query[key]) return false;
    }
    return true;
  });
  return matches.map((u) => new UserMock(u));
};

module.exports = User;
