import express from "express";
import cors from "cors";
import env from "./src/config/env.js";
import connectDB from "./src/config/db.js";
import { clerkMiddleware } from "@clerk/express";
import clerkWebhooks from "./src/middlewares/clerkWebhook.js";

const app = express();
app.use(cors());
app.use(clerkMiddleware);
app.use(express.json());

// API to listen Clerk Webhook
app.use("/api/clerk", clerkWebhooks);

app.get("/", (req, res) => {
  res.send("API is working");
});

(async () => {
  try {
    await connectDB(env.MONGODB_URI);

    app.listen(env.PORT, () => {
      console.log(`✅ Server running: http://localhost:${env.PORT}`);
    });
  } catch (error) {
    console.log(error, "Failed to start the server");
  }
})();
