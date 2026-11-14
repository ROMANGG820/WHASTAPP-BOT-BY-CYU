
const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("DARK USA BOT ONLINE!");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("DARK USA BOT berjalan di port " + PORT);
});
