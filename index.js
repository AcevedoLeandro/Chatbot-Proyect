const PORT = 8000;
import express from "express";
const app = express();

import { consultaOpenAI } from "./config/openaiConsult.js";

app.use(express.json());
app.use(express.static(import.meta.dirname + "/public"));

app.get("/", (req, res) => {
  res.send("ok");
});

app.post("/ia", async (req, res) => {
  let responseia = await consultaOpenAI(req.body.userConsult);
  res.json({ responseia });
});

app.listen(PORT, () => {
  console.log("Runing on port:", PORT);
});
