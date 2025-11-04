// backend/src/server.ts
import express from "express";
import cors from "cors";

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Тестовый эндпоинт
app.get("/api/students", (req, res) => {
  res.json([
    { id: 1, name: "Иван Иванов", citizenship: "Россия" },
    { id: 2, name: "Мария Петрова", citizenship: "Казахстан" },
  ]);
});

app.listen(PORT, () => {
  console.log(`🎯 Backend running on http://localhost:${PORT}`);
});
