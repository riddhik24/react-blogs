import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const ai = new GoogleGenAI({ apiKey: process.env.GEMIMI_API_KEY });
// console.log(process.env.GEMIMI_API_KEY);
app.get("/", async (req, res) => {
  res.send("Hi");
});

app.post("/api/chat", async (req, res) => {
  const { message } = req.body;

  // const message = "Hi";
  try {
    const result = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: message,
    });

    // console.log(result.text);
    res.json(result.text);
  } catch (err) {
    console.log("Error:", err.message);
    res.status(500).json({ error: "Something went wrong" });
  }
});
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
