import express from "express";
import { createServer as createViteServer } from "vite";
import Database from "better-sqlite3";

// Initialize SQLite database
const db = new Database("waitlist.db");
db.exec(`
  CREATE TABLE IF NOT EXISTS waitlist (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Waitlist API Route
  app.post("/api/waitlist", (req, res) => {
    const { email } = req.body;
    
    // Simple email validation
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return res.status(400).json({ error: "Valid email is required" });
    }

    try {
      const stmt = db.prepare("INSERT INTO waitlist (email) VALUES (?)");
      stmt.run(email);
      res.status(201).json({ success: true, message: "Added to waitlist!" });
    } catch (error: any) {
      if (error.code === "SQLITE_CONSTRAINT_UNIQUE") {
        return res.status(409).json({ error: "Email already registered" });
      }
      console.error("Database error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static("dist"));
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
