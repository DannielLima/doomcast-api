const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const exaggerations = {
  sunny: "🔥 You will be roasted alive. SPF 9000 required.",
  rainy: "🌊 The flood is coming. Noah is building an ark.",
  cloudy: "☁️ The sky is falling. Panic now!",
  windy: "🌪️ Hold onto your house, it's flying away!",
  snowy: "❄️ Winter is here. White Walkers are marching.",
  stormy: "⚡ Zeus is angry. Hide before he strikes!",
};

app.get("/weather", (req, res) => {
  const { condition } = req.query;
  if (!condition) {
    return res.status(400).json({
      error: "Please provide a weather condition (e.g., ?condition=sunny)",
    });
  }

  const lowerCondition = condition.toLowerCase();
  const exaggeratedResponse =
    exaggerations[lowerCondition] ||
    "😵 Unknown weather! Expect the unexpected.";

  res.json({ condition, exaggeratedResponse });
});

const doomPredictions = [
  "💀 The end is near! Stock up on canned beans.",
  "🛸 Aliens are invading. Grab your tinfoil hat!",
  "🌋 A volcano will erupt under your house. Good luck.",
  "🐙 Cthulhu has awakened. The oceans belong to him now.",
  "🔮 The spirits whisper... and they don’t like you.",
  "🚀 Earth is on course for the sun. Say your goodbyes.",
];

app.get("/doom", (req, res) => {
  const randomDoom =
    doomPredictions[Math.floor(Math.random() * doomPredictions.length)];
  res.json({ doomPrediction: randomDoom });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
