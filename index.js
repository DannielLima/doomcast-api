const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const exaggerations = {
  sunny: "🔥 Just like your ex—hot, distant, and trying to kill you.",
  rainy: "🌊 Drowning in water, just like you're drowning in debt.",
  cloudy: "☁️ Just like your future—gray and depressing.",
  windy: "🌪️ Life’s falling apart, just like your umbrella.",
  snowy: "❄️ Cold, empty, and unforgiving—just like your soul.",
  stormy: "⚡ Chaotic, violent, and full of regret—just like your last relationship.",
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
  "💀 Hope you enjoyed life. It’s over soon.",
  "🛸 Aliens are coming. You’re not on the VIP list.",
  "🌋 Your house is now premium lava-front property.",
  "🐙 Cthulhu woke up. You're on the menu.",
  "🔮 The spirits say... nah, you don’t wanna know.",
  "🚀 Earth is speedrunning its way into the sun.",
];

app.get("/doom", (req, res) => {
  const randomDoom =
    doomPredictions[Math.floor(Math.random() * doomPredictions.length)];
  res.json({ doomPrediction: randomDoom });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
