import express from "express";
import cors from "cors";
import env from "./src/config/env.js";
import connectDB from "./src/config/db.js";
import { clerkMiddleware } from "@clerk/express";
import clerkWebhooks from "./src/middlewares/clerkWebhook.js";

connectDB(env.MONGODB_URI);

const app = express();
app.use(cors());

app.use(express.json());
app.use(clerkMiddleware());

app.get("/", (req, res) => {
  res.send("API is working");
});

// API to listen Clerk Webhook
app.use("/api/clerk", clerkWebhooks);

app.listen(env.PORT, () => {
  console.log(`✅ Server running: http://localhost:${env.PORT}`);
});
